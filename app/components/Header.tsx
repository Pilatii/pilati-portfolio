import { Github, Linkedin, Mail, Terminal, Sparkles } from 'lucide-react';

export default function Header() {


	return (
		<header className="mb-24">
			<div className="flex items-center gap-3 mb-6">
				<Terminal className="w-8 h-8" />
				<span className="text-sm font-mono tracking-wider">DEVELOPER</span>
			</div>

			<h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
				Gabriel Pilati
				<span className="inline-block ml-4 animate-float">
					<Sparkles className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
				</span>
			</h1>

			<p className="text-lg md:text-2xl text-gray-400 mb-8 max-w-2xl">
				Full Stack Developer
			</p>

			<div className="flex max-[420px]:justify-between justify-start max-[420px]:gap-0 gap-4 md:gap-6">
				<a
					target="blank"
					href="https://github.com/Pilatii"
					className="group flex items-center text-sm sm:text-base gap-2 border border-gray-700 px-2.5 py-2 sm:px-6 sm:py-3 hover:border-white transition-all duration-300"
				>
					<Github className="w-3 h-3 sm:w-5 sm:h-5" />
					<span className="font-mono">GitHub</span>
				</a>
				<a
					target="blank"
					href="https://www.linkedin.com/in/gabriel-pilati-914939196/"
					className="group flex items-center text-sm sm:text-base gap-2 border border-gray-700 px-2.5 py-2 sm:px-6 sm:py-3 hover:border-white transition-all duration-300"
				>
					<Linkedin className="w-3 h-3 sm:w-5 sm:h-5" />
					<span className="font-mono">LinkedIn</span>
				</a>
				<a
					target="blank"
					href="mailto:gabrielms1504@gmail.com"
					className="group flex items-center text-sm sm:text-base gap-2 border border-gray-700 px-2.5 py-2 sm:px-6 sm:py-3 hover:border-white transition-all duration-300"
				>
					<Mail className="w-3 h-3 sm:w-5 sm:h-5" />
					<span className="font-mono">Contato</span>
				</a>
			</div>
		</header>
	)
}