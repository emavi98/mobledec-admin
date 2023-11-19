import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";

import { InfoProp, Product } from "@/interfaces/general-dto";
import { columnsProduct } from "@/services/data/data-table";
import { Input } from "@/components/ui/input";

import UpDialog from "@/components/Dialogs/OrderDialog/components/UpDialog";
import Table from "@/components/Table/Table";
import productD from "@/MOCK_DATA_PRODUCTS.json";

const InfoOrder: React.FC<InfoProp> = ({ setInfo }) => {
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);
  const [showProduct, setShowProduct] = useState(false);
  const [priceProduct, setPriceProduct] = useState(0);

  const productData = productD.map((item) => ({
    value: item.product_name,
    label: item.product_name,
  }));

  const declareProduct = (product: Product) => {
    setShowProduct(true);
    setProduct(product);
    setPriceProduct(product.cost);
  };

  const addProduct = (
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
            onChange={addProduct}
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

export default InfoOrder;
