import { Reveal } from "@/components/landing/reveal";
import { benefits } from "@/lib/landing-content";

/**
 * Tres razones de la visita, sin repetir el titular del hero.
 */
export function HomeVisitPoints() {
  return (
    <Reveal as="ul" className="mt-16 grid gap-8 border-t border-paper/12 pt-10 sm:grid-cols-3 sm:gap-6">
      {benefits.items.map((item) => (
        <li key={item.title} className="border-t-2 border-mint/50 pt-5">
          <h3 className="t-heading text-[clamp(1.05rem,2vw,1.35rem)] uppercase text-paper">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-paper/62">{item.body}</p>
        </li>
      ))}
    </Reveal>
  );
}
