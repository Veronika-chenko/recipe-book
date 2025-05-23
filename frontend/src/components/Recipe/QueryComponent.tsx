"use client";

import { useRecipeById } from "@/hooks";
import { Recipe } from "./Recipe";

type QueryComponentProps = {
  id: string;
};

export const RecipeQueryComponent = ({ id }: QueryComponentProps) => {
  const { data, isLoading, isError, error } = useRecipeById(id);
  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    console.error("Error on fetch recipe: ", error?.message);
    return <p>Error on fetch recipe</p>;
  }

  return <>{data ? <Recipe recipe={data} /> : <p>Recipe not found</p>}</>;
};
