import { useRecipesFilters } from "@/hooks";
import { FiltersBox } from "./RecipeList.styled";

export const Filters = () => {
  const { filters } = useRecipesFilters();

  const noFiltersApplied =
    !filters?.ingredient && !filters?.area && !filters?.category;

  return (
    <FiltersBox>
      <p>
        <strong>Filters applied: </strong>
      </p>
      {noFiltersApplied && <p>No filters applied</p>}
      {filters?.ingredient && <p>Ingredient: {filters.ingredient}</p>}
      {filters?.area && <p>Country: {filters.area}</p>}
      {filters?.category && <p>Category: {filters.category}</p>}
    </FiltersBox>
  );
};
