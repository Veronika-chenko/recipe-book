type fetchProductsProps = {
  ingredient?: string;
  area?: string;
  category?: string;
};

import { queryBuilder } from "../helpers";
import { axiosInstance } from "./axiosInstance";

const RECIPES_API = "/api/recipes";

export async function fetchRecipes({
  ingredient,
  area,
  category,
}: fetchProductsProps) {
  try {
    const url = queryBuilder(RECIPES_API, {
      ingredient,
      area,
      category,
    });
    const response = await axiosInstance.get(url);
    // const response = await axiosInstance.get(RECIPES_API);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchRecipeById(id: string) {
  try {
    const response = await axiosInstance.get(`${RECIPES_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
