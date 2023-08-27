import { useState, useRef } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";

function HomeNavbar() {
	const [clickCount, setClickCount] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const ref = useRef(null);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const handleBrandClick = () => {
		setClickCount(clickCount + 1);

		if (clickCount === 10) {
			setShowModal(true);
		}
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<Navbar fixed="top" data-bs-theme="light">
				<Navbar.Brand onClick={handleBrandClick}> J.C. </Navbar.Brand>
				<Modal
					show={showModal}
					onHide={handleCloseModal}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>EasterEgg</Modal.Title>
					</Modal.Header>
					<Modal.Body>Congrats, you found the easteregg!</Modal.Body>
				</Modal>

				<Button ref={ref} onClick={scrollToTop} className="ms-auto" variant="">
					Home
				</Button>
				<Button
					onClick={() => window.location.replace("#about")}
					className="nav-buttons"
					variant=""
				>
					About
				</Button>
				<Button
					onClick={() => window.location.replace("#projects")}
					className="nav-buttons"
					variant=""
				>
					Projects
				</Button>

				<Button className="ms-auto" variant="outline-dark" onClick={handleShow}>
					Contact Me!
				</Button>

				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Contact me:</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>Lorem Ipsum</Offcanvas.Body>
				</Offcanvas>
			</Navbar>
		</>
	);
}

export default HomeNavbar;
