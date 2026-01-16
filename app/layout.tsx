import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/brand";
import { NAV_LINKS, FOOTER_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <header className="fixed top-0 w-full z-50 glass">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <Image
                                src={BRAND.logo || "/logo.png"}
                                alt={BRAND.name}
                                width={32}
                                height={32}
                                className="rounded-lg group-hover:rotate-12 transition-transform duration-300"
                            />
                            <span className="text-2xl font-bold text-primary tracking-tight">
                                {BRAND.name}
                            </span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/sign-in"
                                className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                            >
                                Sign In
                            </Link>
                        </div>
                    </nav>
                </header>

                <main className="pt-16 min-h-screen">
                    {children}
                </main>

                <footer className="bg-surface border-t border-white/5 py-12 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1">
                            <Link href="/" className="flex items-center space-x-2 mb-4 group">
                                <Image
                                    src={BRAND.logo || "/logo.png"}
                                    alt={BRAND.name}
                                    width={24}
                                    height={24}
                                    className="rounded-md opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <span className="text-xl font-bold text-primary">
                                    {BRAND.name}
                                </span>
                            </Link>
                            <p className="text-muted text-sm leading-relaxed max-w-xs">
                                {BRAND.tagline}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                {FOOTER_LINKS.product.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted text-sm hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                {FOOTER_LINKS.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted text-sm hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                {FOOTER_LINKS.support.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted text-sm hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
                        <p className="text-muted text-xs">
                            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
