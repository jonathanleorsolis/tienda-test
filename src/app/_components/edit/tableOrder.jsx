'use client'
import React, {useState, useEffect} from "react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function TableOrder({orders,numero,listOrder}){
    const order = orders.find(order => order.number === numero);
    if (order) {
        return (
            <div className="rounded-lg bg-[#18181b] p-7 overflow-scroll">
                <h3 className="text-center text-white uppercase mb-4 font-semibold text-xl">Lista de productos</h3>
                <Table 
                    isStriped 
                    id="tableOrder"
                    aria-label="Tabla de lista de productos"
                    classNames={{
                        row: "text-gray-950",
                        gridcell: "text-gray-950",
                      }}
                >
                    <TableHeader>
                        <TableColumn>SKU</TableColumn>
                        <TableColumn>NOMBRE</TableColumn>
                        <TableColumn>CANTIDAD</TableColumn>
                        <TableColumn>PRECIO</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            order.items.map( item => (
                                <TableRow key={parseInt(Math.floor())}>
                                    <TableCell>{item.sku}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                </TableRow>
                            ))
                        }
                        {
                            listOrder.map( item => (
                                <TableRow key={Math.random()}>
                                    <TableCell>{item.sku}</TableCell>
                                    <TableCell>{item.nombre}</TableCell>
                                    <TableCell>{item.cantidad}</TableCell>
                                    <TableCell>{item.precio}</TableCell>
                                </TableRow>
                            ))
                        } 
                    </TableBody>
                </Table>
            </div>
        );
    } else {
        return null;
    }
}