export const brand = {
  name: "Astro PC",
  tagline: "Mantenimiento a PS5, DualSense y PC gamer a domicilio",
  location: "San Salvador, El Salvador",
  specialization: "PS5, DualSense de PS5 y PC gamer",
  region: "San Salvador",
} as const;

export const contact = {
  phoneLabel: "Teléfono",
  callLabel: "Llamar",
  whatsappLabel: "WhatsApp",
  hoursLabel: "Horario",
  hours: "Lunes a sábado, 8:00 a.m. a 6:00 p.m.",
  hoursShort: "Lun–sáb, 8:00 a.m. a 6:00 p.m.",
  closed: "Domingo no agendamos.",
  response: "En WhatsApp o por llamada respondemos el mismo día, en horario de atención.",
  responseShort: "Respondemos el mismo día",
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#cotizar", label: "Ver precio" },
  { href: "#proceso", label: "La visita" },
  { href: "#preguntas", label: "Preguntas" },
] as const;

export const whatsappMessages = {
  schedule: "Hola Astro PC, quiero que vayan a mi casa a revisar mi equipo.",
  ps5: "Hola, quiero el mantenimiento de la PS5, el de $65.",
  pc: "Hola, quiero el mantenimiento de la PC gamer, el de $65.",
  joysticks: "Hola, el mando de la PS5 se me va solo y quiero cotizar las palancas magnéticas.",
} as const;

export const hero = {
  title:
    "Astro PC. Mantenimiento a PS5, DualSense de PS5 y PC gamer a domicilio.",
  lines: [
    { text: "Mantenimiento", variant: "lead" },
    { text: "PS5.", variant: "solid" },
    { text: "DualSense.", variant: "solid" },
    { text: "PC Gamer.", variant: "solid" },
    { text: "a domicilio.", variant: "accent" },
  ],
  subtitle:
    "Vamos hasta tu casa en El Salvador. Le damos mantenimiento a tu PlayStation 5, tu PC gamer y tu DualSense.",
  coverage: "¿Llegamos a tu zona?",
  coverageCta: "En Ver precio ves si hay visita",
  cta: "Escríbenos por WhatsApp",
  quoteCta: "Ver cuánto te cobramos",
  status: "Estamos agendando",
} as const;

export const heroPrices = [
  {
    value: "Desde $65",
    label: "PC Gamer o PS5",
    notes: ["Mantenimiento", "Pasta Térmica y Metal Líquido"],
    href: "#servicios",
  },
  {
    value: "Desde $25",
    label: "Mando DualSense",
    notes: ["Drift en Palanca", "Reemplazo a Palanca Magnética"],
    href: "#servicios",
  },
  {
    value: "Servicio a Domicilio",
    label: "Tarifa varía según cobertura",
    notes: [],
    href: "#cotizar",
    wrapValue: true,
  },
] as const;

export const marqueeItems = [
  "Metal líquido en PS5",
  "Pasta térmica en PC",
  "Palancas magnéticas",
  "Hasta tu casa",
  "Mantenimiento a Domicilio",
  "Cobertura en casi todo el país",
] as const;

export const specialization = {
  headline: "Nos especializamos en",
  body: "Solo esos tres. Así el trabajo sale bien. No metemos PS4, Xbox, Nintendo Switch ni consola vintage.",
  supported: [
    {
      code: "01",
      label: "PlayStation 5",
      note: "Limpieza interna y metal líquido alemán, para que no se ahogue de calor.",
      href: "#servicios",
    },
    {
      code: "02",
      label: "DualSense PS5",
      note: "Cambio a palancas magnéticas. El DualSense deja de hacer drift.",
      href: "#dualsense",
    },
    {
      code: "03",
      label: "PC Gamer",
      note: "Limpieza a fondo y pasta térmica nueva en el procesador y en la gráfica.",
      href: "#servicios",
    },
  ],
  excludedTitle: "Esto no lo atendemos",
  excluded: ["PS4", "Xbox", "Nintendo Switch", "Consola vintage"],
  excludedNote: "Mejor te lo decimos ahora, para que no pierdas el tiempo escribiendo.",
} as const;

export const coverageNote =
  "En Ver precio escribes tu pueblo: no hace falta saber el distrito. Si hay visita, ves el total: viaje incluido, cobro fijo, o sin servicio.";

export const quoteCopy = {
  titleLead: "Cotiza",
  titleTrail: "con nosotros",
  equipmentLegend: "¿Qué hay que revisar?",
  dualsenseLegend: "¿Cuántas palancas?",
  zoneLegend: "¿Dónde vives?",
  placeSearchLegend: "Tu pueblo o ciudad",
  placeSearchHint:
    "Escribe el nombre. No hace falta saber el distrito.",
  placeSearchPlaceholder: "Ej. Mejicanos, Santa Tecla, Soyapango",
  placeSearchEmpty:
    "No encontramos ese nombre. Prueba el pueblo o la ciudad.",
  placeSelectedPrefix: "Lugar:",
  placeListsToggle: "O elige departamento, municipio y distrito",
  departmentLegend: "Departamento",
  municipalityLegend: "Municipio",
  districtLegend: "Distrito",
  placePlaceholder: "Elegir",
  resultLabel: "Te queda en",
  resultServiceLabel: "El servicio sale",
  resultEmpty: "Elige el equipo. El precio del servicio te sale de una.",
  resultNeedsPlace:
    "Ese es el servicio. Escribe tu pueblo para ver el total con el viaje. No hace falta saber el distrito.",
  resultNeedsEquipment: "Lugar listo. Elige el equipo para ver el total.",
  resultUncovered: "Ahí no llegamos",
  uncoveredLabel: "Sin servicio",
  uncoveredBody:
    "En ese distrito no agendamos visitas. Prueba con otro pueblo o escríbenos por WhatsApp si tienes duda.",
  baseLabel: "Servicio",
  surchargeLabel: "Viaje",
  disclaimer:
    "El cobro por el viaje es fijo. El mando DualSense sale en rango, según cuántas palancas.",
  cta: "Confirmar por WhatsApp",
  coverageTitle: "Departamentos con visita",
  coverageTeaser:
    "No a todos los distritos. Escribe tu pueblo en Ver precio y ves si hay visita.",
  coverageCta: "Calcular mi visita",
} as const;

