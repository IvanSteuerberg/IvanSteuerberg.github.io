# Historial del Coche: textos públicos

Contenido para publicar en la web: política de privacidad, términos de uso,
soporte y eliminación de datos, en español y en inglés. Cada bloque `##` es una
página o sección independiente.

**Datos del desarrollador (ya configurados según tu perfil de RST Soft):**

| Campo | Valor |
|---|---|
| Titular / Responsable | Ivan Steuerberg (RST Soft) |
| Email de contacto | devrstsoft@gmail.com |
| País aplicable | España |
| Paquete de la app | `com.historialcoche.app` |

**Qué URL va en Play Console:**

- *Política de privacidad* (obligatoria en la ficha de Play Console): la página pública de privacidad.
- *Sitio web* (opcional en los datos de contacto): la página web o la ficha de soporte.
- *Eliminación de datos*: la sección de eliminación de datos (no requiere URL externa obligatoria si la app no tiene cuentas, pero tenerla en la web agiliza la aprobación del cuestionario de Data Safety).

---

## Política de privacidad

**Historial del Coche (Dossier de Mantenimiento)**  
Responsable: Ivan Steuerberg (RST Soft) · Contacto: devrstsoft@gmail.com  
Última actualización: 9 de octubre de 2026 · Versión de la app: 1.0.0  

### En resumen

Historial del Coche no recopila, no rastrea, no vende ni comparte tus datos personales. La aplicación está diseñada bajo una arquitectura estricta sin servidores propios: todos los datos de tus vehículos, fechas de inspección, registros de taller y fotografías de facturas se almacenan de forma local en la memoria interna de tu dispositivo. 

No existen cuentas de usuario, no hay publicidad y no hay herramientas de analítica ni telemetría. La conexión a internet se utiliza de manera exclusiva para dos funciones opcionales gestionadas directamente por Google: la compra integrada de la versión Pro a través de Google Play Billing y la copia de seguridad opcional en la carpeta privada `appDataFolder` de tu propia cuenta de Google Drive.

### Qué datos trata la aplicación

La app almacena y procesa exclusivamente la información que tú decides registrar para confeccionar el historial de tu vehículo:

- **Datos del vehículo:** matrícula, marca, modelo, año de fabricación, tipo de combustible, kilometraje inicial y, opcionalmente, número de bastidor (VIN) y fecha de primera matriculación.
- **Vencimientos y alertas:** fechas límites de Inspección Técnica de Vehículos (ITV), seguro obligatorio, impuesto de circulación (IVTM) y revisiones anuales o personalizadas.
- **Intervenciones de taller:** fecha del servicio, kilometraje en ese momento, categoría del trabajo (mantenimiento, frenos, neumáticos, etc.), nombre del taller o proveedor, importe económico y notas u observaciones.
- **Comprobantes y facturas:** imágenes escaneadas o importadas de hojas de taller, informes de ITV y facturas en formato JPEG o PDF.
- **Versiones tapadas de comprobantes:** imágenes derivadas generadas en tu dispositivo donde has cubierto voluntariamente datos personales o importes mediante rectángulos negros para proteger tu intimidad.

### Dónde se guarda tu información

Toda la información se almacena estrictamente en el almacenamiento interno privado de la aplicación en tu dispositivo (base de datos local SQLite y directorio de archivos protegidos). Ninguna otra aplicación instalada en tu teléfono puede acceder a estos archivos.

### Copias de seguridad y exportación

1. **Copia de seguridad local (.zip):** Puedes generar en cualquier momento un archivo `.zip` comprimido y cifrado por el sistema de archivos que contiene tu base de datos y todas tus facturas, seleccionando tú mismo dónde guardarlo en tu dispositivo o almacenamiento externo mediante el selector seguro de Android (Storage Access Framework).
2. **Copia en Google Drive (función Pro opcional):** Si dispones de la versión Pro y decides activar la sincronización con Google Drive, la app subirá copias de seguridad de tus datos exclusivamente a la carpeta oculta de datos de aplicación (`appDataFolder`) de **tu propia cuenta de Google**. Ni nosotros ni ningún tercero tenemos acceso a tu cuenta de Drive ni a los archivos almacenados en ella.

