import React, { useEffect, useState } from "react";
import Card from "./Card";
import Axios from "axios";

const TopPicks = () => {
	const [topPicks, setTopPicks] = useState(null);

	useEffect(() => {
		fetchRandomRecipes(5);
	}, []);

	const baseURL = "https://api.spoonacular.com";
	const apiKey = process.env.REACT_APP_API_KEY;

	const fetchRandomRecipes = (numOfRecipes) => {
		// prettier-ignore
		if(localStorage.getItem("topPicksData")){
            setTopPicks( JSON.parse(localStorage.getItem("topPicksData")));
			return;
		}

		Axios.get(`${baseURL}/recipes/random?apiKey=${apiKey}&number=${numOfRecipes}`).then(
			({ data }) => {
				const topPicksData = data.recipes.map((recipe) => {
					return {
						id: recipe.id,
						title: recipe.title,
						image: recipe.image,
						readyInMinutes: recipe.readyInMinutes,
						summary: recipe.summary
					};
				});

				localStorage.setItem("topPicksData", JSON.stringify(topPicksData));

				setTopPicks(JSON.parse(localStorage.getItem("topPicksData")));
			}
		);
	};

	return (
		<section>
			<h2 className="text-5xl w-fit mx-auto mb-16 pl-3 border-l-8 border-900">Top Picks</h2>
			<div className="grid grid-cols-8 grid-rows-2 gap-2 lg:px-36">
				{topPicks &&
					topPicks.map((recipe, index) => {
						if (index === 1) recipe.gridClass = "col-span-4 row-span-2";
						return (
							<div className={`col-span-2 ${recipe.gridClass} `}>
								<Card recipe={recipe} key={recipe.id} id={recipe.id} />
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default TopPicks;
