import { useState, useEffect } from 'react';

interface FormData {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

interface TouchedFields {
    email: boolean;
    password: boolean;
}

export const useLoginValidation = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<TouchedFields>({
        email: false,
        password: false,
    });

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
        if (!value.trim()) {
            return 'La contraseña es requerida';
        }
        if (value.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
        }
        return undefined;
    };

    const validateField = (field: keyof FormData, value: string): string | undefined => {
        switch (field) {
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
                    newErrors[field] = error
                }
            }
        });

        setErrors(newErrors);
    }, [formData, touched]);

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleBlur = (field: keyof FormData) => {
        setTouched((prev) => ({
            ...prev,
            [field]:
                true
        }));
    }

    const isFormValid = (): boolean => {
        const allFieldsTouched = Object.values(touched).every((value) => value);
        const noErrors = Object.keys(errors).length === 0;
        const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');

        return allFieldsTouched && noErrors && allFieldsFilled;
    };

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
        });
        setErrors({});
        setTouched({
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
        resetForm
    };

}