'use client'
import React from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";


export default function ButtonPay(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return(
    <>
        <div className="mt-8 md:ms-8">
            <Button 
                className="w-full md:w-6/12 text-xl uppercase md:ml-auto block h-14 font-medium text-white"
                color="success"
                size="lg"
                onPress={onOpen}
            >
                Pagar
            </Button>
        </div>
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement='center'
        >
            <ModalContent>
            {(onClose) => (
                <>
                    <ModalBody className="p-16">
                        <svg 
                            x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
                            className="mx-auto"
                        >
                            <path fill="#c8e6c9" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path><polyline fill="none" stroke="#4caf50" strokeMiterlimit="10" strokeWidth="4" points="14,24 21,31 36,16"></polyline>
                        </svg>
                        <h3 className="font-semibold uppercase text-3xl text-center">Pago realizado con exito</h3>
                    </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    </>

    )
}