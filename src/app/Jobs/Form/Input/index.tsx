import { forwardRef } from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    prefix?: string;
    iconRight?: any;
    label?: string;
    barSize?: 'full' | 'md';
    errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
    (
        {
            prefix,
            iconRight,
            label,
            barSize,
            errorMessage,
            type,
            ...props
        },
        ref,
    ) => {
        const hasError = !!errorMessage;

        return (
            <div className={`flex flex-1 flex-col items-start p-0 m-0 h-full text-left ${barSize === 'full' ? 'w-full' : 'w-80'} ${hasError ? 'border-red-400' : ''}`}>
                <div className={`relative bg-white text-gray-500 box-border border border-gray-300 flex flex-1 self-stretch flex-row items-center p-1.5 px-2 rounded-md ${hasError ? 'ring-1 ring-red-500' : 'focus-within:ring-2 focus-within:ring-amber-400'}`}>
                    <fieldset className='relative flex flex-col gap-0.5 w-full mx-2 border-0'>
                        <span className='font-sans text-xs text-black font-bold'>{label}</span>
                        <div className='flex items-center'>
                            {!!prefix && <p className='text-gray-500 mr-1'>{prefix}</p>}
                            <input className='text-sm bg-transparent border-0 w-full p-0 focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-600'
                                ref={ref}
                                type={type}
                                {...props}
                            />
                        </div>
                    </fieldset>
                    {!!iconRight && <>{iconRight}</>}
                </div>
                {errorMessage && (
                    <div className='pl-2 pt-0.5'>
                        <p className='text-red-500 text-xs'>
                            {errorMessage}
                        </p>
                    </div>
                )}
            </div>
        );
    },
);

Input.displayName = 'FormInput';
