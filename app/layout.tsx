import type { Metadata } from "next";
import "./globals.css";
import '../styles/fonts.css'

export const metadata: Metadata = {
  title:{
    absolute: '',
    default: 'David Mojica',
    template: 'David Mojica | %s'
  },
  description:'Ingenería de Software'
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`font-britanica text-primary dark:bg-blue_dark bg-white bg-[linear-gradient(to_right,#DDD6FE_1px,transparent_1px),linear-gradient(to_bottom,#DDD6FE_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]`}>{children}</body>
    </html>
  );
}
