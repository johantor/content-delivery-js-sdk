import BlockComponentSelector from '@/components/BlockComponentSelector';
import { default as getContent } from '@/utils/getContent';
import {
    ContextMode,
    ResolvedContentStatus,
} from '@episerver/content-delivery';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
    const { getContentByUrl } = getContent();
    let pageContent = await getContentByUrl();

    return {
        title: pageContent.content?.name || '',
    };
}

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
