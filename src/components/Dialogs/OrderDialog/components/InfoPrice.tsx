import { useState } from "react";
import { useAppSelector } from "@/store/hooks";

import { formatPrice } from "@/lib/utils";
import { InfoProp } from "@/interfaces/general-dto";

import {
  SelectSH,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  InputSH,
  Textarea,
} from "@/components";

const InfoPrice: React.FC<InfoProp> = ({ orderInfo, setInfo }) => {
  const [paymentValue, setPaymentValue] = useState(0);
  const orderObject = useAppSelector((state) => state.dialogSliceReducer.data);

  const assignPaymentMethod = (value: string) => {
    setInfo((prevInfo) => ({ ...prevInfo, payment_method: value }));
  };

  const assignPayment = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = +ev.target.value;
    setInfo((prevInfo) => {
      if (prevInfo.total_shipping && value) {
        return {
          ...prevInfo,
          payment: value,
          pending_payment: +prevInfo.total_shipping - value,
        };
      }
      return prevInfo;
    });
    setPaymentValue(paymentValue);
  };

  const setInstallment = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = +ev.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, installment: value }));
  };

  const setNote = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = ev.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, note: value }));
  };

  return (
    <div className="mb-8">
      <div>
        <h2>Forma de pago*</h2>
      </div>
      <div className="flex gap-4">
        <SelectSH onValueChange={assignPaymentMethod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={orderObject?.payment_method || "Efectivo"}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="efectivo">Efectivo</SelectItem>
            <SelectItem value="bizum">Bizum</SelectItem>
            <SelectItem value="tarjeta">Tarjeta</SelectItem>
            <SelectItem value="financiacion">Financiación</SelectItem>
            <SelectItem value="transferencia">Transferencia</SelectItem>
          </SelectContent>
        </SelectSH>
        <InputSH
          placeholder="400€"
          onBlur={assignPayment}
          value={orderObject?.payment}
        />
      </div>
      <div className="flex mt-3 items-center gap-4">
        {orderInfo && orderInfo.pending_payment ? (
          <p className="text-sm block">
            Pendiente por pagar{" "}
            <strong>{formatPrice(+orderInfo.pending_payment)}</strong>
          </p>
        ) : null}
        <InputSH
          placeholder="100€ cada mes"
          className="max-w-[200px]"
          onBlur={setInstallment}
          value={orderObject?.installment}
        />
      </div>
      <div>
        <label htmlFor="note" className="text-sm mt-2">
          Nota
        </label>
        <Textarea id="note" onBlur={setNote} value={orderObject?.note} />
      </div>
    </div>
  );
};

export default InfoPrice;
