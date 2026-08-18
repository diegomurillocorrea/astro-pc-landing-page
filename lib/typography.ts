/**
 * Ancho medio (en `em`) de un carácter en Syne Extrabold mayúsculas con el
 * tracking del titular. Medido sobre las líneas reales de la landing y
 * redondeado hacia arriba para cubrir combinaciones anchas tipo "AGENDAMOS".
 */
const DISPLAY_CHAR_RATIO = 1.15;

/**
 * Devuelve un `font-size` que hace que la línea ocupe el ancho disponible sin
 * partirse ni desbordar, con un tope máximo.
 *
 * Cada línea del titular acaba con un tamaño distinto según su longitud, que
 * es justamente el efecto editorial buscado.
 *
 * @param text Contenido de la línea.
 * @param cap Tamaño máximo (cualquier valor CSS, normalmente un `clamp`).
 * @param reserveEm Espacio extra a reservar en la línea, en `em`, para piezas
 * que acompañan al texto (por ejemplo una etiqueta en línea).
 */
export function fitLineSize(text: string, cap: string, reserveEm = 0): string {
  const units = (text.length * DISPLAY_CHAR_RATIO + reserveEm).toFixed(2);

  return `min(${cap}, calc((100vw - 2 * var(--gutter)) / ${units}))`;
}
