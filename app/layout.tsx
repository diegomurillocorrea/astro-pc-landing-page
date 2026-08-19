import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Astro PC | PS5, PC Gamer y DualSense a domicilio",
    template: "%s | Astro PC",
  },
  description:
    "Servicio técnico especializado a domicilio en San Salvador. Mantenimiento preventivo de PS5 y PC Gamer, y cambio de palancas con efecto Hall para mandos DualSense.",
  keywords: [
    "Astro PC",
    "mantenimiento PS5",
    "PC Gamer",
    "DualSense",
    "efecto Hall",
    "San Salvador",
    "Santa Tecla",
    "servicio a domicilio",
    "cotizador",
  ],
  icons: {
    icon: "/astro-pc-logo.png",
  },
  openGraph: {
    title: "Astro PC | PS5, PC Gamer y DualSense a domicilio",
    description:
      "Mantenimiento técnico especializado hasta tu casa en San Salvador y alrededores.",
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
      className={`${syne.variable} ${instrumentSans.variable} ${spaceMono.variable} h-full scroll-smooth antialiased`}
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
