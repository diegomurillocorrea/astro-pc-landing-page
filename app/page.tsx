import { Benefits } from "@/components/landing/benefits";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { HallEffect } from "@/components/landing/hall-effect";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { QuoteSection } from "@/components/landing/quote-section";
import { Services } from "@/components/landing/services";
import { Statement } from "@/components/landing/statement";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Services />
        <QuoteSection />
        <HallEffect />
        <Benefits />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
