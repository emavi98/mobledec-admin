import { useQuery } from '@tanstack/react-query';
import api from 'services/api/instance';
import { OrderEntity } from 'models';

async function fetchOrders(): Promise<OrderEntity[]> {
  const response = await api.get<OrderEntity[]>('/orders');
  return response.data;
}
export function useFetchOrders() {
  return useQuery<OrderEntity[]>({
    queryKey: ['orders'],
    queryFn: () => fetchOrders(),
  });
}
