import React, { FC } from 'react'
import { PeopleItemsProps, VariantTransition } from '~types/People.type'
import cn from 'clsx'
import {
	motion,
	TargetAndTransition,
	VariantLabels,
	Variants
} from 'framer-motion'
import { sourceImage } from '~utils/imageSource'

const PeopleItems: FC<PeopleItemsProps> = ({
	name,
	id,
	className,
	onClick,
	duration
}) => {
	const listVariant: Variants = {
		hidden: (i: VariantTransition) => ({
			opacity: 0,
			x: i === VariantTransition.LEFT ? -window.innerWidth : window.innerWidth
		}),
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 3,
				restSpeed: 0.05,
				type: 'spring'
			}
		}
	}

	const hoverVariant: VariantLabels | TargetAndTransition = {
		zIndex: 1,
		scale: 1.1,
		borderRadius: ['0.25rem', '0.5rem', '1rem', '1.5rem', '1.75rem'],
		transition: {
			duration: 5,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'mirror',
			repeatDelay: 1
		}
	}

	return (
		<motion.div
			className={cn(
				`relative flex items-end justify-center w-full h-[340px] rounded overflow-hidden cursor-pointer`,
				className
			)}
			onClick={onClick}
			variants={listVariant}
			initial='hidden'
			animate='visible'
			custom={duration}
			whileHover={hoverVariant}
		>
			<img src={sourceImage(id)} className='absolute z-0 top-0 h-full w-full' />
			<div className='bg-white w-full z-10'>
				<p className='text-center text-black text-normal text-base'>{name}</p>
			</div>
		</motion.div>
	)
}

export default PeopleItems
