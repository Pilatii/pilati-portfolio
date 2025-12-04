import BackgroundGrid from "./components/BackgroundGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsCards from "./components/ProjectsCards";
import SkillsCards from "./components/SkillsCards";
import TechStack from "./components/TechStack";

export default function Home() {

	return (
		<>
			<BackgroundGrid>
				<Header />
				<SkillsCards />
				<ProjectsCards />
				<TechStack />
				<Footer />
			</BackgroundGrid>
		</>
	);
}
