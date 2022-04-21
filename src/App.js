import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="hero grid grid-cols-2">
				<h1 className="text-5xl  self-center px-32 ">
					Whether you're after an old favourite or inspiration for something new, we have
					the perfect recipe.
				</h1>
				<div className="">
					<img
						className="w-5/6"
						src="https://static.vecteezy.com/system/resources/previews/002/760/297/non_2x/couple-cooking-illustration-concept-free-vector.jpg"
						alt="cooking"
					/>
				</div>
			</div>
			<main className="container mx-auto"></main>

			<footer className="absolute bottom-0">footer</footer>
		</div>
	);
}

export default App;
