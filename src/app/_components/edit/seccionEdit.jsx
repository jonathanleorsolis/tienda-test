'use client'
import React, {useState, useEffect} from "react"
import TableOrder from "./tableOrder"
import FormOrder from "./formOrder"

export default function SeccionEdit({orders,numero}){
    const [listOrder, setlistOrder] = useState([])
    return(
        <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 max-md:pb-6">
                <TableOrder orders={orders} numero={numero} listOrder={listOrder} />
            </div>
            <div className="w-full md:w-6/12 md:pl-6">
                <FormOrder listOrder={listOrder} setlistOrder={setlistOrder} />
            </div>
        </div>
    )
}