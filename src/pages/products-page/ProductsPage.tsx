import { ProductsPageDialog } from "./components/products-page-dialog/products-page-dialog";
import { ProductsPageTable } from "./components/products-page-table/products-page-table";


export const ProductsPage = () => {
  return (
    <>
      <ProductsPageTable />
      <ProductsPageDialog />
    </>
  );
};
