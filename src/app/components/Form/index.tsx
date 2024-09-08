'use client'

import React, { ComponentProps, ElementType } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CheckBox } from './Checkbox'
import { FormInput } from './FormInput'
import { phoneMask } from '@/app/functions/phoneMask'
import { unmaskNumber } from '@/app/functions/unmaskNumber'


const websiteFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'O nome deve possuir no mínimo 3 letras' }),
    email: z
        .string()
        .email({ message: 'O email inserido não é válido' })
        .transform((email) => email.toLowerCase()),
    privacyPolicy: z.boolean().refine((value) => value === true, {
        message: 'Você deve aceitar a política de privacidade',
    }),
    phoneNumber: z
        .string()
        .length(11, { message: 'Telefone inválido' })
        .transform((phoneNumber) => {
            return unmaskNumber(phoneNumber)
        }),
    acceptEmails: z.boolean().optional(),
    acceptWhatsApp: z.boolean().optional(),
})

type WebsiteFormSchema = z.infer<typeof websiteFormSchema>

interface FormProps extends ComponentProps<typeof FormInput> {
    as?: ElementType
}

export function Form({ type }: FormProps) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<WebsiteFormSchema>({
        resolver: zodResolver(websiteFormSchema),
    })

    const handleMaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const phoneMask = /(\d{2})(\d{5})(\d{4})/;
        const maskedValue = value.replace(phoneMask, '($1) $2-$3');

        event.target.value = maskedValue;
    };

    const sendFormData = (data: WebsiteFormSchema) => {
        console.log('Enviar formulario ', data)
        reset()
    }

    return (
        <form
            style={{ margin: 'fit-content' }}
            className="text-white tracking-wider mx-auto flex flex-col gap-4 items-start justify-center border-2 border-solid border-gray-400 max-w-[40rem] p-6  rounded-lg"
            onSubmit={handleSubmit(sendFormData)}
        >
            <h2 id="FormTitle" className='self-center text-xl text-[#243a69] font-bold'>
                Venha fazer parte da mudança!!
            </h2>

            <FormInput
                highlightOnFocus={!errors?.name ? 'blue' : 'error'}
                label="Nome e Sobrenome"
                id="form-name"
                placeholder="Como você se chama?"
                type="text"
                {...register('name')}
                errorMessage={errors.name?.message}
            />
            <FormInput
                highlightOnFocus={!errors?.name ? 'blue' : 'error'}
                label="Email"
                id="form-email"
                placeholder="email@gmail.com"
                type="email"
                {...register('email')}
                errorMessage={errors.email?.message}
            />
            <FormInput

                placeholder="(00) 00000-0000"
                label="Celular"
                type="text"
                {...register('phoneNumber', {
                    setValueAs: (value) => {
                        return unmaskNumber(value)
                    },
                    onChange: (event) => {
                        event.target.value = phoneMask(event.target.value)
                    },
                })}
                errorMessage={errors.phoneNumber?.message}

            />

            <CheckBox
                id="form-allow-notifications-emails"
                {...register('acceptEmails')}
            >
                Receba notificações por E-mail
            </CheckBox>
            <CheckBox
                id="form-allow-notifications-whatsApp"
                {...register('acceptWhatsApp')}
            >
                Receba notificações por WhatsApp
            </CheckBox>

            <button
                className='bg-[#243a69] text-white py-2 px-4 rounded-md hover:bg-[#5b88a5] transition-colors'
                type="submit"
                name="Botao submeter o formulário"
                id="form-button-submit-form"
            >
                Enviar
            </button>
        </form>
    )
}

/* 'use client';
import React, { ComponentProps, ElementType } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputMask from 'react-input-mask';
import { CheckBox } from './Checkbox';
import { FormInput } from './FormInput';
import { Button } from '../Button';

const websiteFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'O nome deve possuir no mínimo 3 letras' }),
    email: z
        .string()
        .email({ message: 'O email inserido não é válido' })
        .transform((email) => email.toLowerCase()),
    privacyPolicy: z.boolean().refine((value) => value === true, {
        message: 'Você deve aceitar a política de privacidade',
    }),
    celular: z
        .string()
        .min(11, { message: 'Digite um número válido' })
        .max(14, { message: 'Digite um número válido' })
        .transform((whatsApp) => whatsApp.replace(/\D/g, '')),
    acceptEmails: z.boolean().optional(),
    acceptWhatsApp: z.boolean().optional(),
});

type WebsiteFormSchema = z.infer<typeof websiteFormSchema>;

interface FormProps extends ComponentProps<typeof FormInput> {
    as?: ElementType;
}

export function Form({ type }: FormProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<WebsiteFormSchema>({
        resolver: zodResolver(websiteFormSchema),
    });

    const sendFormData = (data: WebsiteFormSchema) => {
        console.log('Enviar formulario ', data);
        reset();
    };

    return (
        <form
            style={{ margin: 'fit-content' }}
            className="flex flex-col gap-4 items-start justify-center border-2 border-solid border-backgroundgray max-w-[40rem] p-4 rounded-lg"
            onSubmit={handleSubmit(sendFormData)}
        >
            <h2 id="FormTitle">
                {type === 'beta' ? 'Preencha o formulário abaixo' : 'Como podemos ajudar?'}
            </h2>
            <FormInput
                highlightOnFocus={!errors?.name ? 'blue' : 'error'}
                label="Nome e Sobrenome"
                id="form-name"
                placeholder="Como você se chama?"
                type="text"
                {...register('name')}
                errorMessage={errors.name?.message}
            />
            <FormInput
                highlightOnFocus={!errors?.name ? 'blue' : 'error'}
                label="Email"
                id="form-email"
                placeholder="email@gmail.com"
                type="email"
                {...register('email')}
                errorMessage={errors.email?.message}
            />
            <InputMask
                mask="(99) 99999-9999"
                {...register('celular')}
                onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, '');
                    e.target.value = rawValue;
                }}
            >
               {()=> (
                 <FormInput
                 highlightOnFocus={!errors?.name ? 'blue' : 'error'}
                 label="Email"
                 id="form-email"
                 placeholder="email@gmail.com"
                 type="email"
                 {...register('email')}
                 errorMessage={errors.email?.message}
             />
               )}
                
               
            </InputMask>
            <CheckBox id="form-allow-notifications-emails" {...register('acceptEmails')}>
                Receba notificações por E-mail
            </CheckBox>
            <CheckBox id="form-allow-notifications-whatsApp" {...register('acceptWhatsApp')}>
                Receba notificações por whatsApp
            </CheckBox>
            <Button type="submit" name="Botao submeter o formulário" id="form-button-submit-form">
                Enviar
            </Button>
        </form>
    );
}
 */