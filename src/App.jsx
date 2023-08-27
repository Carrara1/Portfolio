import HomeNavbar from "./components/HomeNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
	return (
		<>
			<HomeNavbar />
			<HomePage />
			<AboutPage />
			<ProjectsPage />
		</>
	);
}

export default App;
