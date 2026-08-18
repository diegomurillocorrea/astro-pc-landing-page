export const brand = {
  name: "Astro PC",
  tagline: "Mantenimiento a tu hogar",
  location: "San Salvador, El Salvador",
  specialization: "PS5, PC Gamer y Mandos DualSense",
  coords: "13.6929° N / 89.2182° O",
  region: "SV · +503",
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#efecto-hall", label: "Efecto Hall" },
  { href: "#proceso", label: "Proceso" },
  { href: "#preguntas", label: "Preguntas" },
] as const;

export const whatsappMessages = {
  schedule: "Hola Astro PC, quiero agendar una visita a domicilio.",
  ps5: "Hola, me interesa el mantenimiento preventivo de PS5 ($65).",
  pc: "Hola, me interesa el mantenimiento preventivo de PC Gamer ($65).",
  joysticks: "Hola, quiero cotizar el cambio de palancas con efecto Hall.",
} as const;

export const hero = {
  title: "Especialistas en PS5, PC Gamer y Mandos DualSense a Domicilio.",
  /** Composición editorial del titular. El texto plano vive en `title`. */
  lines: [
    { text: "PS5.", variant: "solid" },
    { text: "PC Gamer.", variant: "outline" },
    { text: "DualSense.", variant: "solid" },
  ],
  badge: "a domicilio",
  subtitle:
    "Llevamos el mantenimiento técnico especializado hasta la puerta de tu casa en San Salvador y alrededores.",
  cta: "Agendar Visita por WhatsApp",
  secondaryCta: "Ver servicios y precios",
  status: "Agenda abierta",
} as const;

export const heroStats = [
  { value: "03", label: "Equipos", note: "PS5 · PC Gamer · DualSense" },
  { value: "100%", label: "Presencial", note: "Ves cada paso del trabajo" },
  { value: "0", label: "Traslados", note: "Tu equipo no sale de casa" },
] as const;

export const marqueeItems = [
  "PS5",
  "PC Gamer",
  "DualSense",
  "Efecto Hall",
  "A domicilio",
  "San Salvador",
  "Precio fijo",
  "Garantía por escrito",
] as const;

export const specialization = {
  title: "Atención exclusiva",
  headline: "Tres equipos. Nada más.",
  body: "Solo trabajamos PS5, PC Gamer y mandos DualSense de PS5. No atendemos PS4, Xbox, Nintendo Switch ni consolas retro.",
  supported: [
    {
      code: "01",
      label: "PlayStation 5",
      note: "Mantenimiento preventivo y control térmico.",
      href: "#servicios",
    },
    {
      code: "02",
      label: "PC Gamer",
      note: "Desmonte técnico, limpieza y pasta térmica.",
      href: "#servicios",
    },
    {
      code: "03",
      label: "Mando DualSense",
      note: "Palancas magnéticas con efecto Hall.",
      href: "#efecto-hall",
    },
  ],
  excludedTitle: "Fuera de alcance",
  excluded: ["PS4", "Xbox", "Nintendo Switch", "Consolas retro"],
  excludedNote:
    "Preferimos decírtelo antes de que escribas: especializarnos es lo que sostiene la calidad.",
} as const;

export const metrics = [
  {
    value: "$65",
    label: "Precio fijo",
    note: "Mantenimiento preventivo de PS5 o PC Gamer en la zona central de San Salvador.",
  },
  {
    value: "04",
    label: "Pasos",
    note: "Agendamiento, diagnóstico, intervención y pruebas en vivo antes de irnos.",
  },
  {
    value: "03",
    label: "Garantías",
    note: "Pruebas en vivo, garantía técnica y cobertura de las palancas instaladas.",
  },
] as const;

export const coverageNote =
  "Los precios listados aplican a la zona central de San Salvador. Fuera del casco urbano se aplica un recargo por traslado según la distancia.";

export const maintenanceServices = [
  {
    id: "ps5",
    title: "Mantenimiento Preventivo de PS5",
    price: "$65.00",
    whatsappKey: "ps5" as const,
    items: [
      "Limpieza profunda de polvo en disipadores y conductos de ventilación.",
      "Revisión y reatrapado/aplicación de compuesto térmico o metal líquido según requerimiento.",
      "Optimización del flujo de aire para prevenir sobrecalentamiento.",
    ],
  },
  {
    id: "pc",
    title: "Mantenimiento Preventivo de PC Gamer",
    price: "$65.00",
    whatsappKey: "pc" as const,
    items: [
      "Desmonte técnico y limpieza profunda de componentes (ventiladores, tarjeta gráfica, tarjeta madre y fuente).",
      "Reemplazo de pasta térmica de alta calidad en el procesador y la tarjeta gráfica.",
      "Ordenamiento de cables y optimización del flujo de aire.",
    ],
  },
] as const;

