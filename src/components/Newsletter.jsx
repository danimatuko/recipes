import React from "react";

const Newsletter = () => {
	return (
		<section className="flex flex-col items-center justify-center  bg-slate-700 py-16 text-white font-light">
			<h2 className="text-3xl mb-1">New recipes sent directly to your inbox.</h2>
			<p>
				Easy, elegant recipes to keep you cooking all week long.
				<button className="block m-auto bg-white text-black px-4 py-2 mt-3 ">
					SUBSCRIBE
				</button>
			</p>
		</section>
	);
};

export default Newsletter;
