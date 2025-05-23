import { fetchRecipes, IRecipe, TRecipesFilters } from "@/libs";
import { useQuery } from "@tanstack/react-query";

type UseProductProps = {
  ingredient?: string;
  area?: string;
  category?: string;
};

export function useRecipes(filters: UseProductProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => fetchRecipes(filters),
    select: (data: IRecipe[]) => data,
  });

  return { data, isLoading, isError, error };
}
