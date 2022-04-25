import React from "react";
import Axios from "axios";
import VeganPreview from "./VeganPreview";

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
			<VeganPreview />
		</section>
	);
};
