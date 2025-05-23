"use client";
import { IRecipe, routeList } from "@/libs";
import Image from "next/image";
import {
  Button,
  ContentWrap,
  IngredientList,
  Instruction,
  Name,
  RecipeImageWrap,
  Text,
} from "./Recipe.styled";
import { Section } from "../common";
import { useRecipesFilters } from "@/hooks/useRecipesFilters";
import { useRouter } from "next/navigation";

type RecipeInfoProps = {
  recipe: IRecipe;
};

function extractIngredients(recipe: Record<string, any>): string[] {
  return Object.entries(recipe)
    .filter(
      ([key, value]) =>
        key.startsWith("strIngredient") && value && value.trim() !== ""
    )
    .map(([_, value]) => value.trim());
}

export const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
  const router = useRouter();
  const { setFilters } = useRecipesFilters();
  const { strMealThumb, strMeal, strArea, strInstructions } = recipe;
  const ingredientList = extractIngredients(recipe);

  const handleCountryClick = (country: string) => {
    setFilters((filters) => ({
      ...filters,
      ingredient: "",
      area: country,
    }));
    setTimeout(() => {
      router.push(routeList.recipes);
    }, 0);
  };
  const handleIngredientClick = (ingredient: string) => {
    setFilters((filters) => ({
      ...filters,
      ingredient,
      area: "",
    }));
    setTimeout(() => {
      router.push(routeList.recipes);
    }, 0);
  };

  return (
    <Section>
      <RecipeImageWrap>
        <Image
          src={strMealThumb}
          alt={strMeal}
          width="0"
          height="0"
          sizes="100vw"
        />
      </RecipeImageWrap>
      <ContentWrap>
        <Name>{strMeal}</Name>
        <Button type="button" onClick={() => handleCountryClick(strArea)}>
          {strArea}
        </Button>
        <Instruction>{strInstructions}</Instruction>
        <div>
          <Text>
            <strong>IngredientList:</strong>
          </Text>
          <IngredientList>
            {ingredientList?.map((ingredient, idx) => (
              <li key={`${ingredient}-${idx}`}>
                <Button onClick={() => handleIngredientClick(ingredient)}>
                  {ingredient}
                </Button>
              </li>
            ))}
          </IngredientList>
        </div>
      </ContentWrap>
    </Section>
  );
};
