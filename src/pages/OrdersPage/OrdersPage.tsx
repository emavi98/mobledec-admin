import { useState, useMemo } from "react";

import { useAppDispatch } from "@/store/hooks";
import { showDialog } from "@/store/Slices/dialogSlice";

import { Order } from "@/interfaces/table-dto";
import { columnsOrder } from "@/domain/data/data-table";
import { Button, InputSH, Table, OrderDialog } from "@/components";

import mData from "@/MOCK_DATA.json";

export const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const [filtering, setFiltering] = useState("");

  const data: Order[] = useMemo(() => mData, []);

  const editRowTable = () => {
    dispatch(showDialog("Order"));
  };

  const removeRowTable = () => {
    console.log("Remove");
  };

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
              <InputSH
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
              editRowFn={editRowTable}
              removeRowFn={removeRowTable}
            />
          </div>
        </div>
      </main>
    </>
  );
};
