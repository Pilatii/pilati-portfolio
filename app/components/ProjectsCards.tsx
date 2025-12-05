"use client"

import { Code2 } from 'lucide-react';
import { useEffect, useState } from "react";

type Project = {
	id: string
	title: string
	techs: string[]
	url: string
}


export default function ProjectsCards() {

	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		fetch("/api/projects")
			.then(res => res.json())
			.then(data => {
				setProjects(data.projects);
			});
	}, []);

	return (
		<section className="mb-24 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
			<h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
				<Code2 className="w-8 h-8" />
				Projetos
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, idx) => (
					<a
						href={project.url}
						target="blank"
						key={idx}
						className="border border-gray-800 p-8 hover:border-white hover:translate-x-2 transition-all duration-300 group cursor-pointer">
						<div className="flex justify-between items-start mb-4">
							<h3 className="text-2xl font-bold group-hover:text-gray-300 transition-colors">
								{project.title}
							</h3>
						</div>
						<p className="text-gray-500 font-mono text-sm mb-4">{project.techs.join(", ")}</p>
						<div className="w-12 h-0.5 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
					</a>
				))}
			</div>
		</section>
	)
}