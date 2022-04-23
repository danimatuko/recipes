import NavBar from "./components/NavBar";
import "./App.css";
import TopPicks from "./components/TopPicks";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";

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
				<section>
					<h2 className="text-5xl w-fit mx-auto mb-16 pl-3 border-l-8 border-900 mt-16">
						Diet
					</h2>
				</section>
			</main>
			<footer className=""></footer>
		</div>
	);
}

export default App;
