import { useState } from "react";
import {
  Select as SelectSH,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatPrice } from "@/lib/utils";
import { InfoProp } from "@/interfaces/general-dto";
import { Input } from "@/components/ui/input";

const InfoPrice: React.FC<InfoProp> = ({ info, setInfo }) => {
  const [paymentValue, setPaymentValue] = useState(0);

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

  const setNote = (ev: React.ChangeEvent<HTMLInputElement>) => {
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
            <SelectValue placeholder="Efectivo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="efectivo">Efectivo</SelectItem>
            <SelectItem value="bizum">Bizum</SelectItem>
            <SelectItem value="tarjeta">Tarjeta</SelectItem>
            <SelectItem value="financiacion">Financiación</SelectItem>
            <SelectItem value="transferencia">Transferencia</SelectItem>
          </SelectContent>
        </SelectSH>
        <Input placeholder="400€" onBlur={assignPayment} />
      </div>
      <div className="flex mt-3 items-center gap-4">
        {info && info.pending_payment ? (
          <p className="text-sm block">
            Pendiente por pagar{" "}
            <strong>{formatPrice(+info.pending_payment)}</strong>
          </p>
        ) : null}
        <Input
          placeholder="100€ cada mes"
          className="max-w-[200px]"
          onBlur={setInstallment}
        />
      </div>
      <div>
        <label htmlFor="note" className="text-sm mt-2">
          Nota
        </label>
        <Input id="note" onBlur={setNote} />
      </div>
    </div>
  );
};

export default InfoPrice;
