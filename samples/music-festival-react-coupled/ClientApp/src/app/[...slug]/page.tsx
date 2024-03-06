import BlockComponentSelector from '@/components/BlockComponentSelector';
import { default as getContent } from '@/utils/getContent';
import {
    ContextMode,
    ResolvedContentStatus,
} from '@episerver/content-delivery';
import Head from 'next/head';
import { headers } from 'next/headers';
import Script from 'next/script';

const Page = async () => {
    const headersList = headers();
    const pathname = headersList.get('x-pathname');

    const { getContentByUrl } = getContent();

    let pageContent = await getContentByUrl();

    switch (pageContent.status) {
        case ResolvedContentStatus.NotFound:
        case ResolvedContentStatus.AccessDenied:
            notFound();
        case ResolvedContentStatus.Unauthorized:
            window.location.href = `/util/login?ReturnUrl=${pathname}`;
            break;
        default:
            break;
    }
    return (
        <>
            {pageContent.status === ResolvedContentStatus.Resolved && (
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
