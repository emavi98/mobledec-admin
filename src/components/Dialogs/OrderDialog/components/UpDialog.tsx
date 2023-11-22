import { useEffect, useState } from "react";

import { Product } from "@/interfaces/general-dto";
import { formatPrice } from "@/lib/utils";

import { Button, InputSH } from "@/components";

type UpProps = {
  product: Product;
  products: Product[];
  price: number;
  onShow: (value: boolean) => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const UpDialog: React.FC<UpProps> = ({
  product,
  products,
  price: priceProduct,
  onShow,
  setProducts,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);

  const addProduct = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeProduct = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const fillProducts = () => {
    const productIndex = products.findIndex((item) => item?.sku);
    const newProduct = {
      sku: product?.sku,
      product_name: product?.product_name,
      cost: product?.cost,
      minutes_mount: product?.minutes_mount,
      delivery_days: product?.delivery_days,
      quantity,
      subTotal,
    };
    if (productIndex === -1) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } else {
      setProducts((prevProducts) => {
        return prevProducts
          .filter((item) => item.sku !== product?.sku)
          .concat(newProduct);
      });
    }
  };

  useEffect(() => {
    if (product?.cost) {
      setSubTotal(product?.cost * quantity);
    }
  }, [quantity]);

  return (
    <div className="absolute z-[100] w-full h-full top-0 left-0 rounded-md flex items-center justify-center">
      <div className="w-full h-full absolute top-0 left-0 z-10 backdrop-blur-sm"></div>
      <div className="w-[80%] h-[80%] m-auto bg-slate-50 z-50 shadow-md rounded-md">
        <div className="p-2 flex flex-col gap-2">
          <h2 className="text-center">Añadir Producto</h2>
          <div className="flex gap-2 items-center">
            <p className="text text-base">
              <span className="font-bold">Producto: </span>
            </p>
            <InputSH
              type="text"
              placeholder={product?.product_name}
              className="flex items-center text-center h-auto p-2 bg-transparent border-slate-800 outline-none focus-visible:ring-0 placeholder:text placeholder:text-base placeholder:text-black"
            />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <p className="text text-base">
                <span className="font-bold">Precio unitario:</span>{" "}
              </p>
              <InputSH
                type="number"
                placeholder={priceProduct.toString() + "€"}
                className="flex items-center text-center max-w-[75px] h-auto p-2 bg-transparent border-slate-800 outline-none focus-visible:ring-0 placeholder:text placeholder:text-base placeholder:text-black"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text text-base">
              <span className="font-bold">Tiempo de entrega:</span>{" "}
              {product?.delivery_days} días
            </p>
          </div>
          <div className="flex gap-4 items-center">
            {product?.minutes_mount && (
              <p className="text text-base">
                <span className="font-bold">Minutos de montaje:</span>{" "}
                {product?.minutes_mount}
              </p>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-3">
              <p className="font-bold">Cantidad:</p>
              <button
                onClick={removeProduct}
                className="text-red-700 font-bold"
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={addProduct} className="text-green-700 font-bold">
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text text-base">
              <span className="font-bold">Subtotal: </span>
              {formatPrice(subTotal)}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center mt-4">
          <Button
            className="min-w-[200px]"
            onClick={() => {
              onShow(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            className="min-w-[200px]"
            onClick={() => {
              onShow(false);
              fillProducts();
            }}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpDialog;
