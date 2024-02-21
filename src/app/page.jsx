import TableOrders from "./_components/tableOrders";
import { FetchOrders } from "./_components/fetchOrders";

export default async function Home() {
  const {orders} = await FetchOrders()
  return (
    <main className="flex items-center justify-center min-w-full min-h-screen">
      <div className="container mx-auto md:max-w-5xl px-8">
        <h2 className="text-white text-center uppercase text-3xl font-semibold mb-9">Ordenes de compra</h2>
        <TableOrders orders={orders} />
      </div>
    </main>
  );
}
