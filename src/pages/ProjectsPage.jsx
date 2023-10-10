import ProjectsCard from "../components/ProjectsCard";
import { Row } from "react-bootstrap";

function ProjectsPage() {
	return (
		<div className="projects-page" id="projects">
			<div className="text">
				<h1 className="h1-projects">Projects</h1>
				<br />
				<Row>
					<ProjectsCard
						title="Todo App with Go/React"
						description="This is a simple todo app website made with react and using Go as the backend language."
						githubLink="https://github.com/"
						liveDemoLink=""
					/>
					<ProjectsCard
						title="Portfolio Template"
						description="React-based project where you can use a simplified template to build your own portfolio."
						githubLink="https://github.com/Carrara1/PortfolioTemplate/"
						liveDemoLink=""
					/>
				</Row>
			</div>
		</div>
	);
}

export default ProjectsPage;
