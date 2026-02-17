import { useState, useEffect } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

interface TouchedFields {
  username: boolean;
  email: boolean;
  password: boolean;
}

export const useSignUpValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({
    username: false,
    email: false,
    password: false,
  });

  const validateUsername = (value: string): string | undefined => {
    if (!value.trim()) {
      return 'El nombre de usuario es requerido';
    }
    if (value.length < 3) {
      return 'El nombre debe tener al menos 3 caracteres';
    }
    if (value.length > 20) {
      return 'El nombre no puede exceder 20 caracteres';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return 'Solo se permiten letras, números y guiones bajos';
    }
    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) {
      return 'El correo electrónico es requerido';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Ingresa un correo electrónico válido';
    }
    return undefined;
  };

  const validatePassword = (value: string): string | undefined => {
    if (!value) {
      return 'La contraseña es requerida';
    }
    if (value.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    if (!/(?=.*[a-z])/.test(value)) {
      return 'Debe contener al menos una letra minúscula';
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return 'Debe contener al menos una letra mayúscula';
    }
    if (!/(?=.*\d)/.test(value)) {
      return 'Debe contener al menos un número';
    }
    return undefined;
  };

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'username':
        return validateUsername(value);
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      default:
        return undefined;
    }
  };

  useEffect(() => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      if (touched[field]) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
        }
      }
    });

    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const isFormValid = (): boolean => {
    const allFieldsTouched = Object.values(touched).every((value) => value);
    const noErrors = Object.keys(errors).length === 0;
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');

    return allFieldsTouched && noErrors && allFieldsFilled;
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    setErrors({});
    setTouched({
      username: false,
      email: false,
      password: false,
    });
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    isFormValid,
    resetForm,
  };
};
