export interface AppData {
  slug: string;
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  category: string;
  categoryEn: string;
  iconBg: string;
  iconEmoji: string;
  iconImage?: string;
  status: 'published' | 'coming_soon' | 'beta';
  version: string;
  priceModel: string;
  priceModelEn: string;
  playStoreUrl?: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  requirements: string;
  requirementsEn: string;
  /** Date shown on the legal pages. Defaults to the first publication date. */
  legalUpdated?: string;
  legalUpdatedEn?: string;
  /** Store screenshots shown on the app page, in listing order. */
  screenshots?: { src: string; alt: string }[];
}

export const developerInfo = {
  name: "Ivan Steuerberg",
  brandName: "RST Soft",
  contactEmail: "devrstsoft@gmail.com",
  country: "España",
  countryEn: "Spain",
  playStoreDeveloperUrl: "https://play.google.com/store/apps/dev?id=8340405336413861545",
  githubUrl: "https://github.com/IvanSteuerberg",
  websiteUrl: "https://ivansteuerberg.github.io",
  bio: "Desarrollador independiente enfocado en crear aplicaciones Android nativas, eficientes, sin publicidad invasiva y con máximo respeto a la privacidad.",
  bioEn: "Independent developer focused on building native, privacy-first, ad-free Android applications."
};

