function ProjectsCard() {
	return (
		<>
			<div className="details-container color-container">
				<div className="article-container"></div>
				<h2 className="experience-sub-title project-title">Project One</h2>
				<div className="btn-container">
					<button
						className="btn btn-color-2 project-btn"
						onClick="location.href='https://github.com/'"
					>
						Github
					</button>
					<button
						className="btn btn-color-2 project-btn"
						onClick="location.href='https://github.com/'"
					>
						Live Demo
					</button>
				</div>
			</div>
		</>
	);
}

export default ProjectsCard;
