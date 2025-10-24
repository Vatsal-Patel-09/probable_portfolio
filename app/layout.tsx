import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// To disable SSR for CursorEffectComponent
const CursorEffectComponent = dynamic(() => import("@/components/CursorEffectComponent"), {
  ssr: false,
});

// Custom cursor component
const CustomCursor = dynamic(() => import("@/components/CustomCursor").then(mod => mod.CustomCursor), {
  ssr: false,
});

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jerry Clark Ian Cabuntucan | Web Portfolio",
  description: "Full Stack Developer - ReactJS, VueJS, NextJS, NuxtJS, NodeJS, ExpressJS, NestJS, MongoDB, PostgreSQL, MySQL, Docker, Kubernetes, AWS, Azure, GCP, GitHub, GitLab",
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

        <CustomCursor />
        <CursorEffectComponent />
        {children}

      </body>
    </html>
  );
}

