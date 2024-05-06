/* Components */
import CardProductComponent from './components/card-product/card-product';
import { CardTitle } from 'components';
import { FormWrapper } from 'pages/orders-page/wrappers';
import useOrdersPageStore from 'store/orders-store';

const ProductList = ({ title }: { title: string }) => {
  const { orderFormDialog, setOrderFormValues } = useOrdersPageStore();
  return (
    <FormWrapper title={title}>
      {/* <SearchBardShadcnMbd /> */}
      {orderFormDialog.lineItems.map((lineProduct) => (
        <CardProductComponent product={lineProduct} />
      ))}
      <CardTitle className="p-2">
        Total: {orderFormDialog.total + ' ' + orderFormDialog.currencySymbol}
      </CardTitle>
    </FormWrapper>
  );
};

export { ProductList };
