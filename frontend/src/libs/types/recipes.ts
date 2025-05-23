export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  [key: string]: any;
}

export type TRecipesFilters = {
  ingredient?: string;
  area?: string;
  category?: string;
  search?: string;
};
