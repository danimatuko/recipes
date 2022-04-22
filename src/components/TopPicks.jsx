import React from "react";
import Card from "./Card";

const meals = [
	{
		name: "Mushroom soup with buckwheat",
		image: "https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg",
		gridClass: ""
	},
	{
		name: "Big Mac ",
		image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
		gridClass: "col-span-4 row-span-2"
	},
	{
		name: "Pumpkin Pie",
		image: "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",
		gridClass: ""
	},
	{
		name: "Mustard champ",
		image: "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg",
		gridClass: ""
	},
	{
		name: "Spaghetti Bolognese",
		image: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
		gridClass: ""
	}
];

const TopPicks = () => {
	return (
		<div className="grid grid-cols-8 grid-rows-2 gap-2" >
			{meals.map((meal, index) => (
					<Card meal={meal} key={index} id={index} />
			))}
		</div>
	);
};

export default TopPicks;
