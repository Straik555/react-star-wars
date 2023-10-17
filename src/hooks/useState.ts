import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useBackground = () =>
	useAppSelector(state => state.backgroundReducer)
export const usePageState = () => useAppSelector(state => state.pageReducer)
export const useFavoriteState = () =>
	useAppSelector(state => state.favoriteReducer)
