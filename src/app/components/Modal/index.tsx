"use client";

import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={onClose}
                />
                <Dialog.Content
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    onInteractOutside={onClose}
                    onPointerDownOutside={onClose}
                >
                    <div className="relative bg-[#5b88a5] sm:bg-[#243a69] pt-4 rounded-lg shadow-lg w-full h-[70vh] overflow-hidden">
                        <Dialog.Close asChild>
                            <button
                                onClick={onClose}
                                className="text-[#FFF] hover:bg-[#5b88a5] absolute  top-1 sm:top-[20px] right-2 sm:right-[40px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full border-0 focus:outline-none p-4"
                            >
                                <h1 className='text-2xl'>X</h1>
                            </button>
                        </Dialog.Close>
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
