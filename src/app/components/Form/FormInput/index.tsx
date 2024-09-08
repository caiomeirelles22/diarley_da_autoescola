import { ComponentProps, forwardRef } from 'react'

export interface FormInputProps extends ComponentProps<'input'> {
   iconLeft?: any
   label?: string
   highlightOnFocus?: 'blue' | 'error'
   errorMessage?: string
}

export interface SearchInputProps extends FormInputProps {
   options: string[]
   setValue: (value: string) => void
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
   (
      { iconLeft, label, highlightOnFocus, errorMessage, type, ...props },
      ref,
   ) => {
      

      return (
         <div className="flex flex-1 flex-col items-start p-0 m-0 h-full text-left w-full ">
           
            <div
               className={`bg-gray-50 box-border flex flex-1 self-stretch items-center py-2 px-4 h-10 w-full border border-solid rounded-md border-blue-300 focus-within:ring-2 focus-within:ring-blueborder-blue-300 focus-within:ring-inset ${
                  highlightOnFocus === 'error'
                     ? ' ring-red-500 ring-inset ring-2'
                     : 'border-gray-400'
               } `}
            >
                {iconLeft && <>{iconLeft}</>}
               <fieldset className="flex flex-col gap-0.5 w-full mx-2 border-0">
                  <span className="text-xs font-bold text-gray-700">
                     {label}
                  </span>
                  <div className="flex">
                     <input
                        className="text-sm bg-transparent border-0 w-full p-0 focus:outline-none placeholder:text-gray-400 text-gray-700 "
                        ref={ref}
                        type={type}
                        {...props}
                     />
                  </div>
               </fieldset>
            </div>
            {errorMessage && (
               <div className="pt-0.5 pl-2">
                  <p className="text-xs text-red-500">{errorMessage}</p>
               </div>
            )}
         </div>
      )
   },
)

FormInput.displayName = 'FormInput'