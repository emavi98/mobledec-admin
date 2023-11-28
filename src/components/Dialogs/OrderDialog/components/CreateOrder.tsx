import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { PDFModel, InfoProp } from "@/interfaces/general-dto";
import { Button, InputSH, PDF } from "@/components";

const CreateOrder: React.FC<InfoProp> = ({ orderInfo, setInfo }) => {
  const [checkValue, setCheckValue] = useState(false);
  const sendOption = () => {
    setCheckValue((prevCheck) => !prevCheck);
    setInfo((prevInfo) => ({ ...prevInfo, send: checkValue }));
  };

  const checkInfo = () => {
    if (
      orderInfo &&
      orderInfo.name &&
      orderInfo.name !== "" &&
      orderInfo.last_name &&
      orderInfo.last_name !== "" &&
      orderInfo.email &&
      orderInfo.email !== "" &&
      orderInfo.password &&
      orderInfo.password !== "" &&
      orderInfo.address &&
      orderInfo.address !== "" &&
      orderInfo.cp &&
      orderInfo.cp !== "" &&
      orderInfo.phone &&
      orderInfo.phone !== "" &&
      orderInfo.dni &&
      orderInfo.dni !== "" &&
      orderInfo.products &&
      Array.isArray(orderInfo.products) &&
      orderInfo.products.length !== 0 &&
      orderInfo.shipping_method &&
      orderInfo.shipping_method !== "" &&
      orderInfo.total &&
      orderInfo.total !== 0 &&
      orderInfo.total_shipping &&
      orderInfo.total_shipping !== 0 &&
      orderInfo.payment_method &&
      orderInfo.payment_method !== "" &&
      orderInfo.payment &&
      orderInfo.payment !== 0
    ) {
      return true;
    }
  };
  return (
    <div>
      <div className="mb-8 border border-slate-400 rounded-md p-4">
        <div className="flex justify-center pdf">
          {checkInfo() ? (
            <PDFDownloadLink
              document={<PDF orderInfo={orderInfo as PDFModel} />}
            >
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
            <PDFDownloadLink
              document={<PDF orderInfo={orderInfo as PDFModel} />}
            >
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
          <InputSH
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
