import { Button } from "../ui/button";
import { Product } from "@/interfaces/table-dto";
import { useEffect, useState } from "react";

const UpDialog: React.FC<{
  product: Product;
  products: Product[];
  price: number;
  onShow: (value: boolean) => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}> = ({ product, products, price: priceProduct, onShow, setProducts }) => {
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (product?.cost) {
      setSubTotal(product?.cost * quantity);
    }
  }, [quantity]);

  const addProduct = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeProduct = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const fillProducts = () => {
    const productIndex = products.findIndex((item) => item?.id);
    const newProduct = {
      cost: product?.cost,
      description: product?.description,
      id: product?.id,
      name: product?.name,
      quantity,
      subTotal,
    };
    if (productIndex === -1) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } else {
      setProducts((prevProducts) => {
        return prevProducts
          .filter((item) => item.id !== product?.id)
          .concat(newProduct);
      });
    }
  };

  return (
    <div className="absolute z-[100] w-[100%] h-[100%] top-0 left-0 m-auto bg-slate-50 rounded-md">
      <div>
        <div className="p-2 flex flex-col gap-2">
          <p className="text text-base">
            <span className="font-bold">Producto: </span>
            {product?.name}
          </p>
          <p className="text text-base">
            <span className="font-bold">Descripción:</span>{" "}
            {product?.description}
          </p>
          <p className="text text-base">
            <span className="font-bold">Precio unitario:</span>{" "}
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(priceProduct)}
          </p>
          <div className="flex gap-3">
            <p className="font-bold">Cantidad:</p>
            <button onClick={removeProduct}>-</button>
            <span>{quantity}</span>
            <button onClick={addProduct}>+</button>
          </div>
          <p className="text text-base">
            <span className="font-bold">Subtotal: </span>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(subTotal)}
          </p>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Button
            className="min-w-[200px]"
            onClick={() => {
              onShow(false);
              fillProducts();
            }}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpDialog;
