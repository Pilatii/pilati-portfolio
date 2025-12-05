"use client"

import { useEffect, useState } from "react";
import { Code2, Layout, Server, Boxes, Lightbulb, GitBranch, Wrench } from 'lucide-react';

type Tech = {
	id: string
	group: string
	techs: string[]
}

export default function TechStack() {

	const [techList, setTechList] = useState<Tech[]>([]);

	useEffect(() => {
		fetch("/api/tech-stack")
			.then(res => res.json())
			.then(data => {
				setTechList(data.techs);
			});
	}, []);

	return (
		<section>
			<h2 className="text-4xl font-bold mb-12">Competencias</h2>

			<div className="grid grid-cols-1  gap-6">
				{techList.map((tech, index) => {
					return (
						<div
							key={index}
							className="border border-gray-800 p-6 hover:border-gray-800 transition-colors duration-200"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 bg-white rounded-lg border border-gray-800"></div>
								<h2 className="text-xl font-semibold text-white">{tech.group}</h2>
							</div>

							<div className="flex flex-wrap gap-2">
								{tech.techs.map((item, itemIndex) => (
									<span
										key={itemIndex}
										className="px-3 py-1.5 rounded-full text-sm text-gray-400 hover:bg-white transition-colors duration-200 hover:text-black border border-gray-800"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	)
}