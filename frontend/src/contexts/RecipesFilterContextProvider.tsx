"use client";
import { TRecipesFilters } from "@/libs";
import { createContext, ReactNode, useState } from "react";

type FilterProviderProps = {
  children: ReactNode;
};

interface FilterContextType {
  filters: TRecipesFilters;
  setFilters: React.Dispatch<React.SetStateAction<TRecipesFilters>>;
}

const initialFilterState: TRecipesFilters = {
  ingredient: "",
  area: "",
  category: "",
};

export const RecipesFilterContext = createContext<
  FilterContextType | undefined
>(undefined);

export const RecipesFilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState<TRecipesFilters>(initialFilterState);

  return (
    <RecipesFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </RecipesFilterContext.Provider>
  );
};
