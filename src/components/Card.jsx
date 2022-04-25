import React from "react";
import parse from "html-react-parser";

const Card = ({ recipe, id }) => {
	return (
		<div className="mx-0 flex w-full h-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
			<img
				className="aspect-video  rounded-t-2xl object-cover object-center h-full overflow-hidden"
				src={recipe.image}
			/>
			<div className="p-4">
				<small className="text-xs text-gray-500 font-bold pr-0.5">
					{`${recipe.readyInMinutes} min`}
				</small>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-4 inline"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<h1 className="text-2xl font-medium text-slate-600 text-ellipsis overflow-hidden">
					{recipe.title}
				</h1>
				<p className="text-sm tracking-tight font-light text-slate-400 leading-6 h-12 text-ellipsis overflow-hidden line-clamp-2">
					{parse(`${recipe.summary}...`)}
				</p>
			</div>
		</div>
	);
};

export default Card;
