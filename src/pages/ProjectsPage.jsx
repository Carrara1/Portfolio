import ProjectContainer from "../components/ProjectContainer";

function ProjectsPage() {
	return (
		<div className="projects-page" id="projects">
			<div className="container-about">
				<div className="text">
					<h1 className="h1-projetos">Meus projetos</h1>
					<p className="p-projects">Explore meu portfólio.</p>
					<br />
					<ProjectContainer />
				</div>
			</div>
		</div>
	);
}

export default ProjectsPage;
