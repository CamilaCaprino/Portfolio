import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Camila Caprino | Systems Analyst · Product · Development",
  description: "Portfolio profesional de Camila Caprino: análisis de sistemas, producto, gestión de proyectos y desarrollo de software.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning><body className={`${manrope.variable} antialiased`}>{children}</body></html>;
}
