import { HTMLAttributes } from 'react'
import { MotionValue } from 'framer-motion'

export type PaginationItemType = {
	hover: boolean
	title: string | number
	mouseX: MotionValue
} & Required<Pick<HTMLAttributes<HTMLDivElement>, 'onClick'>>

export type PaginationType = {
	page: number
	totalCount: number[]
	onClickNext: () => void
	onClickPrevious: () => void
	onClickItem: (count: number) => void
}
