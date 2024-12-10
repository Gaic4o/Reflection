import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import "../styles";

const eraserDust = localFont({
  src: "../font/EraserDust.ttf",
  variable: "--font-eraser-dust",
  display: "swap",
});

const SchoolSafetyChalkboardEraser = localFont({
  src: "../font/SchoolSafetyChalkboardEraser.ttf",
  variable: "--font-school-safety-chalkboard-eraser",
  display: "swap",
});

const ChildFundKoreaMinGuk = localFont({
  src: "../font/ChildFundKoreaMinGuk.ttf",
  variable: "--font-child-fund-korea-min-guk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "반성문을 부탁해!",
  description: "AI 선생님과 함께 진행하는 2024 연말회고",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${eraserDust.variable} ${SchoolSafetyChalkboardEraser.variable} ${ChildFundKoreaMinGuk.variable}`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
};
