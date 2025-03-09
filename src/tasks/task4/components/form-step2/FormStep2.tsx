import React, { useContext } from 'react'
import { FormContext } from '../../store/context';
import { Input } from '../../../../components/Input/input';

export const FormStep2 = () => {
    const { email, setEmail, password, setPassword, setCurrentStep, currentStep } = useContext(FormContext);

    const handleChange = (type: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
        const strategy = type === 'email' ? setEmail : setPassword;
        strategy(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep((currentStep: number) => currentStep + 1);
    }

    return (
        <div className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <Input label="Email" type="email" name="email" placeholder="Email" value={email} onChange={handleChange('email')} />
                <Input label="Password" type="password" name="password" placeholder="Password" value={password} onChange={handleChange('password')} />
                <button type='submit'>Next</button>
            </form>
            
            <div>Step {currentStep} of 3</div>
        </div>
    )
}
