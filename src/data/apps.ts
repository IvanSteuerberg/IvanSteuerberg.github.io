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
    category: "Estilo de vida / Herramientas",
    categoryEn: "Lifestyle / Tools",
    iconBg: "from-amber-500 via-orange-600 to-red-600",
    iconEmoji: "⏰",
    status: "published",
    version: "1.0.0",
    priceModel: "Pago único · Sin anuncios · Sin suscripciones",
    priceModelEn: "One-time purchase · No ads · No subscriptions",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rstsoft.alarmwithchallenges",
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
  }
];
