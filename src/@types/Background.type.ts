export const enum BACKGROUND_TYPE {
	DARK = 'dark',
	LIGHT = 'light',
	SOLO = 'solo'
}

export type InitialStateBackgroundSlice = {
	side: BACKGROUND_TYPE
}

export const enum CHOSE_SIDE_TYPE {
	LIGHT = 'Light Side',
	SOLO = "I'm Han Solo",
	DARK = 'Dark Side'
}

export type ChoseSideType = {
	name: CHOSE_SIDE_TYPE
	icon: string
} & InitialStateBackgroundSlice