export const joystickService = {
  id: "joysticks",
  title: "Reparación de mandos DualSense (antideriva)",
  subtitle: "Cambio de palancas magnéticas con efecto Hall",
  description:
    "Reemplazo de módulos analógicos por tecnología de efecto Hall: sensores magnéticos que eliminan la deriva de forma permanente. Exclusivo para mandos de PS5.",
  whatsappKey: "joysticks" as const,
  tiers: [
    { label: "1 mando (1 palanca)", price: "$25.00 – $30.00" },
    { label: "1 mando (2 palancas)", price: "$35.00 – $40.00" },
    { label: "2 mandos (1 palanca c/u)", price: "$45.00 – $50.00" },
  ],
} as const;

export const serviceCta = "Consultar por WhatsApp";

export const benefits = {
  title: "Por qué a domicilio",
  items: [
    {
      title: "Cero traslados",
      body: "Tu consola o PC no sale de casa. Sin riesgo de golpes, pérdidas o filas en un taller.",
    },
    {
      title: "Trabajo presencial",
      body: "Ves el diagnóstico y la intervención frente a ti. Transparencia total en cada paso.",
    },
    {
      title: "Rutas flexibles",
      body: "Agendamos por WhatsApp y organizamos visitas por zonas de San Salvador y alrededores.",
    },
  ],
} as const;

export const hallEffect = {
  eyebrow: "Antideriva permanente",
  title: "Tecnología de efecto Hall",
  subtitle: "Por qué las palancas magnéticas superan a los potenciómetros",
  body: "Las palancas tradicionales usan potenciómetros: piezas que se desgastan con el roce y terminan en deriva. El efecto Hall lee la posición con sensores magnéticos, sin contacto físico. El resultado es un mando DualSense que deja de derivar y se mantiene calibrado.",
  exclusive: "Exclusivo para mandos DualSense de PS5.",
  cta: "Cotizar cambio de palancas",
  analogLabel: "Potenciómetro",
  analogTitle: "Contacto físico",
  analogBody: "Se desgasta con el roce. Con el tiempo aparece la deriva.",
  magneticLabel: "Efecto Hall",
  magneticTitle: "Sensor magnético",
  magneticBody: "Sin desgaste por fricción. La palanca deja de derivar.",
  metric: { value: "0", unit: "deriva", note: "Sin contacto físico entre piezas." },
  specs: [
    { key: "Tecnología", value: "Sensor magnético" },
    { key: "Desgaste", value: "Sin fricción" },
    { key: "Compatibilidad", value: "DualSense PS5" },
    { key: "Garantía", value: "Contra descalibración" },
  ],
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Agendamiento por WhatsApp",
    body: "Escríbenos el equipo, la zona y tu disponibilidad. Confirmamos ruta y horario.",
  },
  {
    step: "02",
    title: "Diagnóstico e inspección",
    body: "Revisamos el equipo en sitio antes de intervenir. Te explicamos qué se va a hacer.",
  },
  {
    step: "03",
    title: "Mantenimiento o reemplazo",
    body: "Limpieza profunda, compuesto térmico o cambio de palancas con efecto Hall, según el servicio.",
  },
  {
    step: "04",
    title: "Pruebas y entrega",
    body: "Medimos temperaturas y hacemos una prueba de rendimiento. Sales con el equipo probado y la garantía por escrito.",
  },
] as const;

export const guarantees = [
  {
    title: "Pruebas en vivo",
    body: "Medición de temperaturas y monitoreo de rendimiento (prueba de estrés) antes y después del servicio.",
  },
  {
    title: "Garantía técnica",
    body: "Cobertura por escrito sobre la mano de obra y la correcta instalación de los repuestos.",
  },
  {
    title: "Garantía de efecto Hall",
    body: "Cobertura contra defectos de fábrica o descalibración en las palancas instaladas.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto tarda una visita?",
    answer:
      "El tiempo depende del servicio y del estado del equipo. En WhatsApp te damos una ventana al agendar; el mantenimiento preventivo suele resolverse en la misma visita.",
  },
  {
    question: "¿Cómo preparo el área de trabajo?",
    answer:
      "Un espacio plano, iluminado y con toma eléctrica cerca es suficiente: mesa, escritorio o zona despejada. Nosotros llevamos herramientas y materiales.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Confirmamos el método al agendar por WhatsApp (efectivo y transferencias habituales en El Salvador). El precio se cierra antes de iniciar el trabajo.",
  },
  {
    question: "¿Hay recargo si no vivo en San Salvador centro?",
    answer:
      "Sí. La tarifa publicada cubre la zona central de San Salvador. Para zonas periféricas o departamentos se suma un recargo de traslado según la distancia.",
  },
  {
    question: "¿Atienden PS4, Xbox o Switch?",
    answer:
      "No. Nos especializamos únicamente en PlayStation 5, PC Gamer y mandos DualSense de PS5 para mantener la calidad del servicio.",
  },
] as const;

export const footer = {
  ctaTitle: "¿Listo para agendar?",
  ctaLines: ["Escribe.", "Agendamos.", "Llegamos."],
  ctaBody:
    "Escríbenos por WhatsApp y coordinamos la visita a domicilio en San Salvador y alrededores.",
  cta: "Agendar Visita por WhatsApp",
  colophon: "Diseñado y mantenido en El Salvador.",
} as const;
