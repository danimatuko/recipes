import React from "react";

const Hero = () => {
	return (
		<header className="container mx-auto min-h-screen">
			<div className="hero grid grid-cols-2">
				<h1 className="text-5xl  self-center">
					Whether you're after an old favourite or inspiration for something new, we have
					the perfect recipe.
				</h1>
				<div>
					<img
						src="https://static.vecteezy.com/system/resources/previews/002/760/297/non_2x/couple-cooking-illustration-concept-free-vector.jpg"
						alt="cooking"
					/>
				</div>
			</div>
		</header>
	);
};

export default Hero;
