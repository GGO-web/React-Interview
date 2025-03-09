import React, { useContext } from 'react'
import { FormContext } from '../../store/context';
import { Input } from '../../../../components/Input/input';

export const FormStep1 = () => {
    const { phone, setPhone, setCurrentStep, currentStep } = useContext(FormContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep((currentStep: number) => currentStep + 1);
    }
    
    return (
        <div className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <Input label="Phone" type="tel" name="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type='submit'>Next</button>
            </form>
            <div>Step {currentStep} of 3</div>
        </div>
    )
}
