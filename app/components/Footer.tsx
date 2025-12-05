export default function Footer() {
	return (
		<footer className="mt-32 pt-12 border-t border-gray-900">
			<div className="flex justify-between items-center">
				<p className="text-gray-600 font-mono text-sm">
					© 2025 Gabriel Pilati. Desenvolvido com React.
				</p>
				<div className="hidden md:flex gap-4 text-gray-600">
					<a target="blank" href="https://github.com/Pilatii" className="hover:text-white transition-colors">GitHub</a>
					<span>•</span>
					<a target="blank" href="https://www.linkedin.com/in/gabriel-pilati-914939196/" className="hover:text-white transition-colors">LinkedIn</a>
					<span>•</span>
					<a target="blank" href="mailto:gabrielms1504@gmail.com" className="hover:text-white transition-colors">Email</a>
				</div>
			</div>
		</footer>
	)
}