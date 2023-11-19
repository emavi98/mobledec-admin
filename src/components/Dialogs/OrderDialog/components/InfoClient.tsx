import React, { useState } from "react";

import { InfoProp } from "@/interfaces/general-dto";
import Input from "@/components/Inputs/Input";

const InfoClient: React.FC<InfoProp> = ({ setInfo }) => {
  const [error, setError] = useState("");

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
    setInfo((prevInfo: any) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
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
          />
          <Input
            label="Apellidos"
            id="lastname"
            dataName="last_name"
            onChange={assignInfoClient}
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
          />
          <Input
            label="Contraseña"
            id="password"
            type="password"
            dataName="password"
            onChange={assignInfoClient}
          />
        </div>
        <div className="flex gap-4">
          <Input
            label="Dirección"
            id="direccion"
            dataName="address"
            onChange={assignInfoClient}
          />
          <Input label="CP" id="cp" dataName="cp" onChange={assignInfoClient} />
          <Input
            label="Telefono"
            id="phone"
            dataName="phone"
            onChange={assignInfoClient}
          />
          <Input
            label="DNI/CIF"
            id="DNI"
            dataName="dni"
            onChange={assignInfoClient}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoClient;
