import { User, Pen } from 'lucide-react';

export default function AboutMe() {
	return (
		<div className="mb-24">
			<h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
				<Pen className="w-8 h-8" />
				Sobre mim
			</h2>

			<div className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors duration-200">
				<div className="flex items-center gap-3 mb-6">

				</div>

				<div className="space-y-4 text-gray-400 leading-relaxed">
					<p>
						Sou desenvolvedor full stack com foco em criar projetos que resolvam problemas reais.
						Já trabalhei em projetos que envolveram autenticação, controle de acesso, controle de renderização e estratégias de proteção contra abuso.
					</p>

					<p>
						Atualmente, busco oportunidades onde eu possa contribuir e crescer.
						Estou aberto a aprender novas tecnologias e a colaborar em projetos que exijam responsabilidade técnica.
						Gosto de ambientes em que as pessoas compartilham conhecimento, discutem soluções e se importam com a qualidade do que está sendo entregue.
					</p>
				</div>
			</div>
		</div>
	)
}