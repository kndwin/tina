import Head from "next/head";
import Layout from "../components/layout";
import { SiGmail, SiLinkedin, SiInstagram } from "react-icons/si";
import Typist from "react-text-typist";
import Image from "next/image";
import Link from "next/link";

import AnxietyAndMePic from "../public/landing-page/anxiety-and-me.png";
import SparxLabPic from "../public/landing-page/sparx-lab-display.png";
import AffordablePic from "../public/landing-page/affordable-display.png";
import CalendarPic from "../public/landing-page/calendar-display.png";
import Anatomic4dPic from "../public/landing-page/anatomic4d-display.jpg";
import OrangeSkyPic from "../public/landing-page/orange-sky-display.png";
import LittleUnwellPic from "../public/landing-page/little-unwell-display.png";
import MoonlightPic from "../public/landing-page/moonlight-display.jpg";

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
    },
    {
      title: "Affordable Dentures and Implants",
      type: "Brand and Web Design",
      image: AffordablePic,
    },
    {
      title: "2022 Calendars",
      type: "Calendar Designs",
      image: CalendarPic,
    },
    {
      title: "Anatomic4d",
      type: "Brand and Web Design",
      image: Anatomic4dPic,
    },
    {
      title: "Orange Sky Rebrand",
      type: "Project redesignin brand",
      image: OrangeSkyPic,
    },
    {
      title: "Little Unwell",
      type: "Project about Mental Health awareness",
      image: LittleUnwellPic,
    },
    {
      title: "Moonlight",
      type: "3D Modelling Lamp",
      image: MoonlightPic,
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
        </div>
        <div className="flex flex-col w-full sm:grid grid-cols-2 gap-6">
          {projects.map(({ title, type, image, url }) => (
            <Link key={title} className="w-full" href={url ?? "/"}>
              <div className="flex flex-col text-left cursor-pointer">
								<div className='w-full h-full p-2 boxshadow rounded-md'>
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
