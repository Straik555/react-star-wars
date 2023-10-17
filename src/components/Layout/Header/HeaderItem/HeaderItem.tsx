import React, { FC } from 'react'
import { motion } from 'framer-motion'
import cn from 'clsx'
import { Link } from 'react-router-dom'
import { HeaderTypeProps } from '~types/HeaderItem'

const Item: FC<HeaderTypeProps> = ({ active, to, title }) => {
	return (
		<Link
			className={cn(
				'flex items-center justify-center text-white text-lg font-medium cursor-pointer py-1 px-3 mx-2',
				{
					'border-2 border-solid rounded border-purple !text-purple': active
				}
			)}
			to={to}
		>
			{title}
		</Link>
	)
}

const HeaderItem = motion(Item)

export default HeaderItem
