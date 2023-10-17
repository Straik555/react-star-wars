import React, { FC, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProfileParamsType } from '~types/Profile.type'
import { useGetPeopleByIdQuery } from '~api/people'
import { Layout, Loader } from '~components'
import cn from 'clsx'
import { useBackground, useFavoriteState } from '~hooks/useState'
import { BACKGROUND_TYPE } from '~types/Background.type'
import { ArrowLeftIcon } from '~assets'
import ProfileItems from '~/pages/Profile/ProfileItems/ProfileItems'

const Profile: FC = () => {
	console.log('here')
	const { id } = useParams<ProfileParamsType>()
	const { side } = useBackground()
	const { favorite } = useFavoriteState()
	const navigate = useNavigate()
	const { data: dataProfile, isLoading: isLoadingProfile } =
		useGetPeopleByIdQuery(
			{ id: Number(id) },
			{
				skip: !id
			}
		)

	const fillArrow = useMemo((): string => {
		switch (side) {
			case BACKGROUND_TYPE.DARK:
				return '#cd2128'
			case BACKGROUND_TYPE.LIGHT:
				return '#1adc2d'
			case BACKGROUND_TYPE.SOLO:
				return '#ffff00'
			default:
				return '#ffff00'
		}
	}, [side])

	return (
		<Layout>
			{isLoadingProfile ? (
				<Loader isAbsolute />
			) : (
				<div>
					<div
						className='flex items-center m-4 cursor-pointer'
						onClick={() => navigate(-1)}
					>
						<div className='w-5 h-5 box-border '>
							<ArrowLeftIcon fill={fillArrow} />
						</div>
						<p
							className={cn('text-lg font-semibold ml-3', {
								'text-solo': side === BACKGROUND_TYPE.SOLO,
								'text-light': side === BACKGROUND_TYPE.LIGHT,
								'text-dark': side === BACKGROUND_TYPE.DARK
							})}
						>
							Go back
						</p>
					</div>
					{!!dataProfile && (
						<ProfileItems
							{...dataProfile}
							isActive={favorite.includes(dataProfile.id)}
						/>
					)}
				</div>
			)}
		</Layout>
	)
}

export default Profile
