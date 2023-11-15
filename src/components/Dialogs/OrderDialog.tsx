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
import { useState } from "react";
import productD from "@/MOCK_DATA_PRODUCTS.json";
import { Product } from "@/interfaces/table-dto";

const InfoClient = () => {
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
  return (
    <div className="mb-8 border border-slate-400 rounded-md p-4">
      <h2>Datos de cliente</h2>
      <div className="mt-8 flex flex-col gap-3">
        <div>
          <label htmlFor="name">Nombre</label>
          <Input
            id="name"
            className="outline-none focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label htmlFor="lastname">Apellidos</label>
          <Input
            id="lastname"
            className="outline-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            className={`outline-0 focus-visible:ring-offset-0 ${
              error.includes("email") ? "border border-red-500" : ""
            }`}
            type="email"
            onBlur={handleEmail}
          />
          {error.includes("email") && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <Input
            id="password"
            className="outline-0 focus-visible:ring-offset-0"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección</label>
          <Input
            id="direccion"
            className="outline-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="cp">CP</label>
            <Input id="cp" className="outline-0 focus-visible:ring-offset-0" />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Telefono</label>
            <Input
              id="phone"
              className="outline-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div>
          <label htmlFor="DNI">DNI/CIF</label>
          <Input id="DNI" className="outline-0 focus-visible:ring-offset-0" />
        </div>
      </div>
    </div>
  );
};

const InfoOrder = () => {
  const productData = productD.map((item) => ({
    value: item.name,
    label: item.name,
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
        (item) => item.name === selectedValue
      );

      declareProduct(productFiltered);
    }
  };

  const editProduct = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    const productId = ev.currentTarget.getAttribute("data-id");
    if (productId) {
      const productSelected = products.find((item) => item.id === +productId);
      declareProduct(productSelected as Product);
    }
  };

  const eliminateProduct = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    const productId = ev.currentTarget.getAttribute("data-id");
    if (productId) {
      const filteredProducts = products.filter(
        (item) => item.id !== +productId
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <>
      <div className="mb-8 border border-slate-400 rounded-md p-4 relative min-h-[180px]">
        {showProduct && (
          <UpDialog
            onShow={setShowProduct}
            product={product as Product}
            products={products}
            price={priceProduct}
            setProducts={setProducts}
          />
        )}
        <h2>Datos de pedido</h2>
        <div className="mt-8">
          <Select
            name="colors"
            options={productData}
            className="basic-multi-select"
            classNamePrefix="Busca..."
            onChange={handleProduct}
          />
        </div>
        <div id="results" className="mt-4 flex flex-col gap-2">
          {products.length > 0 &&
            products.map((item) => (
              <div
                className="flex flex-col gap-2 border border-slate-400 rounded-xl p-2"
                key={item?.id}
              >
                <div className="flex flex-col gap-2">
                  <p className="text">
                    <span className="font-bold text">Producto:</span>{" "}
                    {item.name}
                  </p>
                  <p>
                    <span className="font-bold">Precio:</span>{" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.cost)}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <p className="font-bold text">Cantidad:</p>
                    <div className="flex gap-3">
                      <span>{item.quantity}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="flex gap-2">
                    <p className="font-bold">Total:</p>
                    <span>
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(+item.subTotal!)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <p
                      className="text-blue-600 cursor-pointer"
                      onClick={editProduct}
                      data-id={item?.id}
                    >
                      Editar
                    </p>
                    <p
                      className="text-red-600 cursor-pointer"
                      onClick={eliminateProduct}
                      data-id={item?.id}
                    >
                      Eliminar
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const ShippingLogic = () => {
  return (
    <div className="mb-8">
      <h2>Logistica</h2>
      <div className="flex gap-4">
        <SelectSH>
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
        <Input placeholder="Precio Manualmente" />
      </div>
      <div className="my-4">
        <Input placeholder="2 colchones" className="min-h-[75px]" />
      </div>
      <p className="text-sm">
        Total de la operación: <strong>1500€</strong>
      </p>
    </div>
  );
};

const PriceOptions = () => {
  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <SelectSH>
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
        <Input placeholder="400€" />
      </div>
      <div className="flex mt-3 items-center gap-4">
        <p className="text-sm block">
          Pendiente por pagar <strong>1100€</strong>
        </p>
        <Input placeholder="100€ cada mes" className="max-w-[200px]" />
      </div>
      <div>
        <label htmlFor="note" className="text-sm mt-2">
          Nota
        </label>
        <Input id="note" />
      </div>
    </div>
  );
};

const CreateOrder = () => {
  return (
    <div>
      <div className="mb-8 border border-slate-400 rounded-md p-4">
        <div className="flex justify-between">
          <Button className="w-[45%]">Crear presupuesto</Button>
          <Button className="w-[45%]">Crear pedido</Button>
        </div>
        <div className="flex items-center my-8 mx-8 gap-4">
          <Input type="checkbox" className="w-[40px] cursor-pointer" />
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
  return (
    <Dialog textBtn="crear pedido">
      <div>
        <InfoClient />
        <InfoOrder />
        <ShippingLogic />
        <PriceOptions />
        <CreateOrder />
      </div>
    </Dialog>
  );
};

export default OrderDialog;
