import React, { FC, useEffect, useMemo, useState } from 'react'
import { generatePath, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Loader, Pagination, PeopleItems } from '~components'
import { useGetAllPeopleQuery } from '~api/people'
import { useAppDispatch, useBackground, usePageState } from '~hooks/useState'
import { getPageCount } from '~utils/page'
import { togglePage } from '~/store/pageSlice/pageSlice'
import { BACKGROUND_TYPE } from '~types/Background.type'
import { ROUTES } from '~types/Navigation.type'
import { VariantTransition } from '~types/People.type'

const People: FC = () => {
	const [heshPage, setHeshPage] = useState<boolean>(false)
	const { side } = useBackground()
	const { page } = usePageState()
	const dispatch = useAppDispatch()

	const navigate = useNavigate()
	const { pathname, search } = useLocation()

	const {
		data: peopleData,
		isLoading: isLoadingPeople,
		isFetching
	} = useGetAllPeopleQuery(Number(search.slice(search.length - 1)) || page, {
		refetchOnMountOrArgChange: heshPage
	})

	const styleClass = useMemo((): string => {
		switch (side) {
			case BACKGROUND_TYPE.LIGHT:
				return 'hover:shadow-light'
			case BACKGROUND_TYPE.DARK:
				return 'hover:shadow-dark'
			case BACKGROUND_TYPE.SOLO:
				return 'hover:shadow-solo'
			default:
				return 'hover:shadow-solo'
		}
	}, [side])

	const totalCount = useMemo((): number[] => {
		if (!!peopleData?.count) {
			return getPageCount(peopleData.count, 10)
		}
		return getPageCount(0, 10)
	}, [peopleData?.count])

	useEffect(() => {
		if (!!search?.length) {
			const searchPage = Number(search.slice(search.length - 1))
			if (searchPage !== page) {
				setHeshPage(true)
				dispatch(togglePage(searchPage))
			}
		}
	}, [search])

	return (
		<Layout>
			{isLoadingPeople || isFetching ? (
				<Loader isAbsolute />
			) : (
				<>
					<div className='grid grid-cols-5 gap-4'>
						{peopleData?.results.map((people, i) => {
							return (
								<PeopleItems
									key={people.url}
									id={people.id}
									duration={
										i > 4 ? VariantTransition.RIGHT : VariantTransition.LEFT
									}
									name={people.name}
									className={styleClass}
									onClick={() =>
										navigate(
											generatePath(ROUTES.PROFILE_BY_ID, {
												id: String(people.id)
											})
										)
									}
								/>
							)
						})}
					</div>
					<Pagination
						page={page}
						totalCount={totalCount}
						onClickItem={count => {
							dispatch(togglePage(count))
							navigate(`${pathname}?page=${count}`, {
								replace: true
							})
						}}
						onClickNext={() => {
							if (page !== totalCount.length) {
								dispatch(togglePage(page + 1))
								navigate(`${pathname}?page=${page + 1}`, {
									replace: true
								})
							}
						}}
						onClickPrevious={() => {
							if (page !== 1) {
								dispatch(togglePage(page - 1))
								navigate(`${pathname}?page=${page - 1}`, {
									replace: true
								})
							}
						}}
					/>
				</>
			)}
		</Layout>
	)
}

export default People
