import React, { FC } from 'react'
import cn from 'clsx'
import { stagger, useAnimate } from 'framer-motion'
import { Layout } from '~components'
import {
	BACKGROUND_TYPE,
	CHOSE_SIDE_TYPE,
	ChoseSideType
} from '~types/Background.type'
import LightIcon from '../../assets/side/light-side.jpg'
import DarkIcon from '../../assets/side/dark-side.jpg'
import SoloIcon from '../../assets/side/falcon.jpg'
import { useAppDispatch } from '~hooks/useState'
import { toggleSide } from '~/store/backgroundSlice/backgroundSlice'

const HomeArr: ChoseSideType[] = [
	{
		name: CHOSE_SIDE_TYPE.LIGHT,
		side: BACKGROUND_TYPE.LIGHT,
		icon: LightIcon
	},
	{
		name: CHOSE_SIDE_TYPE.DARK,
		side: BACKGROUND_TYPE.DARK,
		icon: DarkIcon
	},
	{
		name: CHOSE_SIDE_TYPE.SOLO,
		side: BACKGROUND_TYPE.SOLO,
		icon: SoloIcon
	}
]

const Home: FC = () => {
	const dispatch = useAppDispatch()
	const [ref, animate] = useAnimate()

	const handleClickTab = (side: BACKGROUND_TYPE, id: number) => {
		dispatch(toggleSide(side))
		animate(
			'div',
			{ scale: [1, 1.12, 1.25, 1.12, 1] },
			{ duration: 0.5, delay: stagger(0.075, { from: id }) }
		)
	}

	return (
		<Layout>
			<div className='flex flex-col'>
				<h2 className='text-3xl font-semibold text-yellow-300 my-5'>
					Chose your side
				</h2>
				<div ref={ref} className='flex items-center justify-start'>
					{HomeArr.map(({ side, name, icon }, id) => (
						<div
							key={side}
							style={{ backgroundImage: `url(${icon})` }}
							onClick={() => handleClickTab(side, id)}
							className={cn(
								'bg-no-repeat bg-cover bg-center flex items-end justify-center w-64 h-[450px] p-4 rounded-xl shadow-[0.5px] cursor-pointer',
								{
									'mr-4 hover:shadow-light': side === BACKGROUND_TYPE.LIGHT,
									'mr-4 hover:shadow-dark': side === BACKGROUND_TYPE.DARK,
									'hover:shadow-solo': side === BACKGROUND_TYPE.SOLO
								}
							)}
						>
							<p
								className={cn('z-1 text-lg normal', {
									'text-light ': side === BACKGROUND_TYPE.LIGHT,
									'text-dark': side === BACKGROUND_TYPE.DARK,
									'text-solo ': side === BACKGROUND_TYPE.SOLO
								})}
							>
								{name}
							</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Home
