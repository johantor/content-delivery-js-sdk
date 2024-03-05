import {
    ContentData,
    ContextMode,
    PageData,
    ResolvedContent,
    ResolvedContentStatus,
} from '@episerver/content-delivery';
import deepEqual from 'deep-equal';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import BlockComponentSelector from '../src/components/BlockComponentSelector';
import useResolvedContent from '../src/hooks/useResolvedContent';

const Page = () => {
    const router = useRouter();
    const { pending, resolvedContent, updateContentByUrl } =
        useResolvedContent(false);
    const [pageContent, setPageContent] = useState<
        ResolvedContent<ContentData>
    >({} as ResolvedContent<PageData>);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (router.isReady) await updateContentByUrl(router.asPath);

                switch (resolvedContent.status) {
                    case ResolvedContentStatus.NotFound:
                        router.push('404');
                        break;
                    case ResolvedContentStatus.AccessDenied:
                        router.push('403');
                        break;
                    case ResolvedContentStatus.Unauthorized:
                        window.location.href = `/util/login?ReturnUrl=${router.asPath}`;
                        break;
                    default:
                        if (
                            !deepEqual(
                                pageContent.content,
                                resolvedContent.content
                            )
                        )
                            setPageContent(resolvedContent);

                        break;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [
        pageContent.content,
        pending,
        resolvedContent,
        router,
        updateContentByUrl,
    ]);

    return (
        <>
            {pending && <h1>Loading...</h1>}
            {/* You can render a loading indicator here */}
            {!pending &&
                pageContent.status === ResolvedContentStatus.Resolved && (
                    <div>
                        <Head>
                            {pageContent.content?.name && (
                                <title>{pageContent.content.name}</title>
                            )}
                        </Head>
                        {pageContent.mode == ContextMode.Edit && (
                            <Script
                                src="/episerver/cms/latest/clientresources/communicationinjector.js"
                                strategy="afterInteractive"
                            />
                        )}
                        <BlockComponentSelector content={pageContent.content} />
                    </div>
                )}
        </>
    );
};

export default Page;
