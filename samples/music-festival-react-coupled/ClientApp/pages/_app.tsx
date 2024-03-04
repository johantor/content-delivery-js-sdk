import '@/styles/globals.css';
import { defaultConfig } from '@episerver/content-delivery';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        // Adjusting runtime configuration
        defaultConfig.apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
        defaultConfig.selectAllProperties = true;
        defaultConfig.expandAllProperties = true;

        // defaultConfig.getUrl = (url) => {
        //     if (typeof window !== 'undefined') {
        //         // Always use relative URL client-side.
        //         var tempUrl = new URL(url, 'http://temp')
        //         return tempUrl.pathname + tempUrl.search
        //     }
        //     return url
        // }
    }, []);

    return <Component {...pageProps} />;
}
