import React, { FC } from 'react'
import cn from 'clsx'

const Loader: FC<{ isAbsolute?: boolean }> = ({ isAbsolute }) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center w-screen h-screen bg-[#363431] opacity-70',
				{
					'z-[1] absolute top-0 left-0': isAbsolute
				}
			)}
		>
			<div className='loader'>
				<div className='loadingio-spinner-ripple-psursag005'>
					<div className='ldio-n9iy4pom8mc'>
						<div />
						<div />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Loader
