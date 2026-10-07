export interface PermissionItem {
  name: string;
  purpose: string;
}

export interface ThirdPartyService {
  name: string;
  url: string;
  purpose: string;
}

export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  iconBg: string;
  iconEmoji: string;
  status: 'published' | 'coming_soon' | 'beta';
  version: string;
  playStoreUrl?: string;
  description: string;
  features: string[];
  privacyPolicy: {
    lastUpdated: string;
    summary: string;
    collectsPersonalData: boolean;
    permissions: PermissionItem[];
    thirdPartyServices: ThirdPartyService[];
    dataRetentionText: string;
    childrenPrivacyText?: string;
  };
  dataDeletion: {
    instructions: string[];
    turnaroundDays: number;
    deletedDataTypes: string[];
    retainedDataTypes?: string[];
  };
}

export const developerInfo = {
  name: "Ivan Steuerberg",
  brandName: "RST Soft",
  contactEmail: "devrstsoft@gmail.com",
  playStoreDeveloperUrl: "https://play.google.com/store/apps/dev?id=IvanSteuerberg", // Sustituir por ID real si existe
  githubUrl: "https://github.com/IvanSteuerberg",
  websiteUrl: "https://ivansteuerberg.github.io",
  bio: "Desarrollador independiente enfocado en crear aplicaciones Android nativas, eficientes y respetuosas con la privacidad de los usuarios."
};

export const apps: AppData[] = [
  {
    slug: "app-ejemplo",
    name: "Mi App Ejemplo",
    tagline: "Productividad y simplicidad en tu dispositivo Android.",
    category: "Productividad / Herramientas",
    iconBg: "from-blue-600 to-indigo-700",
    iconEmoji: "⚡",
    status: "published",
    version: "1.0.0",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rstsoft.ejemplo",
    description: "Una aplicación ligera y optimizada diseñada para facilitar tus tareas diarias sin recopilar información personal innecesaria ni saturarte de anuncios.",
    features: [
      "Interfaz limpia, moderna y compatible con Modo Oscuro",
      "Rendimiento optimizado con consumo mínimo de batería",
      "Almacenamiento 100% local en tu dispositivo",
      "Sin rastreadores ni recopilación de información personal identificable"
    ],
    privacyPolicy: {
      lastUpdated: "7 de octubre de 2026",
      summary: "Esta aplicación respeta profundamente tu privacidad. No recopilamos, vendemos ni transferimos datos personales identificables a terceros.",
      collectsPersonalData: false,
      permissions: [
        {
          name: "Acceso a Internet (INTERNET)",
          purpose: "Requerido únicamente para comprobar actualizaciones y sincronizar datos si el usuario lo solicita."
        },
        {
          name: "Notificaciones (POST_NOTIFICATIONS)",
          purpose: "Opcional. Se utiliza únicamente para recordatorios configurados expresamente por el usuario."
        }
      ],
      thirdPartyServices: [
        {
          name: "Google Play Services",
          url: "https://policies.google.com/privacy",
          purpose: "Servicios del sistema operativo para distribución y verificación de integridad de la app."
        }
      ],
      dataRetentionText: "Dado que no recopilamos datos personales en servidores externos, tus datos se almacenan exclusivamente en la memoria local de tu dispositivo móvil y se eliminan al desinstalar la app.",
      childrenPrivacyText: "Esta aplicación no está dirigida a menores de 13 años ni recopila conscientemente información de niños, cumpliendo con la Ley COPPA y las directrices de familias de Google Play."
    },
    dataDeletion: {
      instructions: [
        "Abre la aplicación en tu dispositivo móvil.",
        "Dirígete al menú de Ajustes > Datos y Almacenamiento.",
        "Pulsa sobre 'Borrar todos mis datos' para limpiar cualquier caché o configuración local.",
        "Para una eliminación total y permanente, desinstala la aplicación de tu dispositivo Android.",
        "Si creaste una cuenta o enviaste correos de soporte, escribe a devrstsoft@gmail.com con el asunto 'Solicitud de borrado de datos' y eliminaremos cualquier registro en un plazo máximo de 30 días."
      ],
      turnaroundDays: 30,
      deletedDataTypes: [
        "Preferencias y ajustes de usuario",
        "Registros locales de uso",
        "Historial de correos de soporte enviados a nuestro buzón"
      ],
      retainedDataTypes: [
        "Comprobantes de transacciones gestionados directamente por Google Play Billing (retenidos por Google por requisitos fiscales y contables)."
      ]
    }
  }
];
