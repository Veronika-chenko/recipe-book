"use client";
import { useRecipes } from "@/hooks/useRecipes";
import { RecipeList } from "./RecipeList";
import { Filters } from "./Filters";
import { Container, Section } from "../common";
import { useRecipesFilters } from "@/hooks";

export const QueryComponent = () => {
  const { filters } = useRecipesFilters();
  const { data, isLoading, isError, error } = useRecipes(filters);

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    console.log("An error has occurred: " + error?.message || "Unknown error");
    return (
      <p>An error occurred while fetching recipes. Please try again later.</p>
    );
  }
  return (
    <Section>
      <Container>
        {data && data?.length > 0 ? (
          <>
            <Filters />
            <RecipeList recipes={data} />
          </>
        ) : (
          <p>There are no recipes</p>
        )}
      </Container>
    </Section>
  );
};
