'use client'
import React, {useState,useEffect} from "react"
import {Input, Button} from "@nextui-org/react";
import AddAlert from "./addAlert"


export default function FormOrder({listOrder, setlistOrder}){

    const [active, setActive] = React.useState(false);
    const [sku, setSku] = React.useState("");
    const [skuisInvalid, setskuisInvalid] = React.useState(false);
    const [nombre, setNombre] = React.useState("");
    const [nombreisInvalid, setNombreisInvalid] = React.useState(false);
    const [cantidad, setCantidad] = React.useState("");
    const [cantidadisInvalid, setCantidadisInvalid] = React.useState(false);
    const [precio, setPrecio] = React.useState("");
    const [precioisInvalid, setPrecioisInvalid] = React.useState(false);

    useEffect(() => {
        setskuisInvalid(sku === undefined || sku.trim() === '');
    }, [sku]);

    useEffect(() => {
        setNombreisInvalid(nombre === undefined || nombre.trim() === '');
    }, [nombre]);

    useEffect(() => {
        setCantidadisInvalid(cantidad === undefined || cantidad.trim() === '');
    }, [cantidad]);

    useEffect(() => {
        setPrecioisInvalid(precio === undefined || precio.trim() === '');
    }, [precio]);

    const newList = {
        sku,
        nombre,
        cantidad,
        precio
    }

    const addProduct = () => {
        if( !skuisInvalid && !nombreisInvalid && !cantidadisInvalid && !precioisInvalid){
            setlistOrder([...listOrder ,newList])
            setSku('')
            setNombre('')
            setCantidad('')
            setPrecio('')
            setActive(true)
            setTimeout(() => {setActive(false);}, 3000);
        }
    }

    return(
        <div className="rounded-lg bg-[#18181b] p-7 overflow-scroll">
            <h3 className="text-center text-white uppercase mb-4 font-semibold text-xl">Agregar producto</h3>
            <div className="flex flex-col">
                <Input
                    isRequired
                    type="number"
                    label="SKU"
                    value={sku}
                    onValueChange={setSku}
                    errorMessage={!skuisInvalid ? "" : "*Sku obligatorio"}
                    className="max-w-full mb-2"
                />
                <Input
                    isRequired
                    type="text"
                    label="Nombre"
                    value={nombre}
                    onValueChange={setNombre}
                    errorMessage={!nombreisInvalid ? "" : "*Nombre obligatorio"}
                    className="max-w-full mb-2"
                />
                <Input
                    isRequired
                    type="number"
                    label="Cantidad"
                    value={cantidad}
                    onValueChange={setCantidad}
                    errorMessage={!cantidadisInvalid ? "" : "*Cantidad obligatorio"}
                    className="max-w-full mb-2"
                />
                <Input
                    isRequired
                    type="number"
                    label="Precio"
                    value={precio}
                    onValueChange={setPrecio}
                    errorMessage={!precioisInvalid ? "" : "*Precio obligatorio"}
                    className="max-w-full mb-2"
                />
                <Button className="mb-5 h-14" color="primary" onPress={addProduct}>
                    Agregar Producto
                </Button>
                <div className={`transition-all overflow-hidden ${active ? 'h-16' : 'h-0'}`}>
                    <AddAlert />
                </div>
                
            </div>
        </div>
    )
}