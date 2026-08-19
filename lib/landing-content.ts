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
    "Vamos a tu casa en San Salvador, limpiamos la PS5 o la PC y le ponemos metal líquido alemán. Si el mando se te va solo, le ponemos palancas magnéticas.",
  cta: "Escríbenos por WhatsApp",
  quoteCta: "Arma tu precio",
  status: "Estamos agendando",
} as const;

export const heroStats = [
  { value: "$65", label: "Desde este precio", note: "PS5 o PC gamer, según el distrito" },
  { value: "4", label: "Pasos", note: "Nos escribes, vamos, trabajamos y lo pruebas" },
  { value: "3", label: "Garantías", note: "Por escrito, antes de irnos" },
] as const;

export const marqueeItems = [
  "PS5",
  "PC Gamer",
  "DualSense",
  "El mando se va solo",
  "Metal líquido alemán",
  "Insumos alemanes",
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
      note: "La abrimos, le sacamos el polvo y le ponemos metal líquido alemán.",
      href: "#servicios",
    },
    {
      code: "02",
      label: "PC Gamer",
      note: "Limpieza a fondo, metal líquido alemán en el procesador y en la gráfica.",
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
  "Elige departamento, municipio y distrito. Si hay visita, el precio sale en Cotizar. En algunos distritos el viaje va incluido; en otros se suma un cobro fijo.";

export const quoteCopy = {
  titleLead: "Arma",
  titleTrail: "tu precio",
  body: "Elige el equipo y dónde vives. Si hay cobro por el viaje, te sale ahí mismo.",
  steps: [
    { code: "1", label: "Equipo" },
    { code: "2", label: "Lugar" },
    { code: "3", label: "Precio" },
  ],
  equipmentLegend: "¿Qué hay que revisar?",
  dualsenseLegend: "¿Cuántas palancas?",
  zoneLegend: "¿Dónde vives?",
  departmentLegend: "Departamento",
  municipalityLegend: "Municipio",
  districtLegend: "Distrito",
  placePlaceholder: "Elegir",
  resultLabel: "Te queda en",
  resultEmpty: "Elige equipo y distrito para ver el precio.",
  resultUncovered: "Ahí no llegamos",
  uncoveredLabel: "Sin servicio",
  uncoveredBody:
    "En ese distrito no agendamos visitas. Prueba con otro o escríbenos por WhatsApp si tienes duda.",
  baseLabel: "Servicio",
  surchargeLabel: "Viaje",
  disclaimer:
    "El cobro por el viaje es fijo. El mando DualSense sale en rango, según cuántas palancas.",
  cta: "Confirmar por WhatsApp",
  coverageTitle: "Dónde sí llegamos",
  coverageToggle: "Ver municipios y distritos",
  coverageTeaser:
    "Elige departamento, municipio y distrito. Si hay cobro por el viaje, te sale ahí mismo.",
  coverageCta: "Ver departamentos",
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
      "Le ponemos metal líquido alemán.",
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
      "Metal líquido alemán en el procesador y en la gráfica.",
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
    body: "Limpieza, metal líquido alemán o cambio de palancas, según lo que cotizamos.",
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
    question: "¿Qué le ponen para que no se caliente?",
    answer:
      "Metal líquido alemán. En la PS5 y en la PC. No usamos lo de ferretería.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Lo confirmamos al agendar: efectivo o transferencia, como se usa aquí. El precio se cierra antes de empezar.",
  },
  {
    question: "¿Me cobran extra si no vivo en San Salvador centro?",
    answer:
      "Depende del distrito. En Cotizar eliges departamento, municipio y distrito; ahí te sale si hay visita y si el viaje va incluido o lleva un cobro fijo.",
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
