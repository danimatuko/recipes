import NavBar from "./components/NavBar";
import "./App.css";
import TopPicks from "./components/TopPicks";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { RecipesByDiet } from "./components/RecipesByDiet";
import Newsletter from "./components/Newsletter";

function App() {
	const [topPicks, setTopPicks] = useState(null);
	const DIET_TYPES = ["GlutenFree", "Vegetarian", "Vegan", "Ketogenic"];


	useEffect(() => {
		//	fetchRandomRecipes(5);
	}, []);

	return (
		<div className="App relative">
			<NavBar />
			<Hero />
			<main className="container m-auto ">
				<TopPicks />
				<RecipesByDiet />
				<Newsletter/>
			</main>
			<footer className=""></footer>
		</div>
	);
}

export default App;
