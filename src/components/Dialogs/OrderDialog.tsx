import Dialog from "./Dialog";
import UpDialog from "./UpDialog";
import { Input } from "@/components/ui/input";
import Select, { SingleValue } from "react-select";
import {
  Select as SelectSH,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import productD from "@/MOCK_DATA_PRODUCTS.json";
import { OrderModel, PDFModel, Product } from "@/interfaces/general-dto";
import Table from "../Table/Table";
import { columnsProduct } from "@/services/data/data-table";
import { formatPrice } from "@/lib/utils";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../Atomic/PDF";

type InfoProp = {
  info?: OrderModel;
  setInfo: React.Dispatch<React.SetStateAction<OrderModel>>;
};

const InfoClient: React.FC<InfoProp> = ({ setInfo }) => {
  const [error, setError] = useState("");
  const handleEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = ev.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    if (!isValidEmail) {
      setError("El email es invalido");
    } else {
      setError("");
    }
  };

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
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
          <div className="w-full">
            <label htmlFor="name">Nombre*</label>
            <Input
              id="name"
              className="outline-none focus-visible:ring-offset-0"
              data-name="name"
              onChange={handleInput}
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastname">Apellidos*</label>
            <Input
              id="lastname"
              className="outline-0 focus-visible:ring-offset-0"
              data-name="last_name"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="email">Email*</label>
            <Input
              id="email"
              className={`outline-0 focus-visible:ring-offset-0 ${
                error.includes("email") ? "border border-red-500" : ""
              }`}
              type="email"
              data-name="email"
              onBlur={handleEmail}
              onChange={handleInput}
            />
            {error.includes("email") && <p className="text-red-500">{error}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="password">Contraseña*</label>
            <Input
              id="password"
              className="outline-0 focus-visible:ring-offset-0"
              type="password"
              data-name="password"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="direccion">Dirección*</label>
            <Input
              id="direccion"
              className="outline-0 focus-visible:ring-offset-0"
              data-name="address"
              onChange={handleInput}
            />
          </div>
          <div className="w-full">
            <label htmlFor="cp">CP*</label>
            <Input
              id="cp"
              className="outline-0 focus-visible:ring-offset-0"
              data-name="cp"
              onChange={handleInput}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Telefono*</label>
            <Input
              id="phone"
              className="outline-0 focus-visible:ring-offset-0"
              data-name="phone"
              onChange={handleInput}
            />
          </div>
          <div className="w-full">
            <label htmlFor="DNI">DNI/CIF*</label>
            <Input
              id="DNI"
              className="outline-0 focus-visible:ring-offset-0"
              data-name="dni"
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoOrder: React.FC<InfoProp> = ({ setInfo }) => {
  const productData = productD.map((item) => ({
    value: item.product_name,
    label: item.product_name,
  }));

  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);
  const [showProduct, setShowProduct] = useState(false);
  const [priceProduct, setPriceProduct] = useState(0);

  const declareProduct = (product: Product) => {
    setShowProduct(true);
    setProduct(product);
    setPriceProduct(product.cost);
  };

  const handleProduct = (
    newValue: SingleValue<{ value: string; label: string }> | null
  ) => {
    if (newValue) {
      const selectedValue = newValue.value;
      const [productFiltered] = productD.filter(
        (item) => item.product_name === selectedValue
      );

      declareProduct(productFiltered);
    }
  };

  const editProduct = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    const productId = ev.currentTarget.getAttribute("data-id");
    if (productId) {
      const productSelected = products.find((item) => item.sku === +productId);
      declareProduct(productSelected as Product);
    }
  };

  const eliminateProduct = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    const productId = ev.currentTarget.getAttribute("data-id");
    if (productId) {
      const filteredProducts = products.filter(
        (item) => item.sku !== +productId
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    const total = products.reduce(
      (acc: number, cur: Product) => cur.subTotal! + acc,
      0
    );
    setInfo((prevInfo) => ({ ...prevInfo, total, products }));
  }, [products]);

  return (
    <>
      <div
        className={`mb-8 border border-slate-400 rounded-md p-4 relative ${
          showProduct && "min-h-[500px]"
        }`}
      >
        {showProduct && (
          <UpDialog
            onShow={setShowProduct}
            product={product as Product}
            products={products}
            price={priceProduct}
            setProducts={setProducts}
          />
        )}
        <h2>Datos de pedido*</h2>
        <div className="mt-8">
          <Select
            name="colors"
            options={productData}
            className="basic-multi-select"
            classNamePrefix="Busca..."
            onChange={handleProduct}
          />
        </div>
        {products.length > 0 && (
          <div id="results" className="mt-4 flex flex-col gap-2">
            <Table
              className={{
                table:
                  "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
                thead:
                  "text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400",
                th: "px-6 py-3",
                tr: "cursor-default",
                td: "px-6 py-4",
              }}
              data={products}
              columns={columnsProduct}
              thRow={["cantidad", "subtotal", "pedido", "stock", "acciones"]}
            >
              <React.Fragment key={product?.sku}>
                <td className="px-6 py-4">{product?.quantity}</td>
                <td className="px-6 py-4">{product?.subTotal}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <Input type="checkbox" id="pedido" className="w-[20px]" />
                    <label htmlFor="pedido">Hacer pedido?</label>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <Input type="checkbox" id="pedido" className="w-[20px]" />
                    <label htmlFor="pedido">Rebajar Stock?</label>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <p
                      className="text-blue-600 cursor-pointer"
                      onClick={editProduct}
                      data-id={product?.sku}
                    >
                      Editar
                    </p>
                    <p
                      className="text-red-600 cursor-pointer"
                      onClick={eliminateProduct}
                      data-id={product?.sku}
                    >
                      Eliminar
                    </p>
                  </div>
                </td>
              </React.Fragment>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

const ShippingLogic: React.FC<InfoProp> = ({ info, setInfo }) => {
  const [priceShipping, setPriceShipping] = useState(0);

  const shippingMethodHandler = (value: string) => {
    setInfo((prevInfo) => ({ ...prevInfo, shipping_method: value }));
  };

  const descriptionHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, description_shipping: value }));
  };

  const priceHandler = () => {
    if (priceShipping && info && info.total) {
      const newTotal = +info.total + priceShipping;
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
        <SelectSH onValueChange={shippingMethodHandler}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Opciones" />
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
        <Input
          type="number"
          placeholder="Precio Manualmente"
          onChange={priceInputChange}
          onBlur={priceHandler}
        />
      </div>
      <div className="my-4">
        <Input
          placeholder="2 colchones"
          className="min-h-[75px]"
          onBlur={descriptionHandler}
        />
      </div>
      <p className="text-sm">
        Total de la operación:{" "}
        {info && info.total_shipping && (
          <strong>{formatPrice(+info.total_shipping)}</strong>
        )}
      </p>
    </div>
  );
};

const PriceOptions = ({
  info,
  setInfo,
}: {
  info: OrderModel;
  setInfo: React.Dispatch<React.SetStateAction<OrderModel>>;
}) => {
  const [paymentValue, setPaymentValue] = useState(0);

  const paymentMethodHandler = (value: string) => {
    setInfo((prevInfo) => ({ ...prevInfo, payment_method: value }));
  };

  const paymentHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = +ev.target.value;
    if (info.total_shipping && value <= +info.total_shipping) {
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
    }
  };

  const installmentHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, installment: value }));
  };

  const additionalHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setInfo((prevInfo) => ({ ...prevInfo, note: value }));
  };

  return (
    <div className="mb-8">
      <div>
        <h2>Forma de pago*</h2>
      </div>
      <div className="flex gap-4">
        <SelectSH onValueChange={paymentMethodHandler}>
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
        <Input placeholder="400€" onBlur={paymentHandler} />
      </div>
      <div className="flex mt-3 items-center gap-4">
        {info.pending_payment ? (
          <p className="text-sm block">
            Pendiente por pagar{" "}
            <strong>{formatPrice(+info.pending_payment)}</strong>
          </p>
        ) : null}
        <Input
          placeholder="100€ cada mes"
          className="max-w-[200px]"
          onBlur={installmentHandler}
        />
      </div>
      <div>
        <label htmlFor="note" className="text-sm mt-2">
          Nota
        </label>
        <Input id="note" onBlur={additionalHandler} />
      </div>
    </div>
  );
};

