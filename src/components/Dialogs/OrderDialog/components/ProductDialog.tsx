import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addProduct } from "@/store/Slices/orderSlice";

import { formatPrice } from "@/lib/utils";

import { Button, InputSH } from "@/components";
import { removeDialog } from "@/store/Slices/dialogSlice";

const ProductDialog = () => {
  const dispatch = useAppDispatch();
  const { productDialog: product } = useAppSelector(
    (state) => state.orderSliceReducer
  );
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [price, setPrice] = useState(product.cost);
  const [productName, setProductName] = useState(product.product_name);

  const addQuantityProduct = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeQuantityProduct = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const changePrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const price = +ev.target.value;
    setPrice(price);
  };

  const changeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.value;
    setProductName(name);
  };

  const addProductOrderList = () => {
    const newProduct = {
      sku: product?.sku,
      product_name: productName,
      cost: price,
      minutes_mount: product?.minutes_mount,
      delivery_days: product?.delivery_days,
      quantity,
      subTotal,
    };
    dispatch(addProduct(newProduct));
  };

  useEffect(() => {
    if (price) {
      setSubTotal(price * quantity);
    }
  }, [quantity, price]);

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
              placeholder={product.product_name}
              className="flex items-center text-center h-auto p-2 bg-transparent border-slate-800 outline-none focus-visible:ring-0 placeholder:text placeholder:text-base placeholder:text-black"
              onChange={changeName}
            />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <p className="text text-base">
                <span className="font-bold">Precio unitario:</span>{" "}
              </p>
              <InputSH
                type="number"
                placeholder={product?.cost.toString() + "€"}
                className="flex items-center text-center max-w-[75px] h-auto p-2 bg-transparent border-slate-800 outline-none focus-visible:ring-0 placeholder:text placeholder:text-base placeholder:text-black"
                onChange={changePrice}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text text-base">
              <span className="font-bold">Tiempo de entrega:</span>{" "}
              {product.delivery_days} días
            </p>
          </div>
          <div className="flex gap-4 items-center">
            {product.minutes_mount && (
              <p className="text text-base">
                <span className="font-bold">Minutos de montaje:</span>{" "}
                {product.minutes_mount}
              </p>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-3">
              <p className="font-bold">Cantidad:</p>
              <button
                onClick={removeQuantityProduct}
                className="text-red-700 font-bold"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={addQuantityProduct}
                className="text-green-700 font-bold"
              >
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
              dispatch(removeDialog("Products"));
            }}
          >
            Cancelar
          </Button>
          <Button
            className="min-w-[200px]"
            onClick={() => {
              dispatch(removeDialog("Products"));
              addProductOrderList();
            }}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDialog;