export const apps: AppData[] = [
  {
    slug: "alarma-con-desafios",
    name: "Alarma con desafíos",
    nameEn: "Alarm With Challenges",
    tagline: "El despertador para Android que solo se apaga completando un desafío. Sin botón de posponer.",
    taglineEn: "The Android alarm clock that only turns off once you complete a challenge. No snooze button.",
    category: "Herramientas",
    categoryEn: "Tools",
    iconBg: "from-amber-500 via-orange-600 to-red-600",
    iconEmoji: "⏰",
    iconImage: "/apps/alarma-con-desafios/icon.png",
    status: "published",
    version: "1.1.0",
    priceModel: "Pago único · Sin anuncios · Sin suscripciones",
    priceModelEn: "One-time purchase · No ads · No subscriptions",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rstsoft.alarm",
    description: "Alarma con desafíos es un despertador para Android sin botón de posponer. Para apagarla tienes que resolver un desafío: matemáticas, memoria, puzzle deslizante, sacudir el teléfono, tabla de números o tu propia frase. Cada alarma tiene su desafío y su dificultad, y puede pedirte hasta 5 seguidos.",
    descriptionEn: "Alarm With Challenges is an Android alarm clock with no snooze button. To turn it off you have to solve a challenge: math, memory, a sliding puzzle, shaking the phone, a number grid or a phrase of your own. Each alarm has its own challenge and difficulty, and can ask for up to 5 in a row.",
    features: [
      "Seis desafíos: matemáticas, memoria, puzzle deslizante, sacudir, tabla de números y tu frase, o uno al azar",
      "Sin botón de posponer: para apagarla tienes que despertarte",
      "Repeticiones: cada alarma puede pedir 1, 3 o 5 desafíos seguidos",
      "«¿Sigues despierto?»: si no lo confirmas después de apagarla, vuelve a sonar",
      "No se deja esquivar: el volumen vuelve a subir y suena de nuevo si se cierra la app",
      "Pre-alarma suave entre 1 y 30 minutos antes de la alarma principal",
      "Funciona sin conexión: la app no tiene permiso de internet ni rastreo",
      "En español, inglés, francés, alemán, catalán y gallego"
    ],
    featuresEn: [
      "Six challenges: math, memory, sliding puzzle, shake, number grid and your own phrase, or one at random",
      "No snooze button: to turn it off you have to wake up",
      "Rounds: each alarm can ask for 1, 3 or 5 challenges in a row",
      "“Still awake?”: if you don't confirm after turning it off, it rings again",
      "Hard to dodge: the volume comes back up and it rings again if the app gets closed",
      "Gentle pre-alarm 1 to 30 minutes before the main alarm",
      "Works offline: the app has no internet permission and no tracking",
      "In English, Spanish, French, German, Catalan and Galician"
    ],
    requirements: "Android 10 o superior · Funciona sin conexión · 6 idiomas",
    requirementsEn: "Android 10 or later · Works offline · 6 languages",
    legalUpdated: "8 de noviembre de 2026",
    legalUpdatedEn: "8 November 2026",
    screenshots: [
      { src: "/apps/alarma-con-desafios/screenshots/01_list.webp", alt: "Lista de alarmas: sin botón de posponer" },
      { src: "/apps/alarma-con-desafios/screenshots/02_ring_math.webp", alt: "Alarma sonando con un desafío de matemáticas" },
      { src: "/apps/alarma-con-desafios/screenshots/03_edit_challenge.webp", alt: "Cada alarma con su desafío y su dificultad" },
      { src: "/apps/alarma-con-desafios/screenshots/04_ring_grid.webp", alt: "Tabla de números: toca del 1 al 25 en orden" },
      { src: "/apps/alarma-con-desafios/screenshots/05_ring_phrase.webp", alt: "Tu frase: escríbela para callar la alarma" },
      { src: "/apps/alarma-con-desafios/screenshots/06_ring_memory.webp", alt: "Memoria: repite la secuencia de colores y formas" },
      { src: "/apps/alarma-con-desafios/screenshots/07_wake_check.webp", alt: "¿Sigues despierto?: si te vuelves a dormir, vuelve a sonar" },
      { src: "/apps/alarma-con-desafios/screenshots/08_settings.webp", alt: "Ajustes de fiabilidad: avisa si algo puede impedir que suene" }
    ]
  },
  {
    slug: "historial-coche",
    name: "Historial del Coche",
    nameEn: "Vehicle Service History & Dossier",
    tagline: "Dossier de mantenimiento, registro de facturas y alertas de ITV para tu vehículo.",
    taglineEn: "Vehicle maintenance logs, MOT/ITV due-date alerts, and documented PDF dossiers.",
    category: "Auto y vehículos / Herramientas",
    categoryEn: "Auto & Vehicles / Tools",
    iconBg: "from-blue-600 via-cyan-600 to-teal-500",
    iconEmoji: "🚗",
    iconImage: "/apps/historial-coche/icon.png",
    status: "coming_soon",
    version: "1.0.1",
    legalUpdated: "9 de noviembre de 2026",
    legalUpdatedEn: "November 9, 2026",
    screenshots: [
      { src: "/apps/historial-coche/screenshots/01_dossier_completo.webp", alt: "Dossier completo en PDF: fechas, kilómetros, talleres e importes" },
      { src: "/apps/historial-coche/screenshots/02_para_el_comprador.webp", alt: "Dossier para el comprador: sin importes y con tus datos tapados" },
      { src: "/apps/historial-coche/screenshots/03_anuncio_publico.webp", alt: "Dossier para el anuncio: sin matrícula ni bastidor, solo un código de referencia" },
      { src: "/apps/historial-coche/screenshots/04_semaforo.webp", alt: "Inicio con el semáforo: la ITV vence en 6 días" },
      { src: "/apps/historial-coche/screenshots/05_registrar_visita.webp", alt: "Editar visita: escanea la factura al salir del taller" },
      { src: "/apps/historial-coche/screenshots/06_tapar_datos.webp", alt: "Tapar datos personales: importes tapados en la factura" },
      { src: "/apps/historial-coche/screenshots/07_privacidad.webp", alt: "Sin cuentas, sin anuncios, sin servidores" }
    ],
    priceModel: "Gratuita (1 vehículo) + Versión Pro (Pago único)",
    priceModelEn: "Free (1 vehicle) + Pro Lifetime (One-time purchase)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.historialcoche.app",
    description: "Historial del Coche es una herramienta de registro personal que permite a propietarios de vehículos documentar cronológicamente las revisiones, mantenimientos y facturas de su coche, y generar informes documentales en PDF («Dossier de Mantenimiento») con protección de privacidad.",
    descriptionEn: "Historial del Coche is a personal utility app allowing vehicle owners to record maintenance visits, archive inspection sheets and invoices, and generate documented PDF dossiers with built-in privacy redaction.",
    features: [
      "Registro cronológico completo de mantenimientos, ITV, revisiones y averías",
      "Generación de Dossier PDF profesional para venta o control personal",
      "Herramienta de tapado irreversible de datos privados en facturas (NIF, nombre, banco)",
      "Semáforo de alertas matinales para vencimientos de ITV, seguro e impuestos",
      "100% Sin servidores: base de datos local SQLite y exportación en .zip",
      "Copia de seguridad opcional en la carpeta privada de tu propio Google Drive (Pro)",
      "Moneda a elegir para los importes: EUR, USD, GBP, CHF, MXN, ARS, COP, PEN o BRL"
    ],
    featuresEn: [
      "Complete chronological service logs, inspections, and repairs",
      "Professional PDF maintenance dossier generation for vehicle sale or tracking",
      "Permanent redaction tool to conceal private data on invoices (ID, name, bank details)",
      "Morning alerts and status lights for MOT/ITV, insurance, and tax due dates",
      "Serverless & offline-first: private SQLite database with .zip export",
      "Optional cloud backup to your private Google Drive appDataFolder (Pro)",
      "Choose the currency of your amounts: EUR, USD, GBP, CHF, MXN, ARS, COP, PEN or BRL"
    ],
    requirements: "Android 8.0 o superior · Funciona sin conexión",
    requirementsEn: "Android 8.0 or later · Works offline"
  },
  {
    slug: "lifeseed",
    name: "Lifeseed",
    nameEn: "Lifeseed",
    tagline: "Vive una vida entera en texto: decisiones, familia y legado. Sin anuncios.",
    taglineEn: "Live a whole life in text: choices, family and legacy. No ads.",
    category: "Juegos · Simulación",
    categoryEn: "Games · Simulation",
    iconBg: "from-amber-400 via-orange-500 to-rose-500",
    iconEmoji: "🌱",
    iconImage: "/apps/lifeseed/icon.png",
    status: "beta",
    version: "0.3.0",
    priceModel: "Gratis · Sin anuncios · Sin compras dentro del juego",
    priceModelEn: "Free · No ads · No in-game purchases",
    description: "Lifeseed es un simulador de vida por texto. Naces, creces y decides: cada año pasa algo y cada decisión deja huella. Estudia, trabaja, enamórate, forma una familia o arriésgate fuera de la ley, y cuando mueras sigue la historia como tu hijo o tu hija. Sin anuncios, sin monedas de pago, sin temporizadores y sin recoger ningún dato.",
    descriptionEn: "Lifeseed is a text life simulator. You're born, you grow up, you decide: something happens every year, and every choice leaves a mark. Study, work, fall in love, raise a family or take your chances outside the law, and when you die the story goes on as your son or daughter. No ads, no premium currency, no timers, and no data collected.",
    features: [
      "Una vida entera, del primer llanto al último suspiro, en seis países",
      "Más de 400 momentos escritos con humor y con cariño, en español e inglés",
      "Estudios, carreras, pareja, hijos, amistades… y delitos absurdos con juicio y cárcel",
      "Legado: al morir, continúa como tu hijo o tu hija y construye una dinastía",
      "Logros y retos opcionales, sin temporizadores ni esperas",
      "Sin cuenta, sin conexión y sin recoger datos: las partidas se quedan en tu móvil"
    ],
    featuresEn: [
      "A whole life, from your first cry to your last breath, in six countries",
      "Over 400 moments written with humour and heart, in English and Spanish",
      "Studies, careers, love, children, friends… and absurd crimes with trials and prison",
      "Legacy: when you die, carry on as your son or daughter and build a dynasty",
      "Optional achievements and challenges, with no timers or waiting",
      "No account, works offline, no data collected: your lives stay on your phone"
    ],
    requirements: "Android 7.0 o superior · Funciona sin conexión",
    requirementsEn: "Android 7.0 or later · Works offline",
    legalUpdated: "8 de noviembre de 2026",
    legalUpdatedEn: "8 November 2026",
    screenshots: [
      { src: "/apps/lifeseed/screenshots/01_life.webp", alt: "Una vida en marcha: estadísticas y diario del año" },
      { src: "/apps/lifeseed/screenshots/02_decision.webp", alt: "Una decisión: cada elección deja huella" },
      { src: "/apps/lifeseed/screenshots/03_person.webp", alt: "Las personas de tu vida recuerdan cómo las tratas" },
      { src: "/apps/lifeseed/screenshots/04_actions.webp", alt: "Acciones: estudios, trabajo, ocio y más" },
      { src: "/apps/lifeseed/screenshots/05_obituary.webp", alt: "La necrológica al final de una vida" },
      { src: "/apps/lifeseed/screenshots/06_heirs.webp", alt: "Legado: continúa como tu hijo o tu hija" },
      { src: "/apps/lifeseed/screenshots/07_family_tree.webp", alt: "El árbol familiar de tu dinastía" },
      { src: "/apps/lifeseed/screenshots/08_achievements.webp", alt: "Logros y retos opcionales" }
    ]
  }
];
