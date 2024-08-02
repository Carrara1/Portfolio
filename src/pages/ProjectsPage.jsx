import ProjectContainer from "../components/ProjectContainer";

function ProjectsPage() {
	return (
		<div className="projects-page" id="projects">
			<div className="container-about">
				<div className="text">
					<h1 className="h1-projetos">Meus projetos</h1>
					<p className="p-projects">Explore meu portfólio.</p>
					<br />
					<div className="projects-wrapper">
						{/* <ProjectContainer
							imageSrc="https://github.com/Carrara1/Portfolio/blob/main/src/assets/triplesclone.png?raw=true"
							title="triplescosmos-clone"
							text="Um clone do website oficial do grupo de K-Pop tripleS, com todas as funcionalidades."
							btnUrl="https://example.com"
							btnText="Acessar"
						/> */}
						<ProjectContainer
							imageSrc="https://github.com/Carrara1/Portfolio/blob/main/src/assets/projectshp.png?raw=true"
							title="Portfólio"
							text="Link para o GitHub do meu portfólio. Foi refeito em ReactJS, após ter realizado a primeira versão em JavaScript vanilla. 
							Tecnologias usadas: ReactJS, Bootstrap"
							btnUrl="https://github.com/Carrara1/Portfolio"
							btnText="Acessar"
						/>
						<ProjectContainer
							imageSrc="https://github.com/Carrara1/Portfolio/blob/main/src/assets/triplesclone.png?raw=true"
							title="Sistema de chatrooms em ReactJS e NodeJS"
							text="Um sistema full-stack de chatroom com opções de criar e entrar em diversos chats, com o sistema de chat instantâneo.
							Tecnologias usadas: ReactJS, NodeJS	"
							btnUrl="https://example.com"
							btnText="Acessar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectsPage;
