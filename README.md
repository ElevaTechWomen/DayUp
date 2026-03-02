<div align="center">
  <img src="./assets/images/DayUp-Logo.png" alt="DayUp Logo" width="200" />
</div>

<div align="center">

*Organize your day, build your habits, elevate your life.*

</div>

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

<p align="center">
  <a href="#-english">🇺🇸 English</a> • 
  <a href="#-español">🇪🇸 Español</a>
</p>

---

# 🇺🇸 English

## ✨ About the Project
**DayUp** is a mobile application designed to help users organize their daily lives and boost productivity through a *structured timeline with defined time slots*.

The app allows users to plan and track their daily activities in a clear and visual way, showing which tasks were completed, postponed, or left pending.

### Why DayUp?
Unlike other productivity apps, DayUp integrates:
- **Holistic Balance:** Not just work-related tasks, but also hobbies, household responsibilities, and social life.
- **Motivational Design:** Fresh and energizing colors that promote focus and organization.

### Target Market
- Active adults (25–55 years old)
- Household managers (30–65 years old)
- Active seniors (60+ years old)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React Native | 0.81+ | Mobile framework |
| Expo | 54+ | Development platform |
| TypeScript | 5+ | Type safety |
| Supabase | -- | Auth & database *(upcoming)* |
| Tailwind CSS | 3+ | Styling |
| Expo Router | 6+ | Navigation |
| Ionicons | — | Icon library |

---

## 📁 Project Structure

```
src/
├── app/      # Expo Router screens
│   └── (tabs)/
│   └── auth/
├── assets/
│   └── images/
│       └── DayUpLogo.png
├── components/
│   └── ui/
│       ├── Button.tsx
│       └── Input.tsx
└── hooks/
    └── frontend/
        └── useSignUpValidation.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- Expo Go app on your device *(for physical device testing)*

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/dayup.git
cd dayup
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npx expo start
```

4. **Run on device or emulator**
```bash
# Android
npx expo run:android

# iOS
npx expo run:ios

# Expo Go (scan QR)
npx expo start
```
---

## 🎨 Screenshots

| Login | Sign Up | Home |
|---|---|---|
| ![LoginImg](./assets) | ![SignUpImg](./assets/screenshots/signup.png) | ![HomeImg](./assets/screenshots/home.png) |

| Plan My Day | Statistics | Profile |
|---|---|---|
| ![PlanImg](./assets/screenshots/plan.png) | ![StatsImg](./assets/screenshots/stats.png) | ![ProfileImg](./assets/screenshots/profile.png) |

> 📸 *Screenshots will be updated as the app progresses.*

---

## 💜 Team – ElevaTechWomen
Built by **ElevaTechWomen**, a group of developers committed to continuous learning and real-world technical growth.

This project represents our first major milestone as a GitHub organization, applying React Native in a professional development context.

### 👩‍💻 Developers
| Name | Rol | Speciality | LinkedIn |
|---|---|---|---|
| Giselle Bernal Melo | Project Lead / Software Developer | Product Owner & Frontend Dev | https://www.linkedin.com/in/gisellebernalmelo/ |
| Maria Elena Arroyo | Fullstack Developer | Frontend Dev | https://www.linkedin.com/in/mary-arroyo-herrera/ |
| Laura Palma | Frontend Developer | Frontend Dev & Salesforce | https://www.linkedin.com/in/laura-palma-9sh7/|
| Elizabeth Echavarria | Frontend Developer | Frontend Dev & Tailwind | https://www.linkedin.com/in/elizabeth-echavarria-/ |
| Leidy Acevedo Jaimes | Frontend Developer | Frontend Dev | https://www.linkedin.com/in/leidy-acevedo-jaimes/ |
| Alejandra Arévalo | Frontend Developer | Frontend Dev & Salesforce | https://www.linkedin.com/in/alejandra-ar%C3%A9valo/ |


---

# 🇪🇸 Español

> *Organiza tu día, construye tus hábitos, eleva tu vida.*

## ✨ Sobre el Proyecto
**DayUp** es una aplicación móvil diseñada para organizar el día a día y potenciar la productividad mediante un **timeline con horarios definidos**. 

La herramienta permite planear y dar seguimiento integral a las actividades diarias, mostrando de forma clara y visual cuáles se cumplieron, cuáles quedaron pendientes y cuáles se pospusieron.

### ¿Por qué DayUp?
A diferencia de otras apps, DayUp integra:
- **Balance Integral:** No solo trabajo, sino también hobbies, hogar y vida social.
- **Diseño Motivacional:** Colores frescos que transmiten energía y orden.

### Mercado Objetivo
- Adultos activos (25-55 años).
- Gestores del hogar (30-65 años).
- Adultos mayores activos (60+ años).

---

## 🛠 Tecnologías
| Tecnología | Propósito |
|------------|------------|
| React Native | Framework móvil |
| Expo | Plataforma de desarrollo |
| TypeScript | Tipado estático |
| Supabase | Autenticación y base de datos *(próximamente)* |
| Tailwind CSS | Estilos |
| Expo Router | Navegación |
| Ionicons | Librería de íconos |

---

## 🚀 Instalación
### Requisitos

- Node.js 18+
- npm o yarn
- Expo CLI
- Expo Go (opcional)

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/your-username/dayup.git
cd dayup
```

2. **Instala dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
cp .env.example .env
```

Completa el archivo `.env` con tus credenciales de Firebase. Ver sección [Configuración de Firebase](#-configuración-de-firebase) abajo.

4. **Inicia el servidor**
```bash
npx expo start
```

---

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


## 💜 Nuestro Equipo: ElevaTechWomen
Somos un grupo de desarrolladoras egresadas de Laboratoria que hemos decidido unir fuerzas para continuar nuestra formación de manera autónoma y práctica. En ElevaTechWomen, entendemos que el crecimiento técnico va de la mano con el apoyo mutuo.

Este proyecto es nuestra primera gran meta como organización en GitHub, donde aplicamos React Native en un contexto laboral real para fortalecer nuestras habilidades y prepararnos para los retos de la industria tecnológica.
