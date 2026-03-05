import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra ?? {};

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

// Evita reinicializar Firebase en hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Servicios listos para tickets #6, #7, #8, #9
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;