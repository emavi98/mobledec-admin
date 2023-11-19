import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { PDFModel, InfoProp } from "@/interfaces/general-dto";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PDF from "@/components/Atomic/PDF";

const CreateOrder: React.FC<InfoProp> = ({ info, setInfo }) => {
  const [checkValue, setCheckValue] = useState(false);
  const sendOption = () => {
    setCheckValue((prevCheck) => !prevCheck);
    setInfo((prevInfo) => ({ ...prevInfo, send: checkValue }));
  };

  const checkInfo = () => {
    if (
      info &&
      info.name &&
      info.name !== "" &&
      info.last_name &&
      info.last_name !== "" &&
      info.email &&
      info.email !== "" &&
      info.password &&
      info.password !== "" &&
      info.address &&
      info.address !== "" &&
      info.cp &&
      info.cp !== "" &&
      info.phone &&
      info.phone !== "" &&
      info.dni &&
      info.dni !== "" &&
      info.products &&
      Array.isArray(info.products) &&
      info.products.length !== 0 &&
      info.shipping_method &&
      info.shipping_method !== "" &&
      info.total &&
      info.total !== 0 &&
      info.total_shipping &&
      info.total_shipping !== 0 &&
      info.payment_method &&
      info.payment_method !== "" &&
      info.payment &&
      info.payment !== 0
    ) {
      return true;
    }
  };
  return (
    <div>
      <div className="mb-8 border border-slate-400 rounded-md p-4">
        <div className="flex justify-center pdf">
          {checkInfo() ? (
            <PDFDownloadLink document={<PDF info={info as PDFModel} />}>
              {({ loading }) =>
                loading ? (
                  <button>Loading document...</button>
                ) : (
                  <Button className="w-[75%] m-auto">Crear presupuesto</Button>
                )
              }
            </PDFDownloadLink>
          ) : (
            <p className="text text-lg font-bold">
              Falta información para crear la orden.
            </p>
          )}
          {checkInfo() && (
            <PDFDownloadLink document={<PDF info={info as PDFModel} />}>
              {({ loading }) =>
                loading ? (
                  <button>Loading document...</button>
                ) : (
                  <Button className="w-[75%] m-auto">Crear pedido</Button>
                )
              }
            </PDFDownloadLink>
          )}
        </div>
        <div className="flex items-center my-8 mx-8 gap-4">
          <Input
            type="checkbox"
            className="w-[40px] cursor-pointer"
            onChange={sendOption}
          />
          <label className="text-xl">
            Enviar automaticamente por email y por whatsapp
          </label>
        </div>
      </div>
      <div className="border border-slate-400 rounded-md p-4">
        <p>Se ha detectado x productos asociados a x proveedores.</p>
      </div>
    </div>
  );
};

export default CreateOrder;
