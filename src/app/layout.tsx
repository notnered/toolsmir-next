import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Provider } from 'react-redux';
import store from './store/store';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin', 'cyrillic'],
    weight: 'variable',
})

export const metadata: Metadata = {
    title: 'Мир-инструмента',
    description: 'Мир-инструмента - магазин строительной техники',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store} >
            <html lang='en'>
                <body className={`${roboto.className} container mx-auto px-2 antialiased`}>
                    {children}
                </body>
            </html>
        </Provider>
    );
}
