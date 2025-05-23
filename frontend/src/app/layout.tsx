import type { Metadata } from "next";
import StyledComponentsRegistry from "./providers/StyledComponentsRegistry";
import TanstackProvider from "./providers/TanstackProvider";

import { Montserrat } from "next/font/google";
import { GlobalStyle } from "@/components/common";

const montserrat = Montserrat({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recipe book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <GlobalStyle />
        <TanstackProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </TanstackProvider>
      </body>
    </html>
  );
}
