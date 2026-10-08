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
}

export const developerInfo = {
  name: "Ivan Steuerberg",
  brandName: "RST Soft",
  contactEmail: "devrstsoft@gmail.com",
  country: "España",
  countryEn: "Spain",
  playStoreDeveloperUrl: "https://play.google.com/store/apps/dev?id=IvanSteuerberg",
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
    status: "beta",
    version: "1.0.0",
    priceModel: "Pago único · Sin anuncios · Sin suscripciones",
    priceModelEn: "One-time purchase · No ads · No subscriptions",
    playStoreUrl: "https://play.google.com/apps/internaltest/4701519045584183167",
    description: "Alarma con desafíos es un despertador para Android diseñado para que levantarse sea infalible. Para apagarla debes resolver desafíos de matemáticas, memoria, puzzle o sacudir el teléfono con energía. Sin trampas ni posponer.",
    descriptionEn: "Alarm With Challenges is an Android alarm clock designed to make waking up reliable. To turn it off you must solve math problems, memory games, sliding puzzles, or shake your phone vigorously. No shortcuts, no snooze.",
    features: [
      "Desafíos interactivos: Matemáticas, Memoria, Puzzle deslizante y Sacudir",
      "Sin botón de posponer (Snooze): te despierta de verdad",
      "Función Pre-alarma suave entre 1 y 30 minutos antes",
      "100% Sin conexión: no requiere ni pide permiso de Internet",
      "Tus datos nunca salen de tu teléfono: 0 trackers, 0 analíticas",
      "Tonos originales sintetizados o tus propios archivos de música"
    ],
    featuresEn: [
      "Interactive challenges: Math, Memory, Sliding puzzle, and Shake",
      "No snooze button: built to actually get you out of bed",
      "Gentle pre-alarm option 1 to 30 minutes before the main alarm",
      "100% Offline: does not request or require internet permission",
      "Zero trackers, zero analytics: your data never leaves your device",
      "Original synthesized tones or custom system/audio files"
    ],
    requirements: "Android 10 o superior · Funciona sin conexión",
    requirementsEn: "Android 10 or later · Works offline"
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
    version: "1.0.0",
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
      "Copia de seguridad opcional en la carpeta privada de tu propio Google Drive (Pro)"
    ],
    featuresEn: [
      "Complete chronological service logs, inspections, and repairs",
      "Professional PDF maintenance dossier generation for vehicle sale or tracking",
      "Permanent redaction tool to conceal private data on invoices (ID, name, bank details)",
      "Morning alerts and status lights for MOT/ITV, insurance, and tax due dates",
      "Serverless & offline-first: private SQLite database with .zip export",
      "Optional cloud backup to your private Google Drive appDataFolder (Pro)"
    ],
    requirements: "Android 8.0 o superior · Funciona sin conexión",
    requirementsEn: "Android 8.0 or later · Works offline"
  }
];
