import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { LandingParticles } from "@/components/landing/landing-particles";
import { LandingPixelTrail } from "@/components/landing/landing-pixel-trail";
import { LocalBusinessJsonLd } from "@/components/landing/local-business-json-ld";
import { Process } from "@/components/landing/process";
import { QuoteSection } from "@/components/landing/quote-section";
import { Services } from "@/components/landing/services";
import { Statement } from "@/components/landing/statement";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <LocalBusinessJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Services />
        <QuoteSection />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <LandingParticles />
      <LandingPixelTrail />
      <WhatsAppFab />
    </div>
  );
}
