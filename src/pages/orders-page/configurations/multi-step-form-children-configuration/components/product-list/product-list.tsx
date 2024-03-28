/* Components */
import CardProductComponent from './components/card-product/card-product';
import { CardTitle, SearchBardShadcnMbd } from 'components';
import { FormWrapper } from 'pages/orders-page/wrappers';

const ProductList = ({ title }) => {
  return (
    <FormWrapper title={title}>
      <SearchBardShadcnMbd />
      <CardProductComponent />
      <CardTitle className="p-2">Total: 1.000,00€</CardTitle>
    </FormWrapper>
  );
};

export { ProductList };
