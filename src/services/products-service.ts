import { useQuery } from '@tanstack/react-query';
import api from 'services/api/instance';
import { ProductEntity } from 'models/products-entity';

async function fetchProducts(): Promise<ProductEntity[]> {
  const response = await api.get<ProductEntity[]>(
    '/products?limit=30&offset=4'
  );
  return response.data;
}
export function useFetchProducts() {
  return useQuery<ProductEntity[]>({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });
}
