import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

//vercel.com > data storage > database neon-fuchsia-tree > suggested env.local contents with show secrets copied to .env file (- renamed .env.example to .env).

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}