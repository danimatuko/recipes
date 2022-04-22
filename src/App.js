import NavBar from "./components/NavBar";
import "./App.css";
import Card from "./components/Card";
import Cards from "./components/TopPicks";
import TopPicks from "./components/TopPicks";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="container mx-auto min-h-screen">
				<div className="hero grid grid-cols-2">
					<h1 className="text-5xl  self-center">
						Whether you're after an old favourite or inspiration for something new, we
						have the perfect recipe.
					</h1>
					<div>
						<img
							src="https://static.vecteezy.com/system/resources/previews/002/760/297/non_2x/couple-cooking-illustration-concept-free-vector.jpg"
							alt="cooking"
						/>
					</div>
				</div>
			</div>
			<main className="container m-auto ">
				<h2 className="text-5xl w-fit mx-auto mb-16 pl-3 border-l-8 border-900">
					Top Picks
				</h2>
				<TopPicks />
			</main>

			<footer className="absolute bottom-0"></footer>
		</div>
	);
}

export default App;
