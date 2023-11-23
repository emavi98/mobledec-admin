import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";

import { InfoProp, Product } from "@/interfaces/general-dto";
import { columnsProduct } from "@/domain/data/data-table";
import { formatPrice } from "@/lib/utils";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setProductDialog, removeProduct } from "@/store/Slices/orderSlice";

import { Table } from "@/components";
import ProductDialog from "./ProductDialog";
import ProductTable from "./ProductTable";

import productD from "@/MOCK_DATA_PRODUCTS.json";

const InfoOrder: React.FC<InfoProp> = ({ orderInfo, setInfo }) => {
  const dispatch = useAppDispatch();
  const orderList = useAppSelector(
    (state) => state.orderSliceReducer.orderList
  );
  const [showProduct, setShowProduct] = useState(false);

  const productData = productD.map((item) => ({
    value: item.product_name,
    label: item.product_name,
  }));

  const openProductDialog = (
    newValue: SingleValue<{ value: string; label: string }> | null
  ) => {
    if (newValue) {
      const selectedValue = newValue.value;
      const [productFiltered] = productD.filter(
        (item) => item.product_name === selectedValue
      );

      dispatch(setProductDialog(productFiltered));
      setShowProduct(true);
    }
  };

  const editRowTable = (id: number) => {
    const selectedProduct: Product | undefined = orderList.find(
      (item) => item.sku === id
    );
    if (selectedProduct) {
      dispatch(setProductDialog(selectedProduct));
      setShowProduct(true);
    }
  };

  const removeRowTable = (id: number) => {
    const selectedProduct: Product | undefined = orderList.find(
      (item) => item.sku === id
    );
    if (selectedProduct) {
      dispatch(removeProduct(selectedProduct));
    }
  };

  useEffect(() => {
    const total = orderList.reduce(
      (acc: number, cur: Product) => cur.subTotal! + acc,
      0
    );
    setInfo((prevInfo) => ({ ...prevInfo, total, orderList }));
  }, [orderList]);

  return (
    <>
      <div
        className={`mb-8 border border-slate-400 rounded-md p-4 relative ${
          showProduct && "min-h-[500px]"
        }`}
      >
        {showProduct && <ProductDialog onShow={setShowProduct} />}
        <h2>Datos de pedido*</h2>
        <div className="mt-8">
          <Select
            name="colors"
            options={productData}
            className="basic-multi-select"
            classNamePrefix="Busca..."
            onChange={openProductDialog}
          />
        </div>
        {orderList.length > 0 && (
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
              data={orderList}
              columns={columnsProduct}
              thRow={["cantidad", "subtotal", "pedido", "stock"]}
              editRowFn={editRowTable}
              removeRowFn={removeRowTable}
            >
              <ProductTable />
            </Table>
            {orderInfo && orderInfo.total ? (
              <p>
                <span className="font-bold">Total:</span>{" "}
                {formatPrice(+orderInfo?.total as number)}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default InfoOrder;
