import React, { useContext, useState } from 'react'
import { FormContext } from '../../store/context';
import { Input } from '../../../../components/Input/input';

export const FormStep3 = () => {
    const [message, setMessage] = useState('');

    const {email, password, phone, currentStep} = useContext(FormContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const dataWithMessage = {
            email,
            password,
            phone,
            message
        }

        console.log(dataWithMessage);
    }

    return (
        <div className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <Input label="Message" type="text" name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <div>Step {currentStep} of 3</div>
        </div>  
    )
}
