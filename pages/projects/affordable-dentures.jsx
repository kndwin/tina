import Photoshop from 'components/svgs/photoshop.svg'
import Illustrator from 'components/svgs/illustrator.svg'

import Image from 'next/image'
import Laptop from '../../public/affordable-dentures/laptop.png'
import InitialDesign from '../../public/affordable-dentures/initial-design.png'
import BrandGuide from '../../public/affordable-dentures/brand-guide.png'
import PadDesign from '../../public/affordable-dentures/pad-design.png'
import Card1 from '../../public/affordable-dentures/card-1.png'
import Card2 from '../../public/affordable-dentures/card-2.png'
import Website from '../../public/affordable-dentures/website.png'

import {messages} from 'utils/message'

const AffordableDentures = (props) => {
	return (
		<>
			<div className='w-full mt-12'>
				<h1 className="text-3xl color-primary font-recoleta">
					Affordable Dentures and Implants
				</h1>
				<p className='text-xl font-recoleta color-primary'>Brand and Web Design</p>
			</div>
			<div className="flex flex-col w-full sm:flex-row" 
				style={{ height: 'fit-content'}}>
				<div className='flex-1'>
					<div className='mt-4 mb-2'>
						<p className='flex flex-row text-xl font-recoleta color-primary'>Toolkit
							<span className='flex flex-row items-center h-4 pt-2'>
								<Illustrator className='ml-2 mr-1 scale-75'/>
								<Photoshop className='mr-1 scale-75' />
							</span>
						</p>

						<p className='text-xl font-recoleta color-primary'>Timeframe: 2 weeks</p>
					</div>
					<p className='text-lg whitespace-pre-wrap font-manrope'>
						{messages['AFFORDABLE_DENTURES']['INTRO']}
					</p>
				</div>
				<div className='flex-1 mt-8 ml-0 sm:ml-8'>
					<Image
						src={Laptop}
						placeholder="blur"
					/>
				</div>
			</div>
			<div className='flex flex-col w-full mt-12'>
				<h2 className='mb-6 text-3xl font-recoleta color-primary'>
					Logo Initial Design
				</h2>
				<Image placeholder='blur' src={InitialDesign} />
			</div>
			<div className='flex flex-col w-full mt-12'>
				<h2 className='mb-6 text-3xl font-recoleta color-primary'>
					Brand Guide
				</h2>
				<Image placeholder='blur' src={BrandGuide} />
			</div>
			<div className='flex flex-col w-full mt-12'>
				<h2 className='mb-6 text-3xl font-recoleta color-primary'>
					Pad Design
				</h2>
				<Image placeholder='blur' src={PadDesign} />
			</div>
			<div className='flex flex-col w-full mt-12'>
				<h2 className='mb-6 text-3xl font-recoleta color-primary'>
					Appointment Card
				</h2>
				<div className='flex flex-col sm:flex-row'>
					<Image placeholder='blur' src={Card1} />
					<Image placeholder='blur' src={Card2} />
				</div>
			</div>
			<div className='flex flex-col w-full mt-12'>
				<h2 className='mb-6 text-3xl font-recoleta color-primary'>
					Website Design
				</h2>
				<Image placeholder='blur' src={Website} />
			</div>
			
		</>
	)
}

export default AffordableDentures
