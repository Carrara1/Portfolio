import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";

const HomePage = () => {
	return (
		<div>
			<div className="home-background">
				<div className="home-page">
					<div className="bio">
						<h1 className="h1-home">Hey! I am</h1>
						<h2 className="h2-home">Joao Carrara</h2>
						<h1 className="h1-home">
							Software Developer | Computer Science Student
						</h1>
						<h3 className="h3-home">
							<Typewriter
								options={{
									strings: ["React", "Javascript", "Python", "HTML", "CSS"],
									autoStart: true,
									loop: true,
								}}
							/>
						</h3>
						<br />
						<Button
							className="curriculum-btn"
							href="src/assets/CurriculumVitae.pdf"
							title="Curriculum Vitae"
							download
						>
							<span className="text">Download CV</span>
						</Button>
					</div>
					<div className="socials"></div>
				</div>
				<a className="arrow" href="#about"></a>
			</div>
		</div>
	);
};

export default HomePage;