### Permisos solicitados y su finalidad

| Permiso | Finalidad |
|---|---|
| Notificaciones (`POST_NOTIFICATIONS`) | Mostrar recordatorios matinales cuando se aproxima la fecha de caducidad de tu ITV, seguro o revisión. |
| Ejecución en segundo plano (`WorkManager`) | Comprobar una vez al día las fechas de vencimiento para emitir los avisos del semáforo sin necesidad de que la app esté abierta. |
| Acceso a archivos (mediante selector del sistema) | Importar facturas en PDF o imágenes de tu galería y exportar el archivo `.zip` o el dossier PDF generado. No se pide acceso general a toda tu memoria. |
| Facturación de Google Play | Procesar de forma segura la compra opcional de la versión Pro de pago único. |

La aplicación **no solicita** acceso a tu ubicación, tus contactos, tu micrófono, tus mensajes ni tu cuenta de teléfono. El escaneo de facturas se realiza a través del módulo de escaneo de documentos del sistema de Google Play Services, procesando la imagen de forma local en el dispositivo.

### Tapado de datos personales en facturas (Privacidad para la venta)

Cuando compartes un dossier con un posible comprador, la aplicación incluye una herramienta de edición que te permite tapar datos sensibles en las fotos de tus facturas (como tu nombre, dirección particular, NIF o cuenta bancaria). Este proceso «quema» los rectángulos negros de manera irreversible directamente en los píxeles de una copia derivada de la imagen y elimina los metadatos EXIF de la cámara, preservando el archivo original intacto en tu dispositivo.

### Servicios de terceros

- **Google Play Billing:** La compra de la versión Pro se tramita íntegramente a través de la pasarela de pagos de Google Play. Nosotros no recibimos, tratamos ni almacenamos ningún dato bancario o de tarjeta de crédito.
- **Google Drive REST API:** Utilizada únicamente si el usuario Pro activa voluntariamente la copia en la nube.
- **Google Play Services (ML Kit Document Scanner):** Utilizado para digitalizar facturas en papel directamente con la cámara del dispositivo de forma local.

La aplicación **no incluye** redes de publicidad (AdMob u otras), bibliotecas de analítica (Firebase Analytics, Google Analytics), ni herramientas de rastreo de fallos que recopilen telemetría (Crashlytics, Sentry).

### Menores de edad

La aplicación está destinada a propietarios y conductores de vehículos mayores de edad. Al no recopilar datos personales en servidores remotos, no se recopila información de menores de edad.

### Tus derechos (RGPD / GDPR)

De conformidad con el Reglamento General de Protección de Datos de la Unión Europea:

- **Acceso y Portabilidad:** Puedes extraer la totalidad de tus datos en cualquier momento mediante la exportación de la copia local en `.zip` o la generación del Dossier PDF.
- **Rectificación y Supresión:** Puedes editar o eliminar cualquier vehículo, visita, fecha o factura directamente desde la aplicación.
- **Eliminación total:** Si desinstalas la aplicación o borras sus datos desde los Ajustes de Android, todos los datos almacenados en tu dispositivo se destruirán de forma inmediata e irrecuperable. Si utilizas la copia en Google Drive, puedes pulsar «Desconectar y borrar copia» desde los Ajustes de la app o eliminar los datos desde la configuración de aplicaciones conectadas de tu cuenta de Google.

Para cualquier duda sobre la privacidad de la aplicación, puedes contactar al responsable en: **devrstsoft@gmail.com**.

### Cambios en esta política

Cualquier actualización de esta política se publicará en esta misma dirección web indicando la fecha de revisión.

---

## Privacy Policy

**Historial del Coche (Vehicle Service History & Dossier)**  
Controller: Ivan Steuerberg (RST Soft) · Contact: devrstsoft@gmail.com  
Last updated: 9 October 2026 · App version: 1.0.0  

