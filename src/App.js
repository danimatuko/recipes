import NavBar from "./components/NavBar";
import "./App.css";
import TopPicks from "./components/TopPicks";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { RecipesByDiet } from "./components/RecipesByDiet";

function App() {
	const [topPicks, setTopPicks] = useState(null);

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
			</main>
			<footer className=""></footer>
		</div>
	);
}

export default App;
