import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className=" bg-gray-200 py-3 ">
			<div className="container mx-auto flex items-center">
				<div className="logo font-bold text-2xl inline-block mr-5">RECIPES</div>
				<div className="flex justify-between items-center w-full">
					<ul className="flex w-1/3">
						<li className="mr-2">
							<Link to="/">Home</Link>
						</li>
						<li className="mr-2">
							<Link to="/about">About</Link>
						</li>
					</ul>
					<div>
						<input className="mr-3 rounded h-8" type="text"  />
						<button className="bg-blue-300 py-1 px-3 rounded">Search</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
