import Photoshop from 'components/svgs/photoshop.svg'
import Illustrator from 'components/svgs/illustrator.svg'

import Image from 'next/image'
import Intro from '../../public/calendar/intro.png'
import Calendar1 from '../../public/calendar/calendar-1.png'
import Calendar2 from '../../public/calendar/calendar-2.png'
import Calendar3 from '../../public/calendar/calendar-3.png'
import Calendar4 from '../../public/calendar/calendar-4.png'

import {messages} from 'utils/message'

const Calendars = (props) => {
	return (
		<>
			<div className="flex flex-col-reverse w-full my-8 sm:flex-row" 
				style={{ height: 'fit-content'}}>
				<div className='w-full pt-8 ml-8'>
					<h1 className="text-3xl color-primary font-recoleta">2022 Calendars</h1>
					<p className='text-xl font-recoleta color-primary'>Calendar design</p>
					<div className='mt-4 mb-2'>
						<p className='flex flex-row text-xl font-recoleta color-primary'>Toolkit
							<span className='flex flex-row items-center h-4 pt-2'>
								<Illustrator className='mr-1 scale-75' />
								<Photoshop className='mr-1 scale-75' />
							</span>
						</p>

						<p className='text-xl font-recoleta color-primary'>Timeframe: 1 month</p>
					</div>
					<p className='text-lg whitespace-pre-wrap font-manrope'>
						{messages['CALENDARS']['INTRO']}
					</p>
				</div>
				<div className='m-6'>
					<Image
						src={Intro}
						placeholder="blur"
				/>
				</div>
			</div>
			<div className='my-8'>
				<Image src={Calendar1} placeholder='blur' />
			</div>
			<div className='my-8'>
				<Image src={Calendar2} placeholder='blur' />
			</div>
			<div className='my-8'>
			<Image src={Calendar3} placeholder='blur' />
			</div>
			<div className='my-8'>
				<Image src={Calendar4} placeholder='blur' />
			</div>
		</>
	)
}

export default Calendars
