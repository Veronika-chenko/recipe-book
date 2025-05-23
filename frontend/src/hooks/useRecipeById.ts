import { useQuery } from "@tanstack/react-query";
import { fetchRecipeById, IRecipe } from "@/libs";

export function useRecipeById(id: string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeById(id),
    select: (data: IRecipe) => data[0],
    enabled: !!id,
  });
  return { data, isLoading, isError, error };
}
