import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

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
        <html lang='en'>
            <body className={`${roboto.className} container mx-auto antialiased`}>
                {children}
            </body>
        </html>
    );
}
