import Photoshop from 'components/svgs/photoshop.svg'
import Fusion from 'components/svgs/fusion.svg'

import Image from 'next/image'
import Intro1 from '../../public/moonlight/intro-1.png'
import Intro2 from '../../public/moonlight/intro-2.png'
import Before from '../../public/moonlight/before.png'
import After from '../../public/moonlight/after.png'
import Sketch from '../../public/moonlight/sketch.png'
import Measurements from '../../public/moonlight/measure.png'
import Dimensions from '../../public/moonlight/dimensions.png'
import Final from '../../public/moonlight/final.png'

import {messages} from 'utils/message'

const Moonlight = (props) => {
	return (
		<>
			<div className="flex flex-col mt-12 sm:grid grid-cols-2 grid-rows-2 gap-8" 
				style={{ height: 'fit-content'}}>
				<div>
					<h1 className="text-3xl color-primary font-recoleta">
						Moonlight
					</h1>
					<p className='text-xl font-recoleta color-primary'>
						3d Modelling Project
					</p>
					<div className='mt-4 mb-2'>
						<p className='flex flex-row text-xl font-recoleta color-primary'>
							Toolkit
							<span className='flex flex-row items-center h-4 pt-2'>
								<Fusion className='mr-1 scale-75' />
							</span>
						</p>

						<p className='text-xl font-recoleta color-primary'>
							Timeframe: 2 month
						</p>
					</div>
					<p className='text-lg whitespace-pre-wrap font-manrope'>
						{messages['MOONLIGHT']['INTRO_1']}
					</p>
				</div>
				<div>
					<Image
						src={Intro1}
						placeholder="blur"
					/>
				</div>
				<div style={{ height: '300px'}}>
					<Image
						src={Intro2}
						placeholder="blur"
					/>
				</div>
				<div className=''>
					<p className='text-lg whitespace-pre-wrap mt-96 font-manrope sm:mt-0'>
						{messages['MOONLIGHT']['INTRO_2']}
					</p>
				</div>
			</div>
			<div>
				<h2 className='mt-16 mb-4 text-3xl sm:mt-32 font-recoleta color-primary'>
					Website design
				</h2>
				<div className='flex flex-col sm:flex-row'>
					<div className='flex-1 mb-4 sm:mr-4 sm:mb-0'>
						<Image placeholder='blur' src={Before}/>
					</div>
					<div className='flex-1 mt-4 sm:ml-4 sm:mt-0'>
						<Image placeholder='blur' src={After}/>
					</div>
				</div>
			</div>
			<div className='mt-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Website design
				</h2>
				<div className=''>
					<Image placeholder='blur' src={Sketch}/>
				</div>
			</div>
			<div className='mt-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Measurements
				</h2>
				<div className='w-full'>
					<Image placeholder='blur' src={Measurements}/>
				</div>
			</div>
			<div className='mt-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Dimensions
				</h2>
				<div className='w-full'>
					<Image placeholder='blur' src={Dimensions}/>
				</div>
			</div>
			<div className='my-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Final
				</h2>
				<div className='w-full'>
					<Image placeholder='blur' src={Final}/>
				</div>
			</div>
		</>
	)
}

export default Moonlight
