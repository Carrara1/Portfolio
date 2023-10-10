import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
						<br />A few of my hobbies are going to the gym and listening to
						music in my free time.
					</h2>
					<br />
					<Tabs defaultActiveKey="skils" className="about-tabs">
						<Tab eventKey="Skills" title="Skills" className="about-tabs-names">
							<Tab.Content className="skills">
								<div className="tab-content-skills">React</div>
								<div className="tab-content-skills">Javascript</div>
								<div className="tab-content-skills">Python</div>
								<div className="tab-content-skills">NodeJS</div>
								<div className="tab-content-skills">HTML / CSS</div>
								<div className="tab-content-skills">Git</div>
								<div className="tab-content-skills">GitHub</div>
							</Tab.Content>
						</Tab>
						<Tab
							eventKey="Education"
							title="Education"
							className="about-tabs-names"
						>
							<Tab.Content>
								<div className="education-content">
									<h1 className="h1-about-2">Academic Formation</h1>
									<hr />
									<h2 className="h2-about">Faculdade das Américas</h2>
									<h3 className="h3-about">
										Análise e Desenvolvimento de Sistemas / Systems Analysis and
										Development
									</h3>
									<p>2022-2024</p>
								</div>
								<br />
								<div className="education-content">
									<h1 className="h1-about-2">Complementary Courses</h1>
									<hr />
									<h2 className="h2-about">Udemy</h2>
									<h3 className="h3-about">
										The Complete 2023 Web Development Bootcamp <br />
										The Complete JavaScript Course 2023: From Zero to Expert
										<br /> One Week Python <br />
										Information Technology Essentials <br />
										The Git & Github Bootcamp
									</h3>
								</div>
							</Tab.Content>
						</Tab>
					</Tabs>
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
