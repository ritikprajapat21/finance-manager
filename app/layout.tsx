import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import Navbar from "@/components/custom/Navbar";
import Tab from "@/components/custom/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Manager",
  description: "Let's you manage your finance and provides analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Tab />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
