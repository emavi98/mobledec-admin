/* Components */
import SearchComponent from '@/components/search/search';
import FormWrapper from '../../form-wrapper/form-wrapper.component';
import CardProductComponent from './components/card-product/card-product';
import { CardTitle } from '@/components';

const ProductList = ({ title }) => {
  return (
    <FormWrapper title={title}>
      <SearchComponent />
      <CardProductComponent />
      <CardTitle className="p-2">Total: 1.000,00€</CardTitle>
    </FormWrapper>
  );
};

export default ProductList;
