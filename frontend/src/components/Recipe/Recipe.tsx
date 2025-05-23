"use client";
import { IRecipe } from "@/libs";
import { Flexbox } from "./Recipe.styled";
import { Sidebar } from "../Sidebar";
import { RecipeInfo } from "./RecipeInfo";
import { useRecipesFilters } from "@/hooks";
import { useEffect } from "react";

type RecipeProps = {
  recipe: IRecipe;
};
export const Recipe = ({ recipe }: RecipeProps) => {
  return (
    <Flexbox>
      <Sidebar category={recipe.strCategory} />
      <RecipeInfo recipe={recipe} />
    </Flexbox>
  );
};
