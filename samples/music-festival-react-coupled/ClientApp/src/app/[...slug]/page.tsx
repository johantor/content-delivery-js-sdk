import BlockComponentSelector from '@/components/BlockComponentSelector';
import { default as getContent } from '@/utils/getContent';
import {
    ContextMode,
    ResolvedContentStatus,
} from '@episerver/content-delivery';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
    const { getContentByUrl } = getContent();
    let pageContent = await getContentByUrl();

    return {
        title:
            `${pageContent.content?.name}  - Music Festival` ||
            'Music Festival',
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

    // window.addEventListener(
    //     'message',
    //     async (event) => {
    //         if (event.data.id === 'contentSaved') {
    //             const previewUrl = new URL(event.data.data.previewUrl);
    //             pageContent = await getContentByUrl(
    //                 previewUrl.pathname + previewUrl.search + previewUrl.hash
    //             );
    //         }
    //     },
    //     false
    // );

    return (
        <>
            {pageContent.status === ResolvedContentStatus.Resolved && (
                <div>
                    {
                        // Not 100% sure about this, if it should be loaded in both Edit and Preview
                        (pageContent.mode == ContextMode.Edit ||
                            pageContent.mode == ContextMode.Preview) && (
                            <>
                                <Script
                                    src="/episerver/cms/latest/clientresources/communicationinjector.js"
                                    strategy="afterInteractive"
                                />
                            </>
                        )
                    }

                    <BlockComponentSelector
                        content={pageContent.content}
                        mode={pageContent.mode}
                    />
                </div>
            )}
        </>
    );
};

export default Page;
