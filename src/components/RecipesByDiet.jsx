import React from "react";
import CategoryPreview from "./CategoryPreview";

export const RecipesByDiet = () => {
  const DIET_TYPES = ["GlutenFree", "Vegetarian", "Vegan", "Ketogenic"];


  return (
    <section>
      <CategoryPreview category="vegan" numOfRecipes={4} />
      <CategoryPreview category="vegetarian" numOfRecipes={4} />
      <CategoryPreview category="ketogenic" numOfRecipes={4} />
      <CategoryPreview category="gluten-free" numOfRecipes={4} />
    </section>
  );
};
