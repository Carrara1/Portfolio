import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import Navbar from "react-bootstrap/Navbar";

function DarkNavbar() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar fixed="top" bg="custom" data-bs-theme="light">
				<Navbar.Brand> Joao Test</Navbar.Brand>

				<Button
					className="ms-auto "
					variant="outline-dark"
					onClick={handleShow}
				>
					. . .
				</Button>

				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Teast</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</Offcanvas.Body>
				</Offcanvas>
			</Navbar>
		</>
	);
}

export default DarkNavbar;
