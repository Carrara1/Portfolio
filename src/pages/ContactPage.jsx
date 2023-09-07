import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.SERVICE_ID,
				import.meta.env.TEMPLATE_ID,
				form.current,
				import.meta.env.PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent!");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="contact-page">
			<div className="text" id="contact">
				<h1 className="h1">Let's Contact</h1>
				<p>
					I am always looking for new opportunities, so feel free to contact me,
					I'll try my best to get back to you as soon as possible!
				</p>
				<br />
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
}

export default ContactPage;
