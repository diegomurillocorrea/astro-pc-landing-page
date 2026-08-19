export const brand = {
  name: "Astro PC",
  tagline: "PS5, PC Gamer y DualSense en tu casa",
  location: "San Salvador, El Salvador",
  specialization: "PS5, PC Gamer y mandos DualSense",
  region: "San Salvador",
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#cotizar", label: "Cotizar" },
  { href: "#proceso", label: "Cómo vamos" },
  { href: "#preguntas", label: "Preguntas" },
] as const;

export const whatsappMessages = {
  schedule: "Hola Astro PC, quiero que vayan a mi casa a revisar mi equipo.",
  ps5: "Hola, quiero el mantenimiento de la PS5, el de $65.",
  pc: "Hola, quiero el mantenimiento de la PC gamer, el de $65.",
  joysticks: "Hola, el mando de la PS5 se me va solo y quiero cotizar las palancas magnéticas.",
} as const;

export const hero = {
  title: "Astro PC. Mantenimiento de PS5, PC Gamer y mandos DualSense en tu casa.",
  lines: [
    { text: "PS5.", variant: "solid" },
    { text: "PC Gamer.", variant: "accent" },
    { text: "DualSense.", variant: "solid" },
  ],
  badge: "en tu casa",
  kicker: "Somos Astro PC",
  subtitle:
    "Vamos a tu casa en San Salvador, limpiamos la consola o la PC, le cambiamos la pasta y, si el mando se te va solo, le ponemos palancas magnéticas.",
  cta: "Escríbenos por WhatsApp",
  quoteCta: "Arma tu precio",
  status: "Estamos agendando",
} as const;

export const heroStats = [
  { value: "$65", label: "Precio fijo", note: "PS5 o PC gamer en Gran San Salvador" },
  { value: "4", label: "Pasos", note: "Nos escribes, vamos, trabajamos y lo pruebas" },
  { value: "3", label: "Garantías", note: "Por escrito, antes de irnos" },
] as const;

export const marqueeItems = [
  "PS5",
  "PC Gamer",
  "DualSense",
  "El mando se va solo",
  "Pasta térmica",
  "En tu casa",
  "San Salvador",
  "Desde $65",
] as const;

export const specialization = {
  headline: "Tres equipos. Nada más.",
  body: "Solo trabajamos PS5, PC gamer y el mando DualSense de PS5. Así el trabajo sale bien. No metemos PS4, Xbox, Nintendo Switch ni consola vintage.",
  supported: [
    {
      code: "01",
      label: "PlayStation 5",
      note: "La abrimos, le sacamos el polvo y le ponemos pasta nueva.",
      href: "#servicios",
    },
    {
      code: "02",
      label: "PC Gamer",
      note: "Limpieza a fondo, pasta en el procesador y en la gráfica.",
      href: "#servicios",
    },
    {
      code: "03",
      label: "Mando DualSense",
      note: "Palancas magnéticas para que deje de irse solo.",
      href: "#efecto-hall",
    },
  ],
  excludedTitle: "Esto no lo atendemos",
  excluded: ["PS4", "Xbox", "Nintendo Switch", "Consola vintage"],
  excludedNote: "Mejor te lo decimos ahora, para que no pierdas el tiempo escribiendo.",
} as const;

export const coverageNote =
  "En Gran San Salvador el precio que ves es el final. Más lejos se suma un cobro fijo por el viaje. A playas, oriente, paracentral, norte y occidente profundo no llegamos.";

export const coverageZones = [
  {
    id: "central",
    name: "Gran San Salvador",
    surchargeLabel: "Sin extra",
    surcharge: 0,
    covered: true,
    note: "San Salvador, Santa Tecla, Soyapango y alrededores. El precio publicado queda igual.",
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
    name: "Un poco más lejos",
    surchargeLabel: "+$5 por el viaje",
    surcharge: 5,
    covered: true,
    note: "Cobro fijo por ir hasta allá.",
    municipalities: [
      { name: "Nuevo Cuscatlán" },
      { name: "San Marcos" },
      { name: "Santo Tomás" },
      { name: "Planes de Renderos" },
    ],
  },
  {
    id: "periferica-2",
    name: "Más lejos",
    surchargeLabel: "+$10 por el viaje",
    surcharge: 10,
    covered: true,
    note: "Cobro fijo por ir hasta allá.",
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
    name: "Santa Ana",
    surchargeLabel: "+$20 por el viaje",
    surcharge: 20,
    covered: true,
    note: "Solo el casco urbano.",
    municipalities: [{ name: "Santa Ana", note: "Solo el casco urbano" }],
  },
] as const;

