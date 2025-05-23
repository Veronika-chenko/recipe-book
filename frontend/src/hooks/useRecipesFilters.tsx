import { useContext } from "react";
import { RecipesFilterContext } from "@/contexts";

export const useRecipesFilters = () => {
  const context = useContext(RecipesFilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
