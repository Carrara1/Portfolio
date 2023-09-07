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
			<Card.Img className="projects-card-img" variant="top" src={imgSrc} />
			<Card.Title>
				<h2 className="h2-projects">{title}</h2>
			</Card.Title>
			<Card.Body>
				<Card.Text>{description}</Card.Text>
				<Button
					className="projects-button"
					variant="outline-primary"
					onClick={() => (window.location.href = githubLink)}
				>
					Github
				</Button>
				<Button
					className="projects-button"
					variant="outline-primary"
					onClick={() => (window.location.href = liveDemoLink)}
				>
					Live Demo
				</Button>
			</Card.Body>
		</Card>
	);
}

export default ProjectsCard;
