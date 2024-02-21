import { FetchOrders } from "@/app/_components/fetchOrders"
import SeccionEdit from "@/app/_components/edit/seccionEdit"
import ButtonPay from "@/app/_components/edit/buttonPay"


export default async function EditOrder({params}){
    const {orders} = await FetchOrders()
    return(
        <main className="flex items-center justify-center min-w-full min-h-screen">
            <div className="container mx-auto md:max-w-5xl px-8">
                <h2 className="text-white text-center uppercase text-3xl font-semibold mb-9">Orden de compra: # {params.order}</h2>
                <SeccionEdit orders={orders} numero={params.order} />
                <ButtonPay />
            </div>
        </main>
    )
}