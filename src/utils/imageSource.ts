import env from './env'

export const sourceImage = (id: number | string) =>
	env.API_IMAGE + `characters/${id}.jpg`
