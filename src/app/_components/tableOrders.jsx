'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Link, Button} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";

const statusColorMap = {
    open: "success",
    close: "danger",
  };

export default function TableOrders({orders}){
    return(
        <div className="rounded-lg bg-[#18181b] p-7 overflow-scroll">
            <Table removeWrapper aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NUMERO DE COMPRA</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>PRECIO</TableColumn>
                    <TableColumn>ESTATUS</TableColumn>
                    <TableColumn>ACCION</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        orders.map( order => (
                            <TableRow key={order.id}>
                                <TableCell className="text-white">#{order.number}</TableCell>
                                <TableCell className="text-white">{order.email}</TableCell>
                                <TableCell className="text-white">${order.totals.total} {order.currency}</TableCell>
                                <TableCell>
                                    <Chip className="uppercase" color={statusColorMap[order.status.status]} size="sm" variant="flat">
                                        {order.status.status}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        href={`/edit/${order.number}`}
                                        as={Link}
                                        color="warning"
                                        variant="solid"
                                        startContent={<EditIcon/>}
                                        size="sm"
                                    >
                                        EDITAR
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    } 
                </TableBody>
            </Table>
        </div>
    )
}