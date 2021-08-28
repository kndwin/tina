import { SiGmail, SiLinkedin, SiInstagram } from "react-icons/si";
import DownloadIcon from "components/svgs/download.svg";

const ContactMe = (props) => {
	return (
		<div className="flex items-center mt-4">
			<p className="mr-4 text-xl font-recoleta color-primary">
				Contact me
			</p>
			<div className="flex items-center justify-center">
				<a href="mailto:tinadairy@gmail.com">
					<SiGmail className="cursor-pointer color-primary" />
				</a>
				<a href="https://www.linkedin.com/in/tina-nguyen-158931207/">
					<SiLinkedin className="mx-2 cursor-pointer color-primary" />
				</a>
				<a href="https://www.instagram.com/thetinadairy/">
					<SiInstagram className="cursor-pointer color-primary" />
				</a>
				<a href="/TinaNguyen.pdf">
					<button className="flex items-center px-2 py-1 ml-4 text-sm buttonPrimary border-primary color-primary font-recoleta rounded-md">
						Resume
						<DownloadIcon className="ml-2" />
					</button>
				</a>
			</div>
		</div>
	)
}

export default ContactMe