### In Short

Historial del Coche does not collect, track, sell, or share your personal data. The app is built with a strict offline-first, serverless architecture: all vehicle details, inspection dates, workshop invoices, and receipts are stored locally on your device's internal storage.

There are no user accounts, no advertisements, and no third-party analytics or telemetry trackers. Internet access is used exclusively for two optional features powered by Google: processing the one-time Pro upgrade via Google Play Billing and backing up your data to the private `appDataFolder` of your personal Google Drive account.

### What Data the App Handles

The app stores only the data you choose to input to maintain your vehicle's documented history:

- **Vehicle details:** license plate, make, model, year of manufacture, fuel type, initial mileage, and optional Vehicle Identification Number (VIN) and first registration date.
- **Due dates and reminders:** expiration dates for vehicle technical inspections (MOT/ITV), insurance policy, road tax, and annual services.
- **Workshop service logs:** service date, logged mileage, service category (maintenance, brakes, tires, etc.), workshop name, cost, and personal notes.
- **Invoices and receipts:** scanned or attached receipt images and PDF documents.
- **Redacted receipts:** derived image versions where you have manually covered sensitive data or prices with solid black rectangles to protect your privacy prior to sharing.

### Where Your Data is Stored

All information is saved strictly within the private local storage sandbox of the application on your Android device (local SQLite database and internal files directory). No other app installed on your device can access these files.

### Backups and Exporting

1. **Local Backup (.zip):** You can generate a full `.zip` archive containing your entire database and documents at any time using Android's Storage Access Framework, allowing you to choose where to store it.
2. **Google Drive Backup (optional Pro feature):** If you upgrade to Pro and choose to enable Google Drive backup, the application uploads your encrypted archive strictly to the hidden application data folder (`appDataFolder`) of **your own Google account**. Neither we nor any third party have access to your Drive files.

### Permissions and Purpose

| Permission | Purpose |
|---|---|
| Notifications (`POST_NOTIFICATIONS`) | Deliver morning alerts when an inspection, insurance, or maintenance due date is approaching. |
| Background execution (`WorkManager`) | Perform once-daily checks of due dates to update the traffic-light status without keeping the app open. |
| Storage access (via system picker) | Import invoice PDFs or images and save generated PDF dossiers or `.zip` backup files. |
| Google Play Billing | Securely process the optional one-time Pro license purchase. |

The app **does not request** access to your location, contacts, microphone, call logs, or phone identity. Document scanning uses Google Play Services ML Kit Document Scanner on-device.

### Receipt Redaction and Privacy

Before sharing a vehicle dossier with potential buyers, you can use the built-in redaction editor to conceal sensitive personal data (such as your full name, home address, tax ID, or bank details). Redaction is permanently burned into the image pixels, strips original EXIF metadata, and preserves the original file untouched on your device.

### Third-Party Services

- **Google Play Billing:** Used for purchasing the Pro lifetime license. We do not receive or process credit card numbers or banking data.
- **Google Drive REST API:** Used solely if you explicitly enable cloud backup in your private Drive storage.
- **Google Play Services:** Used for local on-device document scanning.

The app contains **no advertising SDKs**, no usage tracking, and no crash analytics.

### Data Deletion and GDPR Rights

- **Access & Portability:** You can export all your data at any time via `.zip` export or PDF dossier generation.
- **Erasure:** Deleting an intervention or vehicle removes it immediately. Uninstalling the app completely purges all stored files and database entries from your device.

Contact: **devrstsoft@gmail.com**.

---

## Términos de uso

**Historial del Coche (Dossier de Mantenimiento)** · Ivan Steuerberg (RST Soft) · devrstsoft@gmail.com  
Última actualización: 9 de octubre de 2026  

### 1. Objeto de la aplicación

Historial del Coche es una herramienta de registro personal que permite a propietarios de vehículos documentar cronológicamente las revisiones, mantenimientos y comprobantes de su vehículo, y generar informes documentales en formato PDF («Dossier de Mantenimiento»). Al instalar y utilizar la aplicación, aceptas los presentes términos.

