import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { AuthFormData } from "../../types/auth.types";
import { auth, db } from "../../config/firebase.config";

// Mapeo de errores de Firebase a mensajes claros en español
const mapFirebaseError = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    "auth/email-already-in-use": "Este correo ya está registrado.",
    "auth/weak-password": "La contraseña es demasiado débil.",
    "auth/network-request-failed": "Error de conexión. Verifica tu internet.",
  };
  return (
    errorMessages[errorCode] || "Ocurrió un error inesperado. Intenta de nuevo."
  );
};

export const registerUser = async ({
  username,
  email,
  password,
}: AuthFormData) => {
  try {
    // 1. Crear usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // 2. Guardar datos adicionales en Firestore (colección "users", doc ID = uid)
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      nombre: username,
      email: email,
      createdAt: serverTimestamp(),
    });

    return user;
  } catch (err: any) {
    console.log("ERROR CODE:", err.code);
    console.log("ERROR MESSAGE:", err.message);
    throw err;
  }
};
export { mapFirebaseError };
