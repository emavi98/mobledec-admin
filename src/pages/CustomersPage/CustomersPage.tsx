import { useState, useMemo } from "react";

import { useAppDispatch } from "@/store/hooks";
import { showDialog, setDataDialog } from "@/store/Slices/dialogSlice";

import { Client } from "@/interfaces/table-dto";
import { columnsClient } from "@/domain/data/data-table";
import { Button, InputSH, Table } from "@/components";

import mData from "@/MOCK_DATA.json";
import ClientsDialog from "@/components/Dialogs/ClientsDialog/ClientsDialog";

export const CustomersPage = () => {
  const dispatch = useAppDispatch();
  const [filtering, setFiltering] = useState("");

  const data: Client[] = useMemo(() => {
    return mData.map((item) => ({
      id: item.id,
      order: item.order,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      phone: item.phone,
      dni: item.dni,
      password: item.password,
      address: item.address,
      cp: item.cp,
    }));
  }, [mData]);

  const editRowTable = (id: number) => {
    dispatch(showDialog("Client"));
    const clientObject: Client | undefined = data.find(
      (item) => item.id === id
    );
    if (clientObject) dispatch(setDataDialog(clientObject));
  };

  const removeRowTable = () => {
    console.log("Remove");
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Clientes
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <ClientsDialog />
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
              columns={columnsClient}
              editRowFn={editRowTable}
              removeRowFn={removeRowTable}
            />
          </div>
        </div>
      </main>
    </>
  );
};
