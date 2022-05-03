import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";

const CategoryPreview = ({ category, numOfRecipes }) => {
  useEffect(() => {
    fetchByDiet();
  }, []);

  const [recipes, setRecipes] = useState(
    localStorage.getItem(`${category}Data`)
      ? JSON.parse(localStorage.getItem(`${category}Data`))
      : null
  );
  const baseURL = "https://api.spoonacular.com";
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchByDiet = () => {
    // prettier-ignore
    if (recipes!=null) return;

    Axios.get(
      `${baseURL}/recipes/random?apiKey=${apiKey}&number=${numOfRecipes}&tags=${category}`
    ).then(({ data }) => {
      setRecipes(data.recipes);
      localStorage.setItem(`${category}Data`, JSON.stringify(data.recipes));
    });
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl mb-5 capitalize">{category}</h2>
      <div className="grid grid-cols-4 gap-4 h-96 justify-between">
        {recipes &&
          recipes.map((recipe) => (
            <Card recipe={recipe} key={recipe.id} id={recipe.id} />
          ))}
      </div>
    </section>
  );
};

export default CategoryPreview;