export const coverageExcluded = {
  id: "excluded",
  name: "Ahí no llegamos",
  surchargeLabel: "Sin servicio",
  surcharge: null,
  covered: false,
  note: "No vamos a playas, oriente, paracentral, norte ni occidente profundo.",
  municipalities: [
    {
      name: "Playas y costa",
      note: "Surf City, El Tunco, Costa del Sol, Majahual, Metalío",
    },
    {
      name: "Oriente",
      note: "San Miguel, Usulután, Morazán, La Unión",
    },
    {
      name: "Paracentral",
      note: "San Vicente, Cabañas",
    },
    { name: "Norte", note: "Chalatenango" },
    {
      name: "Occidente profundo",
      note: "Ahuachapán, Ataco, Apaneca, Metapán, Chalchuapa, El Congo, Coatepeque",
    },
  ],
} as const;

export const quoteCopy = {
  titleLead: "Arma",
  titleTrail: "tu precio",
  body: "Elige el equipo y dónde vives. Si hay cobro por el viaje, te sale ahí mismo.",
  steps: [
    { code: "1", label: "Equipo" },
    { code: "2", label: "Zona" },
    { code: "3", label: "Precio" },
  ],
  equipmentLegend: "¿Qué hay que revisar?",
  dualsenseLegend: "¿Cuántas palancas?",
  zoneLegend: "¿Dónde vives?",
  municipalityLegend: "Municipio (si quieres afinar)",
  municipalityPlaceholder: "Toda la zona",
  resultLabel: "Te queda en",
  resultEmpty: "Elige equipo y zona para ver el precio.",
  resultUncovered: "Ahí no llegamos",
  uncoveredBody:
    "Esa zona está fuera. No agendamos visitas en playas, oriente, paracentral, norte ni occidente profundo.",
  baseLabel: "Servicio",
  surchargeLabel: "Viaje",
  disclaimer:
    "El cobro por el viaje es fijo. El mando DualSense sale en rango, según cuántas palancas.",
  cta: "Confirmar por WhatsApp",
  coverageTitle: "Dónde sí llegamos",
  coverageBody: "Si tu colonia está en uno de estos municipios, aplica ese cobro por el viaje.",
  coverageToggle: "Ver municipios",
  coverageTeaser:
    "En Gran San Salvador no se cobra extra. Más lejos son +$5, +$10 o +$20 por el viaje.",
  coverageCta: "Ver zonas",
} as const;

export const maintenanceServices = [
  {
    id: "ps5",
    title: "Limpieza y mantenimiento de PS5",
    price: "$65.00",
    amount: 65,
    whatsappKey: "ps5" as const,
    items: [
      "Le sacamos el polvo de los disipadores y de los conductos.",
      "Le ponemos pasta térmica nueva (o metal líquido, si hace falta).",
      "Queda ventilando mejor, para que no se caliente tanto.",
    ],
  },
  {
    id: "pc",
    title: "Limpieza y mantenimiento de PC gamer",
    price: "$65.00",
    amount: 65,
    whatsappKey: "pc" as const,
    items: [
      "Abrimos el gabinete y limpiamos ventiladores, gráfica, tarjeta madre y fuente.",
      "Pasta nueva en el procesador y en la gráfica.",
      "Acomodamos cables para que corra mejor el aire.",
    ],
  },
] as const;

