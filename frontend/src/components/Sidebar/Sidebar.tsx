"use client";
import { useRecipes, useRecipesFilters } from "@/hooks";
import { Box, InnerBox, List, RecipeName } from "./Sidebar.styled";
import { routeList } from "@/libs";
import { useRouter } from "next/navigation";

type SidebarProps = {
  category: string;
};

export const Sidebar = ({ category }: SidebarProps) => {
  const router = useRouter();
  const { setFilters } = useRecipesFilters();
  const { data, isLoading, isError, error } = useRecipes({ category });

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    console.log("An error has occurred: " + error?.message || "Unknown error");
    return (
      <p>An error occurred while fetching recipes. Please try again later.</p>
    );
  }

  const handleCategoryClick = () => {
    setFilters((filters) => ({
      ...filters,
      ingredient: "",
      area: "",
      category,
    }));
    setTimeout(() => {
      router.push(routeList.recipes);
    }, 0);
  };

  return (
    <Box>
      <InnerBox>
        {data && data?.length > 0 ? (
          <List>
            {data?.map((resipe) => {
              console.log("🚀 ~ {data?.map ~ resipe:", resipe);
              return (
                <li key={resipe.idMeal}>
                  <RecipeName onClick={() => handleCategoryClick()}>
                    {resipe.strMeal}
                  </RecipeName>
                </li>
              );
            })}
          </List>
        ) : null}
      </InnerBox>
    </Box>
  );
};
