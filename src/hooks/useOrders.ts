import { useQuery } from '@tanstack/react-query';
import api from 'services/api/instance';

async function fetchOrders() {
  const { data } = await api.get('/orders');
  return data;
}

export function useFetchOrders() {
  return useQuery({ queryKey: ['orders'], queryFn: () => fetchOrders() });
}
