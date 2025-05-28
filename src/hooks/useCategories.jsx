import { useGetQuery } from '../services/apiService';

function useCategories({ type }) {
  const {
    data: eventCategories,
    isLoading,
    error,
  } = useGetQuery({
    path: `/categories/${type}`,
  });

  return {
    categories: eventCategories?.data || [],
    isLoading,
    error,
  };
}

export default useCategories;
