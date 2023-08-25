import { useState } from "react";
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
			<Navbar fixed="top" bg="custom" data-bs-theme="light">
				<Navbar.Brand onClick={handleBrandClick}> J </Navbar.Brand>
				<Modal
					show={showModal}
					onHide={handleCloseModal}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>EasterEggL</Modal.Title>
					</Modal.Header>
					<Modal.Body>Congrats, you found the easteregg!</Modal.Body>
				</Modal>

				<Button className="ms-auto" variant="">
					Home
				</Button>
				<Button className="nav-buttons" variant="">
					About
				</Button>
				<Button className="nav-buttons" variant="">
					Portfolio
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
