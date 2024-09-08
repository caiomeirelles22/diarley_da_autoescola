import { forwardRef, useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    prefix?: string;
    iconRight?: any;
    label?: string;
    barSize?: 'full' | 'md';
    errorMessage?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FormInputProps>(
    (
        {
            prefix,
            iconRight,
            label,
            barSize,
            errorMessage,
            onChange, 
            ...props
        },
        ref,
    ) => {
        const [fileName, setFileName] = useState<string>('');
        const hasError = !!errorMessage;

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                setFileName(file.name); 
            } else {
                setFileName('');
            }
            if (onChange) onChange(event); 
        };

        return (
            <div className={`flex flex-1 flex-col items-start p-0 m-0 h-full text-left ${barSize === 'full' ? 'w-full' : 'w-80'} ${hasError ? 'border-red-400' : ''}`}>
                <div className={`relative bg-white text-gray-500 box-border border border-gray-300 flex flex-1 self-stretch flex-row items-center p-1.5 px-2 rounded-md ${hasError ? 'ring-1 ring-red-500' : 'focus-within:ring-2 focus-within:ring-amber-400'}`}>
                    <fieldset className='relative flex flex-col gap-0.5 w-full mx-2 border-0'>
                        <label htmlFor='fileInput' className='font-sans text-xs text-black font-bold'>{label}</label>
                        <div className='flex items-center'>
                            {!!prefix && <p className='text-gray-500 mr-1'>{prefix}</p>}
                            <input
                                id='fileInput'
                                className='hidden'
                                ref={ref}
                                type='file'
                                onChange={handleChange}
                                {...props}
                            />
                            <label
                                htmlFor='fileInput'
                                className='text-sm bg-transparent border-0 w-full p-0 cursor-pointer text-gray-600 flex items-center justify-start gap-2'
                            >
                                {fileName || 'Selecione o arquivo'} <FaFileUpload size={20} />
                            </label>
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

FileInput.displayName = 'FileInput';
