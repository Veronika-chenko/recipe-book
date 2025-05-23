"use client";
import Link from "next/link";
import { ContentBox, ImageWrap, Item, List } from "./RecipeList.styled";
import { IRecipe, routeList } from "@/libs";
import Image from "next/image";

type Props = {
  recipes: IRecipe[];
};

export const RecipeList = ({ recipes }: Props) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <Item key={recipe.idMeal}>
          <Link href={`${routeList.recipes}/${recipe.idMeal}`}>
            <ImageWrap>
              <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width="0"
                height="0"
                sizes="100vw"
              />
            </ImageWrap>
            <ContentBox>
              <p>
                <strong>Name: </strong>
                {recipe.strMeal}
              </p>
              <p>
                <strong>Category:</strong> {recipe.strCategory}
              </p>
              <p>
                <strong>Area:</strong> {recipe.strArea}
              </p>
            </ContentBox>
          </Link>
        </Item>
      ))}
    </List>
  );
};
