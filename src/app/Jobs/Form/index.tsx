"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { unmaskNumber } from "@/app/functions/unmaskNumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { phoneMask } from "@/app/functions/phoneMask";
import { Button } from "@/app/components/Button";
import { FileInput } from "./Input/FileInput";
import { Modal } from "@/app/components/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Form() {
    const [value, setValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const MAX_FILE_SIZE = 2000000;
    const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const router = useRouter()

    const formSchema = z.object({
        fullName: z.string().min(3, { message: "Coloque seu nome" }),
        phoneNumber: z
            .string()
            .length(11, { message: "Telefone inválido" })
            .transform((phoneNumber) => unmaskNumber(phoneNumber)),
        email: z.string().email({ message: 'Coloque um email verdadeiro' }).optional().or(z.literal('')),
        additionalMessage: z.string().max(150, { message: 'máximo de 150 letras' }),
        curriculo: z
            .any()
            .refine((files) => files?.length == 1, "Nenhum currículo adicionado.")
            .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Tamanho máximo do arquivo: 20MB.`)
            .refine(
                (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
                "Formato do arquivo não suportado, insira um PDF, imagem, ou Word."
            ),

    });

    type FormSchema = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        reset,


        formState: { errors, isSubmitting },

    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),

    });

    async function handleSendCurriculo(data: FormSchema) {
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("email", data.email || "");
        formData.append("additionalMessage", data.additionalMessage);
        formData.append("curriculo", data.curriculo[0]); // arquivo PDF

        try {
            const response = await fetch("http://localhost:3002/send-curriculo", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            console.log("Success:", result);
            reset()
            router.push('/Jobs/submited')
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function openModal() {
        setModalIsOpen(true)
    }

    return (
        <div className="max-w-96 ">
            <form
                onSubmit={handleSubmit(handleSendCurriculo)}
                className="flex w-full flex-col items-start justify-center gap-4 p-1"
            >
                <Input
                    maxLength={60}
                    label="Nome:"
                    placeholder="João José"
                    {...register("fullName")}
                    barSize="full"
                    errorMessage={errors.fullName?.message}
                />
                <Input
                    maxLength={60}
                    label="Email:"
                    placeholder="Caso não possua, deixe em branco"
                    {...register("email")}
                    barSize="full"
                    errorMessage={errors.email?.message}
                />

                <Input
                    maxLength={15}
                    label="Celular:"
                    placeholder="(99) 99999-9999"
                    barSize="full"
                    errorMessage={errors.phoneNumber?.message}
                    {...register("phoneNumber", {
                        setValueAs: (value) => {
                            return unmaskNumber(value);
                        },
                        onChange: (event) => {
                            event.target.value = phoneMask(event.target.value);
                        },
                    })}
                />

                <FileInput
                    label="Currículo:"
                    barSize="full"
                    errorMessage={errors.curriculo?.message?.toString()}
                    {...register("curriculo")}
                />
                <div className="relative w-full">
                    <textarea
                        placeholder={`Ex: Sou filho de Beto, conversei com Diarley ontem no posto de gasolina`}

                        id="addtionalMessage"
                        className="w-full px-4 h-32 resize-none py-9 "
                        {...register('additionalMessage')}
                    >
                    </textarea>
                    <p className="absolute top-3 left-4 font-bold text-xs text-black">Informações úteis:</p>
                </div>

                {/*  <div className="relative w-full max-w-md">
                    <textarea
                        {...register("additionalMessage")}
                        className={`w-full p-4 text-base text-gray-900 border rounded-md focus:ring-2  focus:border-transparent resize-none min-h-[100px] py-8
                             ${isFocused || value
                                ? 'top-1'
                                : 'top-3'
                            } 
                            `}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Suas qualidades, possíveis indicações, área que deseja atuar, etc"
                        id="textArea"

                    />
                    <label
                        htmlFor="textArea"
                        className={`top-3 absolute left-3 transition-all duration-200 pointer-events-none font-bold text-gray-700 text-xs`}
                    >
                        Fale mais sobre você:
                    </label>
                </div> */}

                <Button type="submit" disabled={isSubmitting} className={` hover:bg-green-600 text-white font-b ${isSubmitting ? 'bg-yellow-600' : 'bg-green-700'} transition-colors ease-in duration-200`}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
            </form>

        </div>
    );
}


