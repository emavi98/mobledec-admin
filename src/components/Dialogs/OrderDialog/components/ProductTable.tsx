import React from "react";

import { InputSH } from "@/components";
import { Product } from "@/interfaces/general-dto";

type ProductTableProps = {
  product?: Product[];
};

const ProductTable: React.FC<ProductTableProps> = ({ product }) => {
  const { quantity, subTotal, sku } = product![0];

  return (
    <React.Fragment key={sku}>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{subTotal}</td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center gap-2">
          <InputSH type="checkbox" id="pedido" className="w-[20px]" />
          <label htmlFor="pedido">Hacer pedido?</label>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center gap-2">
          <InputSH type="checkbox" id="pedido" className="w-[20px]" />
          <label htmlFor="pedido">Rebajar Stock?</label>
        </div>
      </td>
    </React.Fragment>
  );
};

export default ProductTable;
