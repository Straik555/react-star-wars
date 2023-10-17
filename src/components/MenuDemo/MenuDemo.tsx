import React, { FC } from 'react'
import { motion, SVGMotionProps, useCycle } from 'framer-motion'
import { JSX } from 'react/jsx-runtime'

const sidebar = {
	open: (height: number) => ({
		clipPath: `circle(${height - 40}px at 0px 40px)`,
		transition: {
			type: 'spring'
		}
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 40
		}
	}
}
const Path = (
	props: JSX.IntrinsicAttributes &
		SVGMotionProps<SVGPathElement> &
		React.RefAttributes<SVGPathElement>
) => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='hsl(0, 0%, 18%)'
		strokeLinecap='round'
		{...props}
	/>
)

const MenuToggle: FC<{ toggle: () => void }> = ({ toggle }) => (
	<button
		className='absolute top-[18px] left-[28px] w-[50px] h-[50px] rounded-full bg-transparent cursor-pointer'
		onClick={toggle}
	>
		<svg width='23' height='23' viewBox='0 0 23 23'>
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' }
				}}
			/>
			<Path
				d='M 2 9.423 L 20 9.423'
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 }
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' }
				}}
			/>
		</svg>
	</button>
)

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
}

const MenuDemo: FC = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			className='h-full'
		>
			<motion.div
				className='bg-red-400 absolute top-0 left-0 bottom-0 w-[300px]'
				variants={sidebar}
				custom={window.innerHeight}
			/>
			<motion.ul variants={variants}>
				<li>1</li>
				<li>2</li>
			</motion.ul>
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	)
}

export default MenuDemo