const CreateOrder: React.FC<InfoProp> = ({ info, setInfo }) => {
  const [checkValue, setCheckValue] = useState(false);
  const sendHandler = () => {
    setCheckValue((prevCheck) => !prevCheck);
    setInfo((prevInfo) => ({ ...prevInfo, send: checkValue }));
  };

  const checkInfo = () => {
    if (
      info &&
      info.name &&
      info.last_name &&
      info.email &&
      info.password &&
      info.address &&
      info.cp &&
      info.phone &&
      info.dni &&
      info.products &&
      info.shipping_method &&
      info.total &&
      info.total_shipping &&
      info.payment_method &&
      info.payment
    ) {
      return true;
    }
  };
  return (
    <div>
      <div className="mb-8 border border-slate-400 rounded-md p-4">
        <div className="flex justify-between pdf">
          {checkInfo() && (
            <PDFDownloadLink document={<PDF info={info as PDFModel} />}>
              {({ loading }) =>
                loading ? (
                  <button>Loading document...</button>
                ) : (
                  <Button className="w-[75%] m-auto">Crear presupuesto</Button>
                )
              }
            </PDFDownloadLink>
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
            onChange={sendHandler}
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
        <InfoOrder info={orderInfo} setInfo={setOrderInfo} />
        <ShippingLogic info={orderInfo} setInfo={setOrderInfo} />
        <PriceOptions info={orderInfo} setInfo={setOrderInfo} />
        <CreateOrder info={orderInfo} setInfo={setOrderInfo} />
      </div>
    </Dialog>
  );
};

export default OrderDialog;
