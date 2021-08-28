import ContactMe from "components/contactMe";
import Image from "next/image";

import Profile from "../public/profile.png";

const About = (props) => {
  const tagline = `Hi there! My name is Tina 😊 and I’ve been designing for quite some time.  I’m always looking for new skills to learn.

In my spare time, I like to draw, rollerskate and am a big tea drinker (black tea is a no-no).

If you have a project that you would like to bring to life then I would love  to collaborate with you in doing so.`;

  return (
    <div className='flex flex-col items-start flex-1 pt-8'>
      <h1 className="w-full my-8 text-7xl font-recoleta color-primary">
        about me
      </h1>
      <div className="flex flex-col justify-center w-full h-full sm:flex-row">
        <div className="flex-col justify-between flex-1 h-full">
          <p className="mb-12 text-xl whitespace-pre-wrap font-manrope">{tagline}</p>
          <ContactMe />
        </div>
        <div className="flex-1 w-full h-full mt-12 sm:mt-0 sm:ml-16">
          <Image src={Profile} />
        </div>
      </div>
    </div>
  );
};

export default About;
