import { useEffect, useState } from "react";
import { OrderModel } from "@/interfaces/general-dto";

import Dialog from "../Dialog";
import InfoClient from "./components/InfoClient";
import InfoOrder from "./components/InfoOrder";
import InfoShipping from "./components/InfoShipping";
import InfoPrice from "./components/InfoPrice";
import CreateOrder from "./components/CreateOrder";

const OrderDialog = () => {
  const [orderInfo, setOrderInfo] = useState<OrderModel>({
    total: 0,
  });

  useEffect(() => {
    setOrderInfo({ total: 0 });
  }, []);

  return (
    <Dialog textBtn="crear pedido">
      <div>
        <InfoClient setInfo={setOrderInfo} />
        <InfoOrder orderInfo={orderInfo} setInfo={setOrderInfo} />
        <InfoShipping orderInfo={orderInfo} setInfo={setOrderInfo} />
        <InfoPrice orderInfo={orderInfo} setInfo={setOrderInfo} />
        <CreateOrder orderInfo={orderInfo} setInfo={setOrderInfo} />
      </div>
    </Dialog>
  );
};

export default OrderDialog;
