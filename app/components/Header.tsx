import { Github, Linkedin, Mail, Terminal, Sparkles } from 'lucide-react';

export default function Header() {


	return (
		<header className="mb-24 animate-fade-in-up">
			<div className="flex items-center gap-3 mb-6">
				<Terminal className="w-8 h-8" />
				<span className="text-sm font-mono tracking-wider">DEVELOPER</span>
			</div>

			<h1 className="text-7xl font-bold mb-6 tracking-tight">
				Gabriel Pilati
				<span className="inline-block ml-4 animate-float">
					<Sparkles className="w-12 h-12 text-gray-400" />
				</span>
			</h1>

			<p className="text-2xl text-gray-400 mb-8 max-w-2xl">
				Transformando ideias em código.
				<br />
				<span className="text-lg">Full Stack Developer</span>
			</p>

			<div className="flex gap-6">
				<a
					target="blank"
					href="https://github.com/Pilatii"
					className="group flex items-center gap-2 border border-gray-700 px-6 py-3 hover:border-white transition-all duration-300"
				>
					<Github className="w-5 h-5" />
					<span className="font-mono">GitHub</span>
				</a>
				<a
					target="blank"
					href="https://www.linkedin.com/in/gabriel-pilati-914939196/"
					className="group flex items-center gap-2 border border-gray-700 px-6 py-3 hover:border-white transition-all duration-300"
				>
					<Linkedin className="w-5 h-5" />
					<span className="font-mono">LinkedIn</span>
				</a>
				<a
					target="blank"
					href="mailto:gabrielms1504@gmail.com"
					className="group flex items-center gap-2 border border-gray-700 px-6 py-3 hover:border-white transition-all duration-300"
				>
					<Mail className="w-5 h-5" />
					<span className="font-mono">Contato</span>
				</a>
			</div>
		</header>
	)
}