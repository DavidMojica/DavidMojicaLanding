import type { Metadata } from "next";
import "./globals.css";
import '../styles/fonts.css';
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.davidmojica.co'),
  title:{
    absolute: '',
    default: 'Desarrollo de software  - David Mojica',
    template: '%s | David Mojica'
  },
  description:'Desarrollo de software a la medida, paginas web, aplicaciones, programas, análisis de datos.',
  twitter: {
    card: "summary_large_image"
  },
  alternates:{
    canonical: './',
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`font-britanica text-primary dark:bg-blue_dark bg-white bg-[linear-gradient(to_right,#DDD6FE_1px,transparent_1px),linear-gradient(to_bottom,#DDD6FE_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
