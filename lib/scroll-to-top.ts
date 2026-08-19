/**
 * Vuelve al tope real de la página. Un `href="#inicio"` no sirve: si el hash
 * ya está en la URL el navegador no hace scroll, y si sí salta, el hero
 * queda debajo del header fijo.
 */
export function scrollPageToTop(event?: { preventDefault: () => void }) {
  event?.preventDefault();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // El menú pone overflow:hidden en body; el unlock ocurre en el siguiente paint.
  if (document.body.style.overflow === "hidden") {
    window.requestAnimationFrame(goToTop);
  } else {
    goToTop();
  }

  const nextUrl = `${window.location.pathname}${window.location.search}#inicio`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (currentUrl !== nextUrl) {
    window.history.replaceState(null, "", nextUrl);
  }
}
