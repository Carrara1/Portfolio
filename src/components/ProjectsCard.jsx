import { Card, Button } from "react-bootstrap";

function ProjectsCard({
	imgSrc,
	title,
	description,
	githubLink,
	liveDemoLink,
}) {
	return (
		<Card className="projects-card">
			<Card.Title>
				<h2 className="h2-projects">{title}</h2>
			</Card.Title>
			<Card.Body>
				<Card.Text>{description}</Card.Text>
				<br />
				<Button
					className="projects-button"
					variant="dark"
					onClick={() => (window.location.href = githubLink)}
				>
					Github
				</Button>
				<Button
					className="projects-button"
					variant="dark"
					onClick={() => (window.location.href = liveDemoLink)}
				>
					Live Demo
				</Button>
			</Card.Body>
		</Card>
	);
}

export default ProjectsCard;
