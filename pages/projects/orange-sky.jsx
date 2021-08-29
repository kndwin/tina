import Photoshop from 'components/svgs/photoshop.svg'
import Illustrator from 'components/svgs/illustrator.svg'

import Image from 'next/image'
import Intro1 from '../../public/orange-sky/intro-1.png'
import Intro2 from '../../public/orange-sky/intro-2.png'
import Intro3 from '../../public/orange-sky/intro-3.png'
import Intro4 from '../../public/orange-sky/intro-4.png'

import {messages} from 'utils/message'

const OrangeSky = (props) => {
	return (
		<>
			<div className='mt-12 grid grid-cols-2 grid-rows-2 gap-8'>
				<div>
					<h1 className="text-3xl color-primary font-recoleta">
						Orange Sky
					</h1>
					<p className='text-xl font-recoleta color-primary'>
						Rebranding
					</p>
					<div className='mt-4 mb-2'>
						<p className='flex flex-row text-xl font-recoleta color-primary'>
							Toolkit
							<span className='flex flex-row items-center h-4 pt-2'>
								<Illustrator className='mr-1 scale-75' />
								<Photoshop className='mr-1 scale-75' />
							</span>
						</p>

						<p className='text-xl font-recoleta color-primary'>
							Timeframe: 2 month
						</p>
					</div>
					<p className='text-lg whitespace-pre-wrap font-manrope'>
						{messages['ORANGE_SKY']['INTRO_1']}
					</p>
				</div>
				<div>
					<Image placeholder='blur' src={Intro1} />
				</div>
				<div>
					<Image placeholder='blur' src={Intro3} />
				</div>
				<div>
					<Image placeholder='blur' src={Intro2} />
				</div>
			</div>
			<p className='mb-8 text-lg whitespace-pre-wrap font-manrope'>
				{messages['ORANGE_SKY']['INTRO_2']}
			</p>
			<Image src={Intro4} placeholder='blur' />
		</>
	)
}

export default OrangeSky
