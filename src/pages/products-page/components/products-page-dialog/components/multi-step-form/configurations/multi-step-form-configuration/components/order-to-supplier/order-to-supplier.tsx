import { FormWrapper } from "pages/orders-page/wrappers";
import { CardTitle } from "components";

const OrderToSupplierComponent = ({ title }: { title: string }) => {
  return (
    <FormWrapper title={title}>
      {/* <SearchBardShadcnMbd /> */}
      {/* <CardProductComponent /> */}
      <CardTitle className="p-2">Total: 1.000,00€</CardTitle>
    </FormWrapper>
  );
};

export { OrderToSupplierComponent };
