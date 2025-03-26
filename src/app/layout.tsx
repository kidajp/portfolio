import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../_styles/font.css";
import "../_styles/globals.css";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="ja">
      <body className={`Root ${notoSans.variable}`}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});
