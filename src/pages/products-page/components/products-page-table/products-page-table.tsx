import { TableShadcnMbd } from 'components';

import { ProductsPageTableToolBar } from './components/products-page-table/products-page-table-toolbar';
import { columns } from './configurations/table-configuration';
import { useFetchProducts } from 'services/products-service';

export const ProductsPageTable = () => {
  const { data, isLoading, error } = useFetchProducts();

  if (isLoading) return <div>Loading ...</div>;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <ProductsPageTableToolBar {...{ data, columns }} />
      <TableShadcnMbd {...{ data, columns }} />
    </div>
  );
};
