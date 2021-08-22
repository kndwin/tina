import Layout from "../../components/layout";
import Image from "next/image";

import FrontCover from "../../public/anxiety-and-me/Anxiety and Me Front.png";

const AnxietyAndMe = (props) => {
  return (
    <Layout>
      <main className="container flex-1 w-full max-w-2xl">
				<div className="flex flex-col-reverse w-full px-10 my-8 sm:flex-row" 
					style={{ height: 'fit-content'}}>
          <Image
            src={FrontCover}
            placeholder="blur"
            height={778}
            width={529}
            layout='intrinsic'
            className="object-cover"
          />
					<div className='w-4/5 pt-8 ml-8'>
          <h1 className="text-3xl color-primary font-recoleta">Anxiety and Me</h1>
						<p className='font-recoleta color-primary'>Book Cover design</p>
						<div className='mt-4 mb-2'>
							<p className='font-recoleta color-primary'>Toolkit</p>
							<p className='font-recoleta color-primary'>Timeframe: 2 weeks</p>
						</div>
						<p className='text-sm font-recoleta'>
							This bookcover was designed for Matthias Media for author Guan Un. 
							The brief required a short turnover but I had creative freedom in 
							the direction I thought best suited the books theme and content.
							<br />
							<br />
							I mainly  used procreate to draw the main illustration and  drew 
							inspiration from various different Japanese artists.
						</p>
					</div>
        </div>
      </main>
    </Layout>
  );
};

export default AnxietyAndMe;
