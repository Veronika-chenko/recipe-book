import { RecipesFilterProvider } from "@/contexts";

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RecipesFilterProvider>{children}</RecipesFilterProvider>;
}
