import { useQuery } from '@tanstack/react-query';
import api from 'services/api/instance';
/* Interface */
import { ProductEntity } from 'models/products-entity';

async function fetchProducts(): Promise<ProductEntity[]> {
  const response = await api.get<ProductEntity[]>(
    '/products?limit=10&offset=4'
  );
  return response.data;
}
export function useFetchProducts() {
  return useQuery<ProductEntity[]>({
    queryKey: ['orders'],
    queryFn: () => fetchProducts(),
  });
}
