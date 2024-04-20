/* Components */
import CardProductComponent from './components/card-product/card-product';
import { CardTitle } from 'components';
import { FormWrapper } from 'pages/orders-page/wrappers';

const ProductList = () => {
  return (
    <FormWrapper title="Listado de productos">
      {/* <SearchBardShadcnMbd /> */}
      <CardProductComponent />
      <CardTitle className="p-2">Total: 1.000,00€</CardTitle>
    </FormWrapper>
  );
};

export { ProductList };
