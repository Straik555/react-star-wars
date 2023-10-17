import React, { FC, useRef } from 'react'
import cn from 'clsx'
import { PaginationItemType } from '~types/Pagination.type'
import { motion, useTransform } from 'framer-motion'

const PaginationItem: FC<PaginationItemType> = ({
	hover,
	onClick,
	title,
	mouseX
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const distance = useTransform(mouseX, val => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

		return val - bounds.x - bounds.width / 2
	})
	const size = useTransform(distance, [-100, 0, 100], [30, 60, 30])
	return (
		<motion.div
			ref={ref}
			style={{ width: size, height: size }}
			className={cn(
				'flex items-center justify-center mx-1 p-5 cursor-pointer text-white rounded-full border border-solid transition',
				{
					'border-silver !cursor-not-allowed hover:shadow-none hover:text-silver':
						hover,
					'border-purple hover:scale-105 hover:shadow-pagination hover:text-solo':
						!hover
				}
			)}
			onClick={onClick}
		>
			{title}
		</motion.div>
	)
}

export default PaginationItem
