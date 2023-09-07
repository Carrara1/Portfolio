import Button from "react-bootstrap/Button";

function AboutPage() {
	return (
		<section className="about-page" id="about">
			<div className="bio">
				<div>
					<h1 className="h1-about">About Me</h1>
					<h2 className="h2-about">
						Hi! I am an aspiring full-stack developer who just started his
						journey as a developer.
					</h2>
					<h2 className="h2-about">
						I am always looking for new challenges and at the moment I am
						focused on <br />
						sharpening my React skills in addition to learning skills more and
						more over time.
					</h2>
					<br />
					<h2 className="h2-about">
						I speak Portuguese and English fluently and hope to learn a new
						language in the future,
						<br />
						but my current focus is on improving my technology skills.
					</h2>
					<br />
					<div>
						<Button variant="outline-light">Skills</Button>{" "}
						<Button variant="outline-light">Education</Button>{" "}
						<Button variant="outline-light">Certification</Button>{" "}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
