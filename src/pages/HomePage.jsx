import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import SocialButtons from "../components/SocialButtons";

const HomePage = () => {
	return (
		<div>
			<div className="home-background">
				<div className="home-page">
					<div className="bio">
						<div className="container-home">
							<h1 className="h1-home">Olá! Meu nome é:</h1>
							<h2 className="h2-home">João Carrara</h2>
							<h1 className="h1-home">
								Desenvolvedor Full-stack | Estudante de Análise de Sistemas
							</h1>
							<h3 className="h3-home">
								<Typewriter
									options={{
										strings: [
											"React",
											"Javascript",
											"Python",
											"HTML/CSS",
											"NodeJS",
											"SQL",
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</h3>
							<br />
							<Button
								className="curriculum-btn"
								href="https://drive.google.com/file/d/1yGRX37xOd76kc9cSOOkNcH1Dds1nb7TV/view?usp=sharing"
								title="Curriculum Vitae"
								target="_blank"
							>
								<span className="text">Currículo</span>
							</Button>
							<br />
							<SocialButtons />
						</div>{" "}
					</div>
				</div>
				<a className="arrow" href="#about"></a>
			</div>
		</div>
	);
};

export default HomePage;