export const maintenanceServices = [
  {
    id: "ps5",
    title: "Limpieza y mantenimiento de PS5",
    price: "$65.00",
    amount: 65,
    whatsappKey: "ps5" as const,
    items: [
      "Le sacamos el polvo de disipadores, ventilador y conductos.",
      "Le ponemos metal líquido alemán, el que pide la PS5.",
      "Baja la temperatura. Deja de ahogarse de calor y de hacer ruido.",
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
      "Pasta térmica nueva en el procesador y en la gráfica.",
      "Acomodamos cables para que el aire corra y no se caliente tanto.",
    ],
  },
] as const;

export const joystickService = {
  id: "joysticks",
  title: "El mando te hace drift",
  subtitle: "Le cambiamos las palancas por unas magnéticas",
  description:
    "El drift sale cuando las palancas se raspan por dentro. Las magnéticas no tienen fricción: el DualSense deja de irse solo.",
  priceRange: "$25.00 – $50.00",
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

export const serviceCta = "Ver el total con el viaje";

export const benefits = {
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

export const processSteps = [
  {
    step: "1",
    title: "Escríbenos",
    body: "Por WhatsApp. Dinos el equipo, tu pueblo y cuándo puedes. Cuadramos día y hora.",
  },
  {
    step: "2",
    title: "Lo vemos juntos",
    body: "Revisamos el equipo en tu casa y te explicamos qué le vamos a hacer, antes de tocarlo.",
  },
  {
    step: "3",
    title: "Hacemos el trabajo",
    body: "Limpieza, metal líquido, pasta térmica o palancas magnéticas, según lo que cotizamos. Tú estás ahí.",
  },
  {
    step: "4",
    title: "Lo pruebas",
    body: "Lo encendemos contigo y medimos temperaturas. Sales con el equipo listo y la garantía por escrito.",
  },
] as const;

export const guarantees = [
  {
    title: "Lo ves funcionar",
    body: "Lo encendemos contigo. Ves las temperaturas antes y después, no de oídas.",
  },
  {
    title: "Garantía del trabajo",
    body: "Te queda por escrito: cubre la mano de obra y que el repuesto quedó bien instalado.",
  },
  {
    title: "Garantía de las palancas",
    body: "Si las magnéticas vuelven a irse solas por un defecto, las cubrimos.",
  },
] as const;

export const faqs = [
  {
    question: "¿Cómo sé cuánto me van a cobrar?",
    answer:
      "En Ver precio eliges el equipo: el servicio te sale de una. Luego escribes tu pueblo o ciudad — no hace falta saber el distrito — y ves el total: si hay visita y si el viaje va incluido o lleva un cobro fijo.",
  },
  {
    question: "¿De verdad van a mi casa?",
    answer:
      "Sí, si tu distrito está cubierto. El mantenimiento es en tu casa: no dejas el equipo en un taller. Coordinamos por WhatsApp y llegamos con las herramientas.",
  },
  {
    question: "¿A qué hora atienden y cómo los contacto?",
    answer:
      "De lunes a sábado, de 8:00 a.m. a 6:00 p.m. Domingo no agendamos. WhatsApp y la llamada van al mismo número: lo ves en el menú, en el cierre y en el pie. En horario de atención respondemos el mismo día. WhatsApp es lo más rápido para agendar.",
  },
  {
    question: "¿Van a todos los distritos de San Salvador?",
    answer:
      "No. Hay distritos con visita incluida, otros con cobro de viaje y otros sin servicio. En Ver precio escribes tu pueblo y te sale ahí mismo.",
  },
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
      "En la PS5, metal líquido alemán. En la PC gamer, pasta térmica. No usamos lo de ferretería.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Lo confirmamos al agendar: efectivo o transferencia, como se usa aquí. El precio se cierra antes de empezar.",
  },
  {
    question: "¿Me cobran extra si no vivo en San Salvador centro?",
    answer:
      "Depende del distrito. En algunos el viaje va incluido, en otros se cobra aparte, y en otros no hay visita. En Ver precio escribes tu pueblo y te sale el total.",
  },
  {
    question: "¿Ven PS4, Xbox o Switch?",
    answer:
      "No. Solo PS5, DualSense de PS5 y PC gamer, para no aflojar la calidad.",
  },
] as const;

export const footer = {
  ctaTitle: "¿Lo agendamos?",
  ctaLines: [
    "Escríbenos",
    "Agendamos",
    "Llegamos a tu domicilio",
    "Mantenimiento realizado",
  ],
  ctaBody:
    "WhatsApp o llamada. Si tu distrito está cubierto, vamos a tu casa en San Salvador y alrededores.",
  cta: "Escríbenos por WhatsApp",
  colophon: "Hecho en El Salvador.",
  creditPrefix: "Hecho por",
  creditBrand: "DAIEGO",
  creditUrl: "https://www.daiego.com",
} as const;
