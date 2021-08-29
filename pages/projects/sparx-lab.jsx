import InDesign from 'components/svgs/indesign.svg'
import Illustrator from 'components/svgs/illustrator.svg'
import Procreate from 'components/svgs/procreate.svg'
import {messages} from 'utils/message'

import Image from 'next/image'
import Mac from '../../public/sparx-lab/mac.png'
import InitialDesign from '../../public/sparx-lab/initial-design.png'
import BrandGuide from '../../public/sparx-lab/brand-guide.png'
import BrandGuide2 from '../../public/sparx-lab/brand-guide-2.png'
import BrandGuide3 from '../../public/sparx-lab/brand-guide-3.png'
import PadDesign from '../../public/sparx-lab/pad-design-1.png'
import PadDesign2 from '../../public/sparx-lab/pad-design-2.png'
import Website from '../../public/sparx-lab/website.png'

const SparxLab = (props) => {
	return (
		<>
			<div className='flex flex-row items-end justify-start w-full mt-12'>
				<div className='flex flex-col'>
					<h2 className='text-3xl color-primary font-recoleta'>Sparx Lab</h2>
					<p className='text-xl color-primary font-recoleta'>Brand and Web Design</p>
				</div>
				<div className='flex flex-col ml-12'>
					<p className='flex flex-row text-xl font-recoleta color-primary'>Toolkit
						<span className='flex flex-row items-center h-4 pt-2'>
							<InDesign className='ml-2 mr-1 scale-75'/>
							<Illustrator className='mr-1 scale-75' />
							<Procreate className='mr-1 scale-75' />
						</span>
					</p>
					<p className='text-xl color-primary font-recoleta'>Timeframe: 2 months</p>
				</div>
			</div>
			<div className='flex flex-col mt-12 sm:flex-row' >
				<p className='flex-1 text-xl whitespace-pre-wrap font-manrope'>
				{messages['SPARX_LAB']['INTRO']}
				</p>
				<div className='flex-1 my-8 sm:my-0'>
					<Image src={Mac} />
				</div>
			</div>
			<div className='flex flex-col w-full mt-12'>
				<h2 className='mb-6 text-3xl font-recoleta color-primary'>
					Logo Initial Design
				</h2>
				<Image src={InitialDesign} />
			</div>
			<div className='w-full mt-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Logo Iteration
				</h2>
				<p className='text-xl font-manrope'>{messages['SPARX_LAB']['LOGO_ITERATION']}</p>
			</div>
			<div className='w-full mt-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Brand Guide
				</h2>
				<Image src={BrandGuide} />
				<div className='my-16'>
				<Image src={BrandGuide2} />
				</div>
				<Image src={BrandGuide3} />
			</div>
			<div className='w-full my-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Lab Pad Design
				</h2>
				<div style={{ background: '#1f1f1f'}}
					className='w-full h-full'>
					<div className='flex flex-col w-full sm:flex-row'>
						<div className='flex-1 mr-0 sm:m-8'>
							<Image src={PadDesign}/>
						</div>
						<p className="flex-1 m-8 text-xl text-white whitespace-pre-wrap font-manrope">
							{messages['SPARX_LAB']['PAD_DESIGN']}
						</p>
					</div>
					<div className='px-8 pb-16'>
						<Image src={PadDesign2}/>
					</div>
				</div>
			</div>
			<div className='mb-12'>
				<h2 className='mb-4 text-3xl font-recoleta color-primary'>
					Website design
				</h2>
				<div className=''>
					<Image src={Website}/>
				</div>
			</div>
		</>
	)
}

export default SparxLab
