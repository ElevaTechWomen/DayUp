import { db, auth, storage } from './firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export async function testFirebaseConnection() {
  try {
    console.log('✅ Auth inicializado:', auth.app.name);
    console.log('✅ Storage inicializado:', storage.app.name);
    const testRef = collection(db, '_test');
    await getDocs(testRef);
    console.log('✅ Firestore conectado correctamente');
  } catch (error) {
    console.error('❌ Error Firebase:', error.message);
  }
}