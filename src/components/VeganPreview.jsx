import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";

const VeganPreview = () => {
	useEffect(() => {
	    fetchByDiet();
	}, []);

	const [recipes, setRecipes] = useState(null);
	const baseURL = "https://api.spoonacular.com";
	const apiKey = process.env.REACT_APP_API_KEY;
	const DIET_TYPES = ["GlutenFree", "Vegetarian", "Vegan", "Ketogenic"];

	const fetchByDiet = () => {
		// prettier-ignore
            // .get(`${baseURL}/recipes/complexSearch?apiKey=${apiKey}&diet=Vegan&addRecipeInformation=true&number=4`)
            Axios.get(`${baseURL}/recipes/random?apiKey=${apiKey}&number=${4}`)

           .then(({ data }) => {
console.log(data.recipes);
            setRecipes(data.recipes);
         });
	};

	return (
		<section className="mb-20">
			<h2 className="text-3xl mb-5">Vegan</h2>
			<div className="grid grid-cols-4 gap-4 h-96 justify-between">
				{recipes &&
					recipes.map((recipe) => (
						<Card recipe={recipe} key={recipe.id} id={recipe.id} />
					))}
			</div>
		</section>
	);
};

export default VeganPreview;
