import { FormWrapper } from 'pages/orders-page/wrappers';
import CardProductComponent from '../product-list/components/card-product/card-product';
import { CardTitle, SearchBardShadcnMbd } from 'components';

const OrderToSupplierComponent = ({ title }) => {
  return (
    <FormWrapper title={title}>
      <SearchBardShadcnMbd />
      <CardProductComponent />
      <CardTitle className="p-2">Total: 1.000,00€</CardTitle>
    </FormWrapper>
  );
};

export { OrderToSupplierComponent };
