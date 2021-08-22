import Head from "next/head";
import Layout from "../components/layout";
import { SiGmail, SiLinkedin, SiInstagram } from "react-icons/si";
import Typist from 'react-text-typist'

export default function Home() {
  const projects = [
    {
      title: "Anxiety and Me",
      type: "Book cover design",
      image: "/landing-page/anxiety-and-me.png",
    },
    {
      title: "Sparx Lab",
      type: "Brand and Web design",
      image: "/landing-page/sparx-lab-display.png",
    },
    {
      title: "Affordable Dentures and Implants",
      type: "Brand and Web Design",
      image: "/landing-page/affordable-display.png",
    },
    {
      title: "2022 Calendars",
      type: "Calendar Designs",
      image: "/landing-page/calendar-display.png",
    },
    {
      title: "Anatomic4d",
      type: "Brand and Web Design",
      image: "/landing-page/anatomic4d-display.jpg",
    },
    {
      title: "Orange Sky Rebrand",
      type: "Project redesignin brand",
      image: "/landing-page/orange-sky-display.png",
    },
    {
      title: "Little Unwell",
      type: "Project about Mental Health awareness",
      image: "/landing-page/little-unwell-display.png",
    },
    {
      title: "Moonlight",
      type: "3D Modelling Lamp",
      image: "/landing-page/moonlight-display.jpg",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex flex-col items-center justify-center 
				container flex-1 px-20 text-center mx-auto px-4 max-w-2xl"
      >
        <div className="w-full text-left my-8">
          <h1 className="font-recoleta color-primary text-3xl">
            Hello! I'm a designer and I like to <br />
            <Typist
              deletingSpeed={65}
              pauseTime={2000}
              typingSpeed={80}
							showCursor={false}
              sentences={[
                'design book covers',
                'design websites',
                'design 3D models',
                'design stationery',
                'design signage',
								'printmaking',
								'illustrating'
              ]}
              loop={true}
            />
          </h1>
          <div className="flex items-center">
            <p className="font-recoleta color-primary text-lg mr-2">Contact me</p>
            <div className="flex items-center">
              <SiGmail className="color-primary" />
              <SiLinkedin className="color-primary mx-2" />
              <SiInstagram className="color-primary" />
            </div>
          </div>
        </div>
        <div className="w-full sm:grid grid-cols-2 gap-6 flex flex-col">
          {projects.map(({ title, type, image }) => (
            <div key={title} className="w-full text-left">
              <img src={image} alt="" className="w-full h-60 object-cover" />
              <p className="color-primary font-recoleta mt-4">{title}</p>
              <p className="color-primary font-recoleta mb-8">{type}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
