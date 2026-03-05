# 🇺🇸 English
## 🔥 Firebase Configuration

> **Important note:** Authentication implementation (register, login, social auth) will be done in future tickets.
> This setup only prepares the infrastructure.

### Enabled Services

| Service | Status | Notes |
|---|---|---|
| Authentication | ✅ Enabled | |
| Firestore Database | ✅ Enabled | Test mode (expires 2026-03-30) |
| Storage | ⏳ Pending | Requires Blaze plan upgrade |

### Step 1 — Create a Firebase project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"**
3. Name it (e.g., `dayup-dev`)
4. Disable Google Analytics (optional for MVP)
5. Click **"Create project"**

### Step 2 — Register the Android app

1. In the dashboard, click the **Android** icon
2. Package name: `com.dayup.app`
3. Nickname: `DayUp Android`
4. Leave SHA-1 empty for now (needed for a future ticket)
5. Click **"Register app"**
6. Download `google-services.json` and place it in the **project root**

### Step 3 — Register the Web app (required for the JS SDK)

1. Click **"Add app"** → select **`</>`** (Web)
2. Nickname: `DayUp Web`
3. Do NOT enable Firebase Hosting
4. Click **"Register app"**
5. Copy the `firebaseConfig` values — you'll need them for the `.env` file

### Step 4 — Enable Firebase services

**Authentication:**
1. Go to **Build → Authentication → Get started**
2. Leave it enabled without configuring any provider yet

**Firestore:**
1. Go to **Build → Firestore Database → Create database**
2. Select **"Start in test mode"**
3. Region: `nam5 (United States)`

**Storage:** *(pending — requires Blaze plan)*

### Step 5 — Configure environment variables

Create your `.env` file in the project root:
```bash
cp .env.example .env
```

Fill in the values from Firebase Console → ⚙️ **Project settings → Your apps → SDK setup**:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

> ⚠️ Never commit the `.env` file to the repository. It is listed in `.gitignore`.

### Step 6 — Verify the connection

Run the app and check the console for:
```
✅ Auth initialized: [DEFAULT]
✅ Storage initialized: [DEFAULT]
✅ Firestore connected successfully
```

If you see `auth/invalid-api-key`, make sure there are no spaces after `=` in your `.env`, then restart with:
```bash
npx expo start --clear
```

### Sensitive files in .gitignore
```
.env
google-services.json
GoogleService-Info.plist
```

### Useful links

- [Firebase Console](https://console.firebase.google.com)
- [Firebase JS SDK Docs](https://firebase.google.com/docs/web/setup)
- [Expo + Firebase Guide](https://docs.expo.dev/guides/using-firebase/)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

### Troubleshooting

| Error | Cause | Solution |
|---|---|---|
| `auth/invalid-api-key` | Wrong or empty API key | Check for spaces or typos in `.env` |
| `Cannot read expoConfig.extra` | Missing setup in `app.config.js` | Verify the `extra` block exists |
| `FirebaseError: permission-denied` | Firestore rules expired | Update rules in Firebase Console |
| Variables showing as `undefined` | `.env` not loaded | Run `npx expo start --clear` |

---
# 🇪🇸 Español
## 🔥 Configuración de Firebase

> **Nota importante:** La implementación de autenticación (registro, login, redes sociales) se realizará en tickets futuros.
> Este setup solo prepara la infraestructura.

### Servicios Habilitados

| Servicio | Estado | Notas |
|---|---|---|
| Authentication | ✅ Habilitado | 
| Firestore Database | ✅ Habilitado | Modo test (expira 2026-03-30) |
| Storage | ⏳ Pendiente | Requiere actualizar al plan Blaze |

### Paso 1 — Crear proyecto en Firebase Console

1. Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
2. Clic en **"Agregar proyecto"**
3. Nómbralo (ej: `dayup-dev`)
4. Desactiva Google Analytics (opcional para MVP)
5. Clic en **"Crear proyecto"**

### Paso 2 — Registrar la app Android

1. En el dashboard, clic en el ícono de **Android**
2. Package name: `com.dayup.app`
3. Apodo: `DayUp Android`
4. Deja SHA-1 vacío por ahora (se necesita para ticket futuro)
5. Clic en **"Registrar app"**
6. Descarga `google-services.json` y colócalo en la **raíz del proyecto**

### Paso 3 — Registrar la app Web (requerido para el JS SDK)

1. Clic en **"Agregar app"** → selecciona **`</>`** (Web)
2. Apodo: `DayUp Web`
3. NO actives Firebase Hosting
4. Clic en **"Registrar app"**
5. Copia los valores del `firebaseConfig` — los necesitas para el `.env`

### Paso 4 — Habilitar servicios Firebase

**Authentication:**
1. Ve a **Compilación → Authentication → Comenzar**
2. Déjalo habilitado sin configurar ningún proveedor aún

**Firestore:**
1. Ve a **Compilación → Firestore Database → Crear base de datos**
2. Selecciona **"Comenzar en modo de prueba"**
3. Región: `nam5 (United States)`

**Storage:** *(pendiente — requiere plan Blaze)*

### Paso 5 — Configurar variables de entorno

Crea tu archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Completa con los valores de Firebase Console → ⚙️ **Configuración del proyecto → Tus apps → Configuración del SDK**:

```env
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

> ⚠️ Nunca subas el archivo `.env` al repositorio. Está en `.gitignore`.

### Paso 6 — Verificar la conexión

Corre la app y verifica en consola:

```
✅ Auth inicializado: [DEFAULT]
✅ Storage inicializado: [DEFAULT]
✅ Firestore conectado correctamente
```

Si ves `auth/invalid-api-key`, verifica que no haya espacios después del `=` en tu `.env`, luego reinicia con:

```bash
npx expo start --clear
```

### Archivos sensibles en .gitignore

```
.env
google-services.json
GoogleService-Info.plist
```

### Links útiles

- [Firebase Console](https://console.firebase.google.com)
- [Firebase JS SDK Docs](https://firebase.google.com/docs/web/setup)
- [Guía Expo + Firebase](https://docs.expo.dev/guides/using-firebase/)
- [Reglas de seguridad Firestore](https://firebase.google.com/docs/firestore/security/get-started)

### Solución de problemas comunes

| Error | Causa | Solución |
|---|---|---|
| `auth/invalid-api-key` | API key incorrecta o vacía | Revisa espacios o typos en `.env` |
| `Cannot read expoConfig.extra` | Falta configuración en `app.config.js` | Verifica que exista el bloque `extra` |
| `FirebaseError: permission-denied` | Reglas de Firestore vencidas | Actualiza las reglas en Firebase Console |
| Variables como `undefined` | `.env` no cargado | Ejecuta `npx expo start --clear` |

---
