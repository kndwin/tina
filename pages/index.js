import Head from "next/head";
import Typist from "react-text-typist";
import Image from "next/image";
import Link from "next/link";

import AnxietyAndMePic from "../public/landing-page/anxiety-and-me.png";
import SparxLabPic from "../public/landing-page/sparx-lab-display.png";
import AffordablePic from "../public/landing-page/affordable-display.png";
import CalendarPic from "../public/landing-page/calendar-display.png";
import OrangeSkyPic from "../public/landing-page/orange-sky-display.png";
import LittleUnwellPic from "../public/landing-page/little-unwell-display.png";
import InfographicPic from "../public/landing-page/infographic.png";
import MoonlightPic from "../public/landing-page/moonlight-display.jpg";
import ContactMe from "components/contactMe";

export default function Home() {
  const projects = [
    {
      title: "Anxiety and Me",
      type: "Book cover design",
      image: AnxietyAndMePic,
      url: "/projects/anxiety-and-me",
    },
    {
      title: "Sparx Lab",
      type: "Brand and Web design",
      image: SparxLabPic,
      url: "/projects/sparx-lab",
    },
    {
      title: "Affordable Dentures and Implants",
      type: "Brand and Web Design",
      image: AffordablePic,
			url: '/projects/affordable-dentures'
    },
    {
      title: "2022 Calendars",
      type: "Calendar Designs",
      image: CalendarPic,
			url: '/projects/calendars'
    },
    {
      title: "Little Unwell",
      type: "Project about Mental Health awareness",
      image: LittleUnwellPic,
			url: '/error'
    },
    {
      title: "Orange Sky Rebrand",
      type: "Project redesignin brand",
      image: OrangeSkyPic,
			url: '/projects/orange-sky'
    },
    {
      title: "Infographic of the Bible",
			type: "Personal Project",
      image: InfographicPic,
			url: '/error'
    },
    {
      title: "Moonlight",
      type: "3D Modelling Lamp",
      image: MoonlightPic,
			url: '/projects/moonlight'
    },
  ];
  return (
    <>
      <Head>
        <title>Tina Dairy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="w-full my-8 text-left">
          <h1 className="text-3xl font-recoleta color-primary">
            Hello! I'm a designer and I like to <br />
            <Typist
              deletingSpeed={65}
              pauseTime={2000}
              typingSpeed={80}
              showCursor={false}
              sentences={[
                "design book covers",
                "design websites",
                "design 3D models",
                "design stationery",
                "design signage",
                "printmake",
                "illustrate",
              ]}
              loop={true}
						/>
					</h1>
					<ContactMe />
				</div>
			<div className="flex flex-col w-full sm:grid grid-cols-2 gap-6">
          {projects.map(({ title, type, image, url }) => (
            <Link key={title} className="w-full" href={url ?? "/"}>
              <div className="flex flex-col text-left cursor-pointer">
								<div className='w-full h-full hover:brightness-75'>
									<Image
										src={image}
										placeholder="blur"
										height={200}
										width={300}
										layout="responsive"
										className="object-cover rounded-md"
									/>
								</div>
                <p className="mt-4 color-primary font-recoleta">{title}</p>
                <p className="mb-8 color-primary font-recoleta">{type}</p>
              </div>
            </Link>
          ))}
        </div>
    </>
  );
}
