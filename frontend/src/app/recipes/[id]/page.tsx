import { RecipeQueryComponent } from "@/components/Recipe/QueryComponent";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <RecipeQueryComponent id={id} />
    </main>
  );
}
