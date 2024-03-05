import {
    ContentData,
    ContentResolver,
    ResolvedContent,
} from '@episerver/content-delivery';
import { useRouter } from 'next/router';
import { useState } from 'react';
const useResolvedContent = (
    updateOnLoad: boolean = true
): {
    pending: boolean;
    resolvedContent: ResolvedContent<ContentData>;
    updateContentByUrl: (url?: string) => Promise<void>;
} => {
    let pending = false;
    const [resolvedContent, setResolvedContent] = useState<
        ResolvedContent<ContentData>
    >({} as ResolvedContent<ContentData>);
    const router = useRouter();

    const updateContentByUrl = async (url?: string) => {
        if (router.isReady) {
            pending = true;

            const contentResolver = new ContentResolver();
            const result = await contentResolver.resolveContent(
                url || router.asPath,
                true
            );

            if (JSON.stringify(resolvedContent) !== JSON.stringify(result))
                setResolvedContent(result);

            pending = false;
        }
    };

    const initData = async () => {
        try {
            if (router.isReady) await updateContentByUrl(router.asPath);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (updateOnLoad) initData();

    return {
        pending,
        resolvedContent,
        updateContentByUrl,
    };
};

export default useResolvedContent;
