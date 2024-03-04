import {
    ContentData,
    ContentResolver,
    ResolvedContent,
} from '@episerver/content-delivery';

const useResolvedContent = (): {
    pending: boolean;
    resolvedContent: ResolvedContent<ContentData>;
    updateContentByUrl: (url: string | undefined) => Promise<void>;
} => {
    let pending = false;
    let resolvedContent = {} as ResolvedContent<ContentData>;

    const updateContentByUrl = async (url: string | undefined) => {
        if (url) {
            pending = true;

            const contentResolver = new ContentResolver();
            const result = await contentResolver.resolveContent(url, true);

            Object.assign(resolvedContent, result);

            pending = false;
        }
    };

    return {
        pending,
        resolvedContent,
        updateContentByUrl,
    };
};

export default useResolvedContent;
