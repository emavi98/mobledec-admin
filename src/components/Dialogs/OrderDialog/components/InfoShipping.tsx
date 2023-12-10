import { useState } from "react";
import { useAppSelector } from "@/store/hooks";

import { InfoProp } from "@/interfaces/general-dto";
import { formatPrice } from "@/lib/utils";

import {
  SelectSH,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  InputSH,
  Textarea,
} from "@/components";

const InfoShipping: React.FC<InfoProp> = ({ orderInfo, setInfo }) => {
  const [priceShipping, setPriceShipping] = useState(0);
  const orderObject = useAppSelector((state) => state.dialogSliceReducer.data);

  const assignShippingMethod = (value: string) => {
    setInfo((prevInfo) => ({ ...prevInfo, shipping_method: value }));
  };

  const assignShippingDescription = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = ev.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, description_shipping: value }));
  };

  const assignShippingCost = () => {
    if (priceShipping && orderInfo && orderInfo.total) {
      const newTotal = +orderInfo.total + priceShipping;
      setInfo((prevInfo) => ({
        ...prevInfo,
        total_shipping: newTotal,
        shipping_cost: priceShipping,
      }));
    }
  };

  const priceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceShipping(+e.target.value);
  };

  return (
    <div className="mb-8">
      <h2>Logistica*</h2>
      <div className="flex gap-4">
        <SelectSH onValueChange={assignShippingMethod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={orderObject?.shipping_method || "opciones"}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="transporte-montaje">
              Transporte y Montaje
            </SelectItem>
            <SelectItem value="transporte-recogida">
              Transporte y Recogida cliente
            </SelectItem>
            <SelectItem value="transporte">Transporte</SelectItem>
            <SelectItem value="recogida">Recogida en tienda</SelectItem>
            <SelectItem value="retirada">Retirada</SelectItem>
          </SelectContent>
        </SelectSH>
        <InputSH
          type="number"
          placeholder="Precio Manualmente"
          onChange={priceInputChange}
          onBlur={assignShippingCost}
          value={orderObject?.shipping_cost}
        />
      </div>
      <div className="my-4">
        <Textarea
          placeholder="2 colchones"
          onBlur={assignShippingDescription}
          value={orderObject?.description_shipping}
          className="min-h-[75px]"
        />
      </div>
      <p className="text-sm">
        Total de la operación:{" "}
        {orderInfo && orderInfo.total_shipping && (
          <strong>{formatPrice(+orderInfo.total_shipping)}</strong>
        )}
      </p>
    </div>
  );
};

export default InfoShipping;
