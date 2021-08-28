import { SiGmail, SiLinkedin, SiInstagram } from "react-icons/si";

const ContactMe = (props) => {
	return (
		<div className="flex items-center mt-4">
			<p className="mr-4 text-lg font-recoleta color-primary">
				Contact me
			</p>
			<div className="flex items-center">
				<a href="mailto:tinadairy@gmail.com">
					<SiGmail className="cursor-pointer color-primary" />
				</a>
				<a href="https://www.linkedin.com/in/tina-nguyen-158931207/">
					<SiLinkedin className="mx-2 cursor-pointer color-primary" />
				</a>
				<a href="https://www.instagram.com/thetinadairy/">
					<SiInstagram className="cursor-pointer color-primary" />
				</a>
			</div>
		</div>
	)
}

export default ContactMe
