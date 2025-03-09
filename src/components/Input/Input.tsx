import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return <div className='flex flex-col gap-2'>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        <input {...props} ref={ref} className='border-2 border-gray-300 rounded-md p-2' />
    </div>
})

Input.displayName = 'Input'