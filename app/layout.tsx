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
    default: "Astro PC | Mantenimiento a PS5, DualSense y PC gamer a domicilio",
    template: "%s | Astro PC",
  },
  description:
    "Mantenimiento a PS5, DualSense de PS5 y PC gamer a domicilio en San Salvador. No en todos los distritos: en Ver precio ves cuánto te cobran. Metal líquido en la PS5, pasta térmica en la PC o palancas magnéticas, según lo que toque.",
  keywords: [
    "Astro PC",
    "mantenimiento a domicilio",
    "mantenimiento PS5",
    "metal líquido PS5",
    "metal líquido alemán",
    "pasta térmica PC",
    "mantenimiento DualSense",
    "PC Gamer",
    "DualSense PS5",
    "palancas magnéticas",
    "San Salvador",
    "Santa Tecla",
    "a domicilio",
    "en tu casa",
  ],
  icons: {
    icon: "/astro-logo.png",
  },
  openGraph: {
    title: "Astro PC | Mantenimiento a PS5, DualSense y PC gamer a domicilio",
    description:
      "Mantenimiento a PS5, DualSense de PS5 y PC gamer a domicilio. Vamos a tu casa en San Salvador, no en todos los distritos.",
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
