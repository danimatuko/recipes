import React from "react";

const Card = ({ meal, id }) => {
	return (
		<div className={`col-span-2 ${meal.gridClass}`}>
			<div className="mx-0 flex w-full h-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
				<img
					className="aspect-video  rounded-t-2xl object-cover object-center h-full"
					src={meal.image}
				/>
				<div className="p-4">
					<small className="text-blue-400 text-xs">Automobile company</small>
					<h1 className="text-2xl font-medium text-slate-600 pb-2">{meal.name}</h1>
					<p className="text-sm tracking-tight font-light text-slate-400 leading-6">
						Dodge is an American brand of automobiles and a division of Stellantis,
						based in Auburn Hills, Michigan..
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
