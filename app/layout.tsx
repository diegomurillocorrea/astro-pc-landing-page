import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-chakra-petch",
});

export const metadata: Metadata = {
  title: {
    default: "Astro PC | PS5, PC Gamer y DualSense en tu casa",
    template: "%s | Astro PC",
  },
  description:
    "Astro PC va a tu casa en San Salvador. Limpiamos la PS5 o la PC gamer y, si el mando DualSense se te va solo, le ponemos palancas magnéticas.",
  keywords: [
    "Astro PC",
    "mantenimiento PS5",
    "PC Gamer",
    "DualSense",
    "palancas magnéticas",
    "San Salvador",
    "Santa Tecla",
    "en tu casa",
  ],
  icons: {
    icon: "/astro-logo.png",
  },
  openGraph: {
    title: "Astro PC | PS5, PC Gamer y DualSense en tu casa",
    description:
      "Mantenimiento de PS5, PC gamer y mandos DualSense en tu casa, en San Salvador y alrededores.",
    locale: "es_SV",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#052743",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${chakraPetch.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Sin JavaScript no hay observer que dispare los reveals: se muestran de una vez. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-navy font-sans text-paper">
        {children}
      </body>
    </html>
  );
}
