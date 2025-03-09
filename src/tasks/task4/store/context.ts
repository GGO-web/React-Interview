import { createContext, Dispatch, SetStateAction } from "react";

interface FormContextType {
    email: string;
    password: string;
    phone: string;
    message: string;
    currentStep: number;
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    setPhone: Dispatch<SetStateAction<string>>;
    setMessage: Dispatch<SetStateAction<string>>;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const FormContext = createContext<FormContextType>({
    email: '',  
    password: '',
    phone: '',
    message: '',
    currentStep: 1,
    setEmail: () => {},
    setPassword: () => {},
    setPhone: () => {},
    setMessage: () => {},
    setCurrentStep: () => {},
});