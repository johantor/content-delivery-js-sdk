import {
    ContentData,
    ContextMode,
    ResolvedContent,
    ResolvedContentStatus,
} from '@episerver/content-delivery';
import deepEqual from 'deep-equal';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import useResolvedContent from '../src/hooks/useResolvedContent';
import EpiserverPage from '../src/pages/EpiserverPage';

const Page = () => {
    const router = useRouter();
    const { pending, resolvedContent, updateContentByUrl } =
        useResolvedContent();
    const [pageContent, setPageContent] = useState<
        ResolvedContent<ContentData>
    >({} as ResolvedContent<ContentData>);

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

    // console.log(
    //     'EditMode',
    //     resolvedContent.mode == ContextMode.Edit ? 'true' : false
    // );

    // console.log('resolvedContent.status', resolvedContent.status);
    // console.log(
    //     'ResolvedContentStatus.Resolved',
    //     ResolvedContentStatus.Resolved
    // );

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
                        <EpiserverPage model={pageContent.content} />
                    </div>
                )}
        </>
    );
};

export default Page;
