import { useState, useMemo } from "react";

import Table from "@/components/Table/Table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Order } from "@/interfaces/table-dto";
import mData from "@/MOCK_DATA.json";
import { columnsOrder } from "@/services/data/data-table";
import OrderDialog from "@/components/Dialogs/OrderDialog";

export const OrdersPage = () => {
  const [filtering, setFiltering] = useState("");

  const data: Order[] = useMemo(() => mData, []);
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Pedidos
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <OrderDialog />
              <Input
                className="w-[200px]"
                placeholder="Buscar..."
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
              />
            </div>

            <div>
              <Button className="w-[200px]">Imprimir Relación</Button>
            </div>
          </div>
          <div className="my-8">
            <Table
              filtering={filtering}
              setFiltering={setFiltering}
              data={data}
              columns={columnsOrder}
            />
          </div>
        </div>
      </main>
    </>
  );
};
