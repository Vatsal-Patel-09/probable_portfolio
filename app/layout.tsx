import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jerry Clark Ian Cabuntucan | Web Portfolio",
  description: "Portfolio website",
  icons: {
    icon: "/favicon/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme="luxury">
      <head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>

      <body className={robotoMono.className}>

        {children}

      </body>
    </html>
  );
}

