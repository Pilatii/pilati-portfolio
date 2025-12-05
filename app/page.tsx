import AboutMe from "./components/AboutMe";
import BackgroundGrid from "./components/BackgroundGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsCards from "./components/ProjectsCards";
import TechStack from "./components/TechStack";

export default function Home() {

	return (
		<>
			<BackgroundGrid>
				<Header />
				<AboutMe />
				<ProjectsCards />
				<TechStack />
				<Footer />
			</BackgroundGrid>
		</>
	);
}