### 2. Modelo de licencia y compra «Pro»

1. **Versión Estándar (Gratuita):** Permite gestionar un (1) vehículo con registro ilimitado de visitas, comprobantes, alertas de vencimiento y copias de seguridad locales en formato `.zip`. El dossier PDF generado incluye una marca de agua identificativa y utiliza el perfil de exportación Completo.
2. **Versión Pro (Pago único vitalicio):** Disponible mediante una compra integrada única a través de Google Play (sin cuotas periódicas ni suscripciones). Desbloquea la gestión de múltiples vehículos, la eliminación de la marca de agua en los dossiers PDF, todos los perfiles de exportación (Para el comprador, Anuncio público y Personalizado) y la copia de seguridad sincronizada en Google Drive.
3. La compra otorga una licencia personal, no exclusiva e intransferible vinculada a tu cuenta de Google Play.

### 3. Reembolsos

Los pagos y solicitudes de reembolso son procesados por Google Play con arreglo a sus políticas de compra. Si experimentas cualquier incidencia con tu adquisición, puedes solicitar el reembolso a través de Google Play Console o contactar con nosotros en **devrstsoft@gmail.com**.

### 4. Naturaleza documental y descargo de responsabilidad (Aviso Legal)

1. **La aplicación es una herramienta documental, no un organismo certificador:** El dossier PDF se genera única y exclusivamente a partir de las anotaciones, fotografías y facturas introducidas voluntariamente por el usuario.
2. **Sin vinculación oficial:** Historial del Coche y su desarrollador no tienen vinculación con la Dirección General de Tráfico (DGT), estaciones de ITV, fabricantes de automóviles ni asociaciones de talleres.
3. **Sin garantía mecánica o pericial:** La generación de un dossier no constituye una peritación mecánica, certificación técnica ni garantía sobre el estado de conservación, kilometraje real o ausencia de vicios ocultos del vehículo. La aplicación declina expresamente toda responsabilidad sobre transacciones comerciales de compraventa de vehículos realizadas entre particulares o profesionales fundamentadas en los informes generados.
4. **Veracidad de la información:** El usuario es el único responsable de la exactitud de los datos introducidos y de la autenticidad de los comprobantes adjuntados.

### 5. Copias de seguridad y disponibilidad de datos

La aplicación opera sin servidores propios. Eres responsable de mantener copias de seguridad periódicas de tu historial mediante la exportación `.zip` o la función de Google Drive Pro. En caso de pérdida, rotura o formateo de tu dispositivo sin copia de seguridad previa, los datos no podrán ser recuperados por el desarrollador.

### 6. Propiedad intelectual

El código fuente, diseño de interfaz, marcas y formatos de maquetación del dossier PDF pertenecen a Ivan Steuerberg (RST Soft). Los datos, comentarios e imágenes de facturas que aportes a la aplicación son de tu exclusiva propiedad.

### 7. Ley aplicable

Estos términos se rigen por la legislación española y la normativa comunitaria europea aplicable en materia de consumidores.

---

## Terms of Use

**Historial del Coche (Vehicle Service History & Dossier)** · Ivan Steuerberg (RST Soft) · devrstsoft@gmail.com  
Last updated: 9 October 2026  

### 1. Scope of the Application

Historial del Coche is a personal utility app allowing vehicle owners to record maintenance visits, archive inspection sheets and invoices, and generate documented PDF dossiers. By installing and using the app, you agree to these terms.

### 2. Licensing and «Pro» Purchase

1. **Standard Edition (Free):** Allows managing 1 vehicle with unlimited logs, receipts, local `.zip` backup, and watermarked PDF generation.
2. **Pro Edition (One-time Lifetime Purchase):** Unlocked via Google Play In-App Purchase (no recurring subscriptions). Grants multiple vehicle management, watermark removal, advanced privacy export profiles (Buyer, Public Listing, Custom), and Google Drive backup.
3. The license is personal, non-transferable, and associated with your Google Play account.

