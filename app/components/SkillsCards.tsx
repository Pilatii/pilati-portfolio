export default function SkillsCards() {
	return (
		<section className="mb-24 grid grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
			{[
				{
					icon: '🚀',
					title: 'Aprendizado Rápido',
					description: 'Adaptação ágil a novas tecnologias e frameworks'
				},
				{
					icon: '💡',
					title: 'Resolução de Problemas',
					description: 'Abordagem criativa e lógica para desafios técnicos'
				},
				{
					icon: '🧠',
					title: 'Aperfeiçoamento constante',
					description: 'Buscando aprender e melhorar todos os dias'
				}
			].map((skill, idx) => (
				<div
					key={idx}
					className="border border-gray-800 p-8 hover:border-white transition-all duration-300 group">
					<div className="text-4xl mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300 inline-block">
						{skill.icon}
					</div>
					<h3 className="text-xl font-bold mb-2">{skill.title}</h3>
					<p className="text-gray-500 text-sm">{skill.description}</p>
				</div>
			))}
		</section>
	)
}