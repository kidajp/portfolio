import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../_styles/font.css";
import "../_styles/globals.css";
import { PropsWithChildren } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Shunsuke Kida",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="ja">
      <body className={`Root ${notoSans.variable}`}>
        <ViewTransition>
          <main className="mx-auto max-w-200 px-6">{children}</main>
        </ViewTransition>
      </body>
    </html>
  );
}

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});
