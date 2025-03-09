import React, { useState } from 'react'
import { FormContext } from './store/context'
import { FormStep1 } from './components/form-step1/FormStep1'
import { FormStep2 } from './components/form-step2/FormStep2'
import { FormStep3 } from './components/form-step3/FormStep3'

// TODO: Зарефактори будь ласка код використовуючи найкращі практики. 
// Потрібно досягти максимального перевикористання функцій. 
// Якщо дизайн змінили і крок 3 поміняли місцями з кроком 2 то код повинен працювати коректно.
// NOTE: Можна викорристати інший стейтменеджер, допоміжні хуки якщо потрібно.

export const Task4 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <FormContext.Provider value={{ email, setEmail, password, setPassword, phone, setPhone, message, setMessage, currentStep, setCurrentStep }}>
            {currentStep === 1 && <FormStep1 />}
            {currentStep === 2 && <FormStep2 />}
            {currentStep === 3 && <FormStep3 />}
        </FormContext.Provider>
  )
}
