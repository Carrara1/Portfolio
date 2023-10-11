import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialButtons() {
	return (
		<div className="socials">
			<a
				className="GithubLink"
				href="https://github.com/Carrara1"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faGithub} className="social-logo" href />
			</a>
			<a
				className="LinkedinLink"
				href="https://www.linkedin.com/in/queirozcarrara/"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faLinkedin} className="social-logo" />
			</a>
			<a
				className="DevToLink"
				href="https://dev.to/carrara1"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faDev} className="social-logo" />
			</a>
			<a className="EmailLink" href="" rel="noreferrer" target="_blank">
				<FontAwesomeIcon icon={faEnvelope} className="social-logo" />
			</a>
		</div>
	);
}

export default SocialButtons;