export const joystickService = {
  id: "joysticks",
  title: "El mando DualSense hace drift",
  subtitle: "Le cambiamos las palancas por unas magnéticas",
  description:
    "Las palancas normales se raspan y el personaje se mueve solo. Las magnéticas no tienen fricción: el DualSense deja de hacer drift.",
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

export const serviceCta = "Cotizar este servicio";

export const benefits = {
  title: "¿Por qué en tu casa?",
  items: [
    {
      title: "Tu equipo no se mueve",
      body: "La consola o la PC se queda. Nada de golpes en el camino ni de dejarla en un taller.",
    },
    {
      title: "Lo ves con tus ojos",
      body: "Estás ahí en el diagnóstico y en el trabajo. Nada escondido.",
    },
    {
      title: "Coordinamos por WhatsApp",
      body: "Nos escribes, armamos la ruta por zona y llegamos a la hora que quedamos.",
    },
  ],
} as const;

export const hallEffect = {
  title: "El mando hace drift",
  subtitle: "Se quita cambiando las palancas",
  body: "Las palancas baratas se raspan por dentro y el analogito queda loco: el personaje se mueve solo. Eso es el drift. Nosotros ponemos palancas magnéticas: un imán lee el movimiento, no hay pieza rozando. El DualSense de PS5 deja de hacerlo.",
  exclusive: "Solo mandos DualSense de PS5.",
  cta: "Cotizar las palancas",
  analogLabel: "Palanca normal",
  analogTitle: "Hace drift",
  analogBody: "Con el uso se raspa por dentro. Un día el personaje camina solo.",
  magneticLabel: "Palanca magnética",
  magneticTitle: "Sin drift",
  magneticBody: "Va por imán. El mando se queda quieto cuando tú lo dejas quieto.",
} as const;

export const processSteps = [
  {
    step: "1",
    title: "Nos escribes",
    body: "Dinos el equipo, la zona y cuándo puedes. Confirmamos día y hora por WhatsApp.",
  },
  {
    step: "2",
    title: "Revisamos en tu casa",
    body: "Vemos el equipo ahí mismo y te explicamos qué le vamos a hacer, antes de tocarlo.",
  },
  {
    step: "3",
    title: "Lo dejamos listo",
    body: "Limpieza, pasta térmica o cambio de palancas, según lo que cotizamos.",
  },
  {
    step: "4",
    title: "Lo pruebas con nosotros",
    body: "Medimos temperaturas y lo corremos. Sales con el equipo probado y la garantía por escrito.",
  },
] as const;

export const guarantees = [
  {
    title: "Lo ves funcionar",
    body: "Medimos temperaturas y lo prendemos contigo, antes y después del trabajo.",
  },
  {
    title: "Garantía del trabajo",
    body: "Por escrito: la mano de obra y que los repuestos quedaron bien puestos.",
  },
  {
    title: "Garantía de las palancas",
    body: "Si las palancas magnéticas se vuelven a ir solas por defecto, las cubrimos.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto tardan en la visita?",
    answer:
      "Depende del servicio y de cómo esté el equipo. En WhatsApp te damos una ventana. El mantenimiento de PS5 o PC casi siempre se resuelve esa misma visita.",
  },
  {
    question: "¿Qué ocupo tener listo?",
    answer:
      "Una mesa o un espacio despejado, con luz y un enchufe cerca. Las herramientas las llevamos nosotros.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Lo confirmamos al agendar: efectivo o transferencia, como se usa aquí. El precio se cierra antes de empezar.",
  },
  {
    question: "¿Me cobran extra si no vivo en San Salvador centro?",
    answer:
      "Santa Tecla, Antiguo Cuscatlán, Soyapango, Apopa y el resto de Gran San Salvador no pagan extra. Un poco más lejos son $5, más lejos $10 y Santa Ana (casco urbano) $20. Playas, oriente, paracentral, norte y occidente profundo no tienen visita. Eso lo ves en Cotizar.",
  },
  {
    question: "¿Ven PS4, Xbox o Switch?",
    answer:
      "No. Solo PlayStation 5, PC gamer y el mando DualSense de PS5, para no aflojar la calidad.",
  },
] as const;

export const footer = {
  ctaTitle: "¿Lo agendamos?",
  ctaLines: ["Escríbenos.", "Cuadramos.", "Llegamos."],
  ctaBody:
    "Mándanos WhatsApp y coordinamos la visita en San Salvador y alrededores.",
  cta: "Escríbenos por WhatsApp",
  colophon: "Hecho en El Salvador.",
  creditPrefix: "Hecho por",
  creditBrand: "DAIEGO",
  creditUrl: "https://www.daiego.com",
} as const;
