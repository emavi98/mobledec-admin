import { useQuery } from '@tanstack/react-query';
import api from 'services/api/instance';

async function fetchUsersByKeyword(keyword = ' ') {
  const { data } = await api.get(`/auth/keyword/${keyword}`);
  return data;
}

export function useUsersQuery(keyword: string) {
  return useQuery({
    queryKey: ['users', keyword],
    queryFn: () => fetchUsersByKeyword(keyword),
  });
}
