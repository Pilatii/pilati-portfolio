"use client"

import { useEffect, useState } from "react";

type Tech = {
	id: string;
	name: string;
}

export default function TechStack() {

	const [techList, setTechList] = useState<Tech[]>([]);
	
		useEffect(() => {
			fetch("/api/tech-stack")
				.then(res => res.json())
				.then(data => {
					setTechList(data.projects);
				});
		}, []);

	return (
		<section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
			<h2 className="text-4xl font-bold mb-12">Competencias</h2>

			<div className="flex flex-wrap gap-4">
				{techList.map((tech, idx) => (
					<span
						key={idx}
						className="border border-gray-800 px-6 py-3 font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 cursor-default">
						{tech.name}
					</span>
				))}
			</div>
		</section>
	)
}