import React from "react";
import Axios from "axios";

export const RecipesByDiet = () => {
	const baseURL = "https://api.spoonacular.com";
	const apiKey = process.env.REACT_APP_API_KEY;
	const DIET_TYPES = ["GlutenFree", "Vegetarian", "Vegan", "Ketogenic"];

	const fetchByDiet = () => {
		// prettier-ignore
		Axios
            .get(`${baseURL}/recipes/complexSearch?apiKey=${apiKey}&diet=GlutenFree`)
           .then(({ data }) => {
			   console.log("free",data);
            });
	};

	return (
		<section>
			<h2 className="text-5xl w-fit mx-auto mb-16 pl-3 border-l-8 border-900 mt-16">
				Recipes By Diet
			</h2>
		</section>
	);
};
