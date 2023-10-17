import React, { FC, ReactNode, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
	DroidIcon,
	FavoriteIcon,
	LightSaberIcon,
	SpaceStationIcon
} from '~assets'
import cn from 'clsx'
import { routesHeader } from '~navigation/routes'
import { ROUTES } from '~/@types/Navigation.type'
import { useBackground, usePageState } from '~hooks/useState'
import { BACKGROUND_TYPE } from '~types/Background.type'

const Header: FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { side } = useBackground()
	const { page } = usePageState()

	const imageSide = useMemo((): ReactNode => {
		switch (side) {
			case BACKGROUND_TYPE.LIGHT:
				return <LightSaberIcon />
			case BACKGROUND_TYPE.DARK:
				return <DroidIcon />
			default:
				return <SpaceStationIcon />
		}
	}, [side])
	return (
		<div className='flex items-center justify-between w-full pt-3 mb-5'>
			<div className='flex items-center justify-start w-full'>
				<motion.div
					className='w-20 h-20 box-border p-1 mr-3'
					animate={{ rotate: 360 }}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: 'reverse',
						repeatDelay: 1,
						type: 'just',
						ease: 'easeInOut'
					}}
				>
					{imageSide}
				</motion.div>
				{routesHeader.map(route => (
					<Link
						className={cn(
							'relative flex items-center justify-center text-white text-lg transition font-medium cursor-pointer py-1.5 px-3 mx-2'
						)}
						to={
							route.path === ROUTES.PEOPLE
								? {
										pathname: route.path,
										search: `page=${page}`
								  }
								: route.path
						}
						key={route.path}
					>
						{pathname == route.path && (
							<motion.div
								layoutId='active-pill'
								className='absolute inset-0 bg-purple rounded-full'
							/>
						)}
						<span className='relative z-10 text-white'>{route.name}</span>
					</Link>
				))}
			</div>
			<div
				className='w-12 h-12 box-border p-1 relative cursor-pointer'
				onClick={() => navigate(ROUTES.FAVORITES)}
			>
				<FavoriteIcon />
				<div className='absolute top-0 right-0 flex items-center justify-center text-sm p-1 w-5 h-5 bg-white rounded-full'>
					{0}
				</div>
			</div>
		</div>
	)
}

export default Header
