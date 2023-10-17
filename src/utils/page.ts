export const getPageCount = (count: number, limit: number): number[] => {
	return [...Array(Math.ceil(count / limit))].map((_, id) => ++id)
}
