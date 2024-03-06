import {
    ContentData,
    ContentLoader,
    ContentResolver,
    ResolvedContent,
    defaultConfig,
} from '@episerver/content-delivery';
import { cookies, headers } from 'next/headers';
const getContent = (): {
    contentLoader: ContentLoader;
    contentResolver: ContentResolver;
    pending: boolean;
    resolvedContent: ResolvedContent<ContentData>;
    updateContentByUrl: (url?: string) => Promise<void>;
    getContentByUrl: (url?: string) => Promise<ResolvedContent<ContentData>>;
} => {
    /**
     * Setup the api
     */
    defaultConfig.apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    defaultConfig.selectAllProperties = true;
    defaultConfig.expandAllProperties = true;

    // TODO: Look into if this functionality is needed
    // defaultConfig.getUrl = async (url) => {
    //     return new Promise(() => {
    //         if (typeof window !== 'undefined') {
    //             // Always use relative URL client-side.
    //             var tempUrl = new URL(url, 'http://temp');
    //             return tempUrl.pathname + tempUrl.search;
    //         }
    //         return url;
    //     });
    // };

    defaultConfig.getHeaders = async () => {
        // TODO: Doublecheck this functionality
        // Forward the cookie header when rendering server-side,
        // making these calls authenticated as well.
        const cookieStore = cookies();
        const allCookies = cookieStore.getAll();

        const cookieResponse = allCookies.reduce(
            (cookies: string[], cookie) => [
                ...cookies,
                `${cookie.name}=${cookie.value}`,
            ],
            []
        );

        return { cookie: cookieResponse };
    };

    const headersList = headers();
    const pathname = headersList.get('x-pathname') || '';
    let pending = false;
    let resolvedContent = {} as ResolvedContent<ContentData>;

    /**
     * The contentResolver configured
     */
    const contentResolver = new ContentResolver();

    /**
     * The contentLoader configured
     */
    const contentLoader = new ContentLoader();

    /**
     * updateContentByUrl sets the resolvedContent parameter
     */
    const updateContentByUrl = async (url?: string) => {
        pending = true;

        const result = await contentResolver.resolveContent(
            url || pathname,
            true
        );

        if (JSON.stringify(resolvedContent) !== JSON.stringify(result))
            Object.assign(resolvedContent, result);

        pending = false;
    };

    /**
     * getContentByUrl returns the result
     */
    const getContentByUrl = async (url?: string) => {
        pending = true;

        const result = await contentResolver.resolveContent(
            url || pathname,
            true
        );

        return result;
    };

    return {
        contentLoader,
        contentResolver,
        pending,
        resolvedContent,
        updateContentByUrl,
        getContentByUrl,
    };
};

export default getContent;
