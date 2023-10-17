import React, {
	CSSProperties,
	FC,
	PropsWithChildren,
	ReactNode,
	useMemo
} from 'react'
import Header from './Header'
import { useBackground } from '~hooks/useState'
import { BACKGROUND_TYPE } from '~types/Background.type'
import SoloImage from '~assets/side/bg.jpg'
import cn from 'clsx'

const Layout: FC<{ children: PropsWithChildren<ReactNode> }> = ({
	children
}) => {
	const { side } = useBackground()

	const styleBackground = useMemo(
		(): CSSProperties =>
			side === BACKGROUND_TYPE.SOLO
				? {
						backgroundImage: `url(${SoloImage})`
				  }
				: {},
		[side]
	)
	return (
		<div
			style={styleBackground}
			className={cn(
				'flex justify-center bg-no-repeat bg-cover bg-center w-screen h-screen overflow-hidden',
				{
					'bg-gradient-to-br from-lightFrom to-lightTo':
						side === BACKGROUND_TYPE.LIGHT,
					'bg-gradient-to-br from-darkFrom to-darkTo':
						side === BACKGROUND_TYPE.DARK
				}
			)}
		>
			<div className='flex flex-col mx-auto w-full max-w-screen-xl'>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Layout
