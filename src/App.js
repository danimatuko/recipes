import NavBar from "./components/NavBar";
import "./App.css";
import TopPicks from "./components/TopPicks";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { RecipesByDiet } from "./components/RecipesByDiet";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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
			<main>
				<div className="container m-auto">
					<TopPicks />
					<RecipesByDiet />
				</div>
				<Newsletter />
			</main>
			<Footer/>
		</div>
	);
}

export default App;
