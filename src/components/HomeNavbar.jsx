import { useRef } from "react";
import Button from "react-bootstrap/Button";

import Navbar from "react-bootstrap/Navbar";

function HomeNavbar() {
	const ref = useRef(null);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<>
			<Navbar fixed="top" className="navbar">
				<Navbar.Brand> J.C. </Navbar.Brand>

				<Button
					ref={ref}
					onClick={scrollToTop}
					className="nav-buttons"
					variant=""
				>
					Início
				</Button>
				<Button
					onClick={() => window.location.replace("#about")}
					className="nav-buttons"
					variant=""
				>
					Sobre mim
				</Button>
				<Button
					onClick={() => window.location.replace("#projects")}
					className="nav-buttons"
					variant=""
				>
					Projetos
				</Button>
			</Navbar>
		</>
	);
}

export default HomeNavbar;

//EN US button currently not working yet
// 				 <Button variant="outline-dark" onClick={handleLanguageToggle}> */
// {currentLanguage === "EN-US" ? "PT-BR " : "EN-US "}
// {currentLanguage === "EN-US" ? <BsToggleOff /> : <BsToggleOn />}
// </Button>