### 3. Disclaimer and Nature of the Dossier

1. **Self-Reported Evidence:** The dossier PDF is compiled entirely from user-entered information and attached receipts.
2. **No Mechanical Certification:** The app and its developer are not affiliated with transport departments, official inspection authorities, or automotive manufacturers. The dossier does not constitute an official mechanical inspection or warranty regarding a vehicle's mechanical condition or true mileage.
3. Users remain solely responsible for the authenticity and truthfulness of attached invoices and logged data.

### 4. Governing Law

Governed by the laws of Spain and EU consumer protection regulations. Contact: **devrstsoft@gmail.com**.

---

## Soporte / Support

**¿Necesitas ayuda con Historial del Coche?** Escríbenos a **devrstsoft@gmail.com**.

### Preguntas frecuentes (FAQ)

#### 1. ¿Cómo genero mi Dossier PDF?
Entra en la ficha de tu vehículo y pulsa en el botón **«Generar dossier PDF»**. Podrás previsualizar el documento, seleccionar el perfil que mejor se adapte (Completo, Para el comprador o Anuncio público) y compartirlo directamente por WhatsApp, email o guardarlo en tu teléfono.

#### 2. ¿Cómo tapo datos privados de mis facturas antes de enseñarlas?
Al registrar una visita con factura, pulsa sobre la miniatura de la imagen en el botón **«Tapar datos»**. Podrás dibujar rectángulos negros con el dedo sobre importes, nombres, direcciones o DNI. Esos rectángulos se graban de forma permanente e irreversible en una copia derivada sin alterar tu factura original.

#### 3. ¿Cómo paso mis datos a un móvil nuevo?
- **Copia local (.zip):** En tu móvil antiguo, ve a *Ajustes → Copias de seguridad → Crear copia local (.zip)* y guarda el archivo en un pendrive, envíatelo por correo o súbelo a la nube. En el móvil nuevo, descarga la app, pulsa en *«Ya tengo una copia de seguridad»* y selecciona el archivo `.zip`.
- **Google Drive (Pro):** En el móvil antiguo, pulsa *«Copiar ahora en Drive»*. En el móvil nuevo, activa Pro, conecta tu cuenta de Google Drive y pulsa *«Restaurar»*.

#### 4. He cambiado de móvil y no se reconoce mi compra Pro
Ve a *Ajustes → Versión Pro → Restaurar compras*. Google Play verificará tu compra previa y reactivará la versión Pro automáticamente sin ningún coste adicional.

#### 5. Requisitos mínimos
Android 8.0 (API 26) o superior. Funciona completamente sin conexión a internet.

---

## Eliminación de datos / Data Deletion

**Español.** Historial del Coche opera sin cuentas de usuario y almacena toda la información de forma local en tu propio teléfono:
- **Para borrar todos los datos locales:** Desinstala la aplicación de tu dispositivo o ve a *Ajustes de Android → Aplicaciones → Historial del Coche → Almacenamiento → Borrar datos*. Esto destruye de forma inmediata y definitiva todas las visitas, datos y facturas.
- **Para borrar la copia de Google Drive (usuarios Pro):** Abre la app, ve a *Ajustes → Google Drive → Desconectar y borrar copia*. También puedes borrarla en cualquier momento desde tu cuenta de Google en *Google Drive → Configuración → Administrar aplicaciones → Historial del Coche → Eliminar datos ocultos de la aplicación*.

**English.** Historial del Coche functions without user accounts and saves data locally on your device:
- **To delete local data:** Uninstall the application or navigate to *Android Settings → Apps → Historial del Coche → Storage → Clear data*. All vehicle logs and invoices are immediately destroyed.
- **To delete Google Drive cloud backups (Pro users):** Open the app, go to *Settings → Google Drive → Disconnect and delete backup*. You can also manage it via your Google account at *Google Drive → Settings → Manage Apps → Historial del Coche → Delete hidden app data*.
