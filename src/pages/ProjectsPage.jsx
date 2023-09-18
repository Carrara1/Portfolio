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
						imgSrc="src/assets/holder.png"
						title="Project One"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
						githubLink="https://github.com/"
						liveDemoLink=""
					/>

					<ProjectsCard
						imgSrc="src/assets/holder.png"
						title="Project Two"
						description="Another project description here."
						githubLink="https://github.com/"
						liveDemoLink=""
					/>
				</Row>
			</div>
		</div>
	);
}

export default ProjectsPage;
