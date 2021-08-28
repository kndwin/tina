import Image from "next/image";

import InDesign from 'components/svgs/indesign.svg'
import Illustrator from 'components/svgs/illustrator.svg'
import Procreate from 'components/svgs/procreate.svg'

import BookCover1 from '../../public/anxiety-and-me/Initial Designs/Book Cover Drafts-01.jpg'
import BookCover2 from '../../public/anxiety-and-me/Initial Designs/Book Cover Drafts-02.jpg'
import BookCover3 from '../../public/anxiety-and-me/Initial Designs/Book Cover Drafts-03.jpg'
import BookCover4 from '../../public/anxiety-and-me/Initial Designs/Book Cover Drafts-04.jpg'
import BookCover5 from '../../public/anxiety-and-me/Initial Designs/Book Cover Drafts-05.jpg'
import BookCover7 from '../../public/anxiety-and-me/Initial Designs/Book Cover Drafts-07.jpg'

import Iteration1 from '../../public/anxiety-and-me/Iteration/Anxiety and me by Guan Un (Initial Ideas)-09.png'
import Iteration2 from '../../public/anxiety-and-me/Iteration/Anxiety and me by Guan Un (Initial Ideas)-10.png'
import Iteration3 from '../../public/anxiety-and-me/Iteration/Anxiety and me by Guan Un (Initial Ideas)-11.png'
import Iteration4 from '../../public/anxiety-and-me/Iteration/Anxiety and me by Guan Un (Initial Ideas)-12.png'
import Iteration5 from '../../public/anxiety-and-me/Iteration/Anxiety and me by Guan Un (Initial Ideas)-13.png'

import Final1 from '../../public/anxiety-and-me/Anxiety and Me Front.png'
import Final2 from '../../public/anxiety-and-me/Anxiety and Me Back.png'

const AnxietyAndMe = (props) => {
	return (
		<>
			<div className="flex flex-col-reverse w-full my-8 sm:flex-row" 
				style={{ height: 'fit-content'}}>
				<div className='m-6'>
					<Image
						src={Final1}
						placeholder="blur"
						height={778}
						width={529}
						layout='intrinsic'
						className="object-cover"
					/>
				</div>
				<div className='w-4/5 pt-8 ml-8'>
					<h1 className="text-3xl color-primary font-recoleta">Anxiety and Me</h1>
					<p className='font-recoleta color-primary'>Book Cover design</p>
					<div className='mt-4 mb-2'>
						<p className='flex flex-row font-recoleta color-primary'>Toolkitk
							<span className='flex flex-row items-center h-4 pt-2'>
								<InDesign className='ml-2 mr-1 scale-75'/>
								<Illustrator className='mr-1 scale-75' />
								<Procreate className='mr-1 scale-75' />
							</span>
						</p>

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
			<div className='flex flex-col px-4'>
				<div className='my-4'>
					<h1 className='text-3xl font-recoleta color-primary'>Initial Designs</h1>
					<p className="text-2xl font-recoleta color-primary">The six concepts</p>
				</div>
				<div className='flex flex-col sm:grid grid-cols-3 grid-rows-2 gap-6'>
					<Image src={BookCover4} placeholder='blur' />
					<Image src={BookCover3} placeholder='blur' />
					<Image src={BookCover5} placeholder='blur' />
					<Image src={BookCover7} placeholder='blur' />
					<div className='relative mb-8 sm:mb-0'>
						<Image src={BookCover2} placeholder='blur' />
						<div style={{ width: '2px'}} 
							className='absolute h-2 left-1 bg-primary' />
						<div style={{ height: '2px', width: 'calc(100% - 10px)'}} 
							className='absolute -bottom-2 bg-primary left-1' />
						<div style={{ width: '2px'}} 
							className='absolute w-1 h-2 right-1 bg-primary' />
						<p className='absolute w-full text-center font-recoleta color-primary -bottom-10'>
							This iteration was chosen
						</p>
					</div>
					<Image src={BookCover1} placeholder='blur' />
				</div>
			</div>
			<div className='px-4 mt-12'>
				<h1 className='mb-4 text-3xl font-recoleta color-primary'>Iterations</h1>
				<div className='flex flex-col w-full sm:flex-row'>
					<div className='flex flex-col w-full sm:w-3/5 sm:grid grid-cols-2 grid-rows-2 gap-4'>
						<Image src={Iteration5} placeholder='blur' />
						<Image src={Iteration3} placeholder='blur' />
						<Image src={Iteration1} placeholder='blur'/>
						<Image src={Iteration4} placeholder='blur' />
					</div>
					<div className='flex flex-col w-full ml-4 sm:w-2/5'>
						<div className='relative'>
						<Image src={Iteration2} placeholder='blur' />
							<div style={{ width: '2px'}} 
								className='absolute h-2 left-1 bg-primary' />
							<div style={{ height: '2px', width: 'calc(100% - 10px)'}} 
								className='absolute -bottom-2 bg-primary left-1' />
							<div style={{ width: '2px'}} 
								className='absolute w-1 h-2 right-1 bg-primary' />
							<p className='absolute w-full text-center font-recoleta color-primary -bottom-10'>
								This book is chosen
							</p>
						</div>
						<p className='mx-4 mt-12 font-recoleta'>
							The font needed to be changed into something more 
							readable and the sub heading made to look as it if 
							were sinking into the whirpool
						</p>
					</div>
				</div>
			</div>
			<div className='px-4 mt-16'>
				<h1 className="my-4 text-4xl color-primary font-recoleta">
					Final Design
				</h1>
				<div className='flex flex-col-reverse w-full sm:flex-row'>
					<div className='w-full'>
					<Image src={Final2} placeholder='blur' />
					</div>
					<div className='w-full'>
					<Image src={Final1} placeholder='blur' />
					</div>
				</div>
			</div>
		</>
	)
}

export default AnxietyAndMe;
