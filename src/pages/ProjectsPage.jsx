import ProjectsCard from "../components/ProjectsCard";

function ProjectsPage() {
	return (
		<div className="projects-page">
			<div className="bio">
				<div className="text" id="projects">
					<h1 className="h1-projects">Projects</h1>
					<ProjectsCard />
				</div>
			</div>
		</div>
	);
}

export default ProjectsPage;
