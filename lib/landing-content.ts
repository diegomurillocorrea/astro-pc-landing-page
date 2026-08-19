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
  { href: "#cotizar", label: "Cotizar" },
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
  quoteCta: "Cotizar en 3 pasos",
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
    note: "Mantenimiento preventivo de PS5 o PC Gamer en zona central y metropolitana, sin recargo.",
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
  "La tarifa publicada cubre la zona central y metropolitana, sin recargo. El resto suma un recargo fijo de traslado según la matriz. Costas, oriente, paracentral, norte y occidente profundo no tienen servicio.";

export const coverageZones = [
  {
    id: "central",
    name: "Central y metropolitana",
    surchargeLabel: "Sin recargo",
    surcharge: 0,
    covered: true,
    note: "Tarifa publicada. Incluye Gran San Salvador y casco urbano de Sonsonate, Izalco y Sonzacate.",
    municipalities: [
      {
        name: "San Salvador Centro",
        note: "Escalón, San Benito, Miramonte, Miralvalle, Autopista Sur, Centro Histórico",
      },
      {
        name: "Antiguo Cuscatlán",
        note: "Santa Elena, Merliot",
      },
      { name: "Santa Tecla" },
      { name: "Vía del Mar" },
      { name: "Apopa" },
      { name: "Nejapa" },
      { name: "Mejicanos" },
      { name: "Cuscatancingo" },
      { name: "Ciudad Delgado" },
      { name: "Ayutuxtepeque" },
      { name: "Soyapango" },
      { name: "Sonsonate", note: "Casco urbano" },
      { name: "Izalco" },
      { name: "Sonzacate" },
    ],
  },
  {
    id: "periferica-1",
    name: "Periférica nivel 1",
    surchargeLabel: "+$5",
    surcharge: 5,
    covered: true,
    note: "Recargo fijo de traslado.",
    municipalities: [
      { name: "Nuevo Cuscatlán" },
      { name: "San Marcos" },
      { name: "Santo Tomás" },
      { name: "Planes de Renderos" },
    ],
  },
  {
    id: "periferica-2",
    name: "Periférica nivel 2",
    surchargeLabel: "+$10",
    surcharge: 10,
    covered: true,
    note: "Recargo fijo de traslado.",
    municipalities: [
      { name: "Lourdes" },
      { name: "Zaragoza" },
      { name: "Ilopango" },
      { name: "San Martín" },
      { name: "Juan Opico", note: "Casco urbano" },
      { name: "Cojutepeque" },
    ],
  },
  {
    id: "departamental",
    name: "Departamental especial",
    surchargeLabel: "+$20",
    surcharge: 20,
    covered: true,
    note: "Únicamente casco urbano.",
    municipalities: [{ name: "Santa Ana", note: "Únicamente casco urbano" }],
  },
] as const;

export const coverageExcluded = {
  id: "excluded",
  name: "Fuera de cobertura",
  surchargeLabel: "Sin servicio",
  surcharge: null,
  covered: false,
  note: "No visitamos costas, oriente, paracentral, norte ni occidente profundo.",
  municipalities: [
    {
      name: "Zonas costeras y playas",
      note: "Surf City, El Tunco, Costa del Sol, Majahual, Metalío",
    },
    {
      name: "Zona Oriental",
      note: "San Miguel, Usulután, Morazán, La Unión",
    },
    {
      name: "Zona Paracentral",
      note: "San Vicente, Cabañas",
    },
    { name: "Zona Norte", note: "Chalatenango" },
    {
      name: "Occidente profundo",
      note: "Ahuachapán, Ataco, Apaneca, Metapán, Chalchuapa, El Congo, Coatepeque",
    },
  ],
} as const;

export const quoteCopy = {
  eyebrow: "Cotizador · § 03",
  titleLead: "Cotiza",
  titleTrail: "en tres pasos",
  body: "Elige equipo y municipio. El recargo de traslado es tarifa fija según la matriz de cobertura.",
  steps: [
    { code: "01", label: "Equipo" },
    { code: "02", label: "Zona" },
    { code: "03", label: "Precio" },
  ],
  equipmentLegend: "Elige tu equipo",
  dualsenseLegend: "Configuración del mando",
  zoneLegend: "Elige tu zona",
  municipalityLegend: "Municipio o distrito",
  resultLabel: "Precio estimado",
  resultEmpty: "Elige equipo y zona para ver el estimado.",
  resultUncovered: "Sin servicio",
  uncoveredBody:
    "Esta zona está fuera de cobertura. No agendamos visitas en costas, oriente, paracentral, norte ni occidente profundo.",
  baseLabel: "Servicio",
  surchargeLabel: "Traslado",
  disclaimer:
    "El recargo de traslado es tarifa fija. DualSense se cotiza en rango según palancas.",
  cta: "Confirmar por WhatsApp",
  coverageEyebrow: "Cobertura",
  coverageTitle: "Matriz de zonas y tarifas",
  coverageBody:
    "Recargo fijo por zona. Si tu colonia está dentro de un municipio cubierto, el recargo es el de esa categoría.",
  coverageMapLabel: "Tarifas de traslado",
  coverageTeaser:
    "Sin recargo en Gran San Salvador, Santa Tecla y Soyapango. +$5, +$10 o +$20 según zona.",
  coverageCta: "Ver matriz de cobertura",
} as const;

export const maintenanceServices = [
  {
    id: "ps5",
    title: "Mantenimiento Preventivo de PS5",
    price: "$65.00",
    amount: 65,
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
    amount: 65,
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
    {
      id: "one-stick",
      label: "1 mando (1 palanca)",
      price: "$25.00 – $30.00",
      min: 25,
      max: 30,
    },
    {
      id: "two-sticks",
      label: "1 mando (2 palancas)",
      price: "$35.00 – $40.00",
      min: 35,
      max: 40,
    },
    {
      id: "two-pads",
      label: "2 mandos (1 palanca c/u)",
      price: "$45.00 – $50.00",
      min: 45,
      max: 50,
    },
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
      "Santa Tecla, Antiguo Cuscatlán, Soyapango, Apopa y el resto de la zona central y metropolitana no tienen recargo. Periferia nivel 1 suma $5, nivel 2 suma $10 y Santa Ana (casco urbano) suma $20. Costas, oriente, paracentral, norte y occidente profundo no tienen servicio. Lo ves en Cotizar.",
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
  creditPrefix: "Developed by",
  creditBrand: "DAIEGO",
  creditUrl: "https://www.daiego.com",
} as const;
