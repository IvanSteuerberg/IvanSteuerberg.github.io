# Ivan Steuerberg (RST Soft) - Google Play Developer Web

Sitio web personal y oficial de desarrollador de Google Play Store, alojado gratuitamente mediante **GitHub Pages** y generado con **Astro** y **Tailwind CSS**.

---

## 📱 URLs para Google Play Console

Al publicar tus aplicaciones en Google Play Console, utiliza estos enlaces oficiales:

| Campo en Google Play Console | URL Oficial |
| :--- | :--- |
| **Sitio web del desarrollador** | `https://ivansteuerberg.github.io/` |
| **Política de Privacidad de la App** | `https://ivansteuerberg.github.io/apps/[nombre-app]/privacy-policy/` |
| **Eliminación de cuenta y datos** | `https://ivansteuerberg.github.io/apps/[nombre-app]/data-deletion/` |
| **Términos de servicio** | `https://ivansteuerberg.github.io/apps/[nombre-app]/terms/` |

---

## 🚀 Cómo añadir una nueva aplicación

Para añadir una app nueva, **no necesitas crear nuevos archivos HTML**. Solo debes añadir un objeto en `src/data/apps.ts`:

1. Abre `src/data/apps.ts`.
2. Añade tu aplicación al array `apps`:

```typescript
{
  slug: "mi-nueva-app", // Determina la URL: /apps/mi-nueva-app/
  name: "Nombre de tu App",
  tagline: "Frase descriptiva corta",
  category: "Herramientas",
  iconBg: "from-purple-600 to-indigo-700",
  iconEmoji: "🚀",
  status: "published", // o "coming_soon"
  version: "1.0.0",
  playStoreUrl: "https://play.google.com/store/apps/details?id=tu.paquete.app",
  description: "Descripción detallada de la app...",
  features: [
    "Función principal 1",
    "Función principal 2"
  ],
  privacyPolicy: {
    lastUpdated: "7 de octubre de 2026",
    summary: "Resumen de privacidad...",
    collectsPersonalData: false,
    permissions: [
      { name: "INTERNET", purpose: "Sincronización opcional..." }
    ],
    thirdPartyServices: [
      { name: "Google Play Services", url: "https://policies.google.com/privacy", purpose: "Distribución" }
    ],
    dataRetentionText: "Los datos se almacenan exclusivamente de forma local."
  },
  dataDeletion: {
    instructions: [
      "Instrucción 1 para el usuario...",
      "Instrucción 2..."
    ],
    turnaroundDays: 30,
    deletedDataTypes: ["Datos locales de usuario"]
  }
}
```

Astro generará automáticamente:
* La tarjeta en la portada (`/`).
* La ficha individual (`/apps/mi-nueva-app/`).
* La Política de Privacidad (`/apps/mi-nueva-app/privacy-policy/`).
* La página de borrado de datos (`/apps/mi-nueva-app/data-deletion/`).
* Los Términos y Condiciones (`/apps/mi-nueva-app/terms/`).

---

## 🛠️ Comandos de Desarrollo

```bash
# Iniciar servidor local de pruebas
npm run dev

# Compilar para producción
npm run build

# Previsualizar la versión compilada
npm run preview
```

---

## 🌐 Publicación en GitHub Pages

1. Crea un repositorio público en GitHub llamado exactamente:
   **`IvanSteuerberg.github.io`**
2. Conecta tu carpeta local y sube los cambios:
   ```bash
   git add .
   git commit -m "Inicializar web de desarrollador"
   git remote add origin https://github.com/IvanSteuerberg/IvanSteuerberg.github.io.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings > Pages**:
   * En **Source**, selecciona **GitHub Actions**.
4. ¡Listo! Cada vez que hagas `git push`, tu web se compilará y actualizará automáticamente de forma 100% gratuita.
