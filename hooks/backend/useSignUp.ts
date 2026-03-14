import { useState } from "react";
import {
  registerUser,
  mapFirebaseError,
} from "../../services/auth/authService";
import { AuthFormData } from "../../types/auth.types";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (data: AuthFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await registerUser(data);
      return true;
    } catch (err: any) {
      const friendlyMessage = mapFirebaseError(err.code);
      setError(friendlyMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading, error };
};
