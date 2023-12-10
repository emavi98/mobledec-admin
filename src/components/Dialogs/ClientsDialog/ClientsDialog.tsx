import { useState } from "react";

import Dialog from "../Dialog";
import { ClientModel } from "@/interfaces/general-dto";
import { Input } from "@/components";
import { useAppSelector } from "@/store/hooks";

const ClientsDialog = () => {
  const [clientInfo, setClientInfo] = useState<ClientModel>({});
  const [error, setError] = useState("");
  const clientObject = useAppSelector((state) => state.dialogSliceReducer.data);

  const validEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = ev.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    if (!isValidEmail) {
      setError("El email es invalido");
    } else {
      setError("");
    }
  };

  const assignInfoClient = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    const id = ev.target.dataset.name as string;
    setClientInfo((prevInfo: any) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
    <Dialog textBtn="crear cliente" dialogName="Client">
      <div className="mb-8 border border-slate-400 rounded-md p-4">
        <h2>Datos de cliente</h2>
        <p className="text text-sm">
          Los campos que tengan un * son obligatorios
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <div className="flex gap-4">
            <Input
              label="Nombre"
              id="name"
              dataName="name"
              onChange={assignInfoClient}
              value={clientObject?.first_name}
            />
            <Input
              label="Apellidos"
              id="lastname"
              dataName="last_name"
              onChange={assignInfoClient}
              value={clientObject?.last_name}
            />
          </div>
          <div className="flex gap-4">
            <Input
              label="Email"
              id="email"
              className={`${
                error.includes("email") ? "border border-red-500" : ""
              }`}
              type="email"
              dataName="email"
              error={error.includes("email") ? "email" : ""}
              onBlur={validEmail}
              onChange={assignInfoClient}
              value={clientObject?.email}
            />
            <Input
              label="Contraseña"
              id="password"
              type="password"
              dataName="password"
              onChange={assignInfoClient}
              value={clientObject?.password}
            />
          </div>
          <div className="flex gap-4">
            <Input
              label="Dirección"
              id="direccion"
              dataName="address"
              onChange={assignInfoClient}
              value={clientObject?.address}
            />
            <Input
              label="CP"
              id="cp"
              dataName="cp"
              onChange={assignInfoClient}
              value={clientObject?.cp}
            />
            <Input
              label="Telefono"
              id="phone"
              dataName="phone"
              onChange={assignInfoClient}
              value={clientObject?.phone}
            />
            <Input
              label="DNI/CIF"
              id="DNI"
              dataName="dni"
              onChange={assignInfoClient}
              value={clientObject?.dni}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ClientsDialog;
