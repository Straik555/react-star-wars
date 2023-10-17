import React, { FC } from 'react'
import { sourceImage } from '~utils/imageSource'
import { FavoriteIconPerson } from '~/assets'
import { ProfileItemsPropsType } from '~types/Profile.type'

const ProfileItems: FC<ProfileItemsPropsType> = ({
	name,
	id,
	birth_year,
	gender,
	eye_color,
	mass,
	hair_color,
	isActive,
	height,
	skin_color,
	films
}) => {
	return (
		<div className='flex flex-col'>
			<p className='text-2xl text-white p-3 mb-3 bg-purple'>{name}</p>
			<div className='flex item-center '>
				<FavoriteIconPerson active={isActive} />
				<div className='grid grid-cols-3 gap-5'>
					<img src={sourceImage(id)} className='h-72 w-60 rounded' />
					<div>
						<TextItem text={height} tag='Height:' />
						<TextItem text={mass} tag='Mass:' />
						<TextItem text={hair_color} tag='Hair color:' />
						<TextItem text={skin_color} tag='Skin color:' />
						<TextItem text={eye_color} tag='Eye color:' />
						<TextItem text={birth_year} tag='Birth year:' />
						<TextItem text={gender} tag='Gender:' />
					</div>
				</div>
				<div className='flex flex-col'>
					{films?.map(el => <div key={el}>{el}</div>)}
				</div>
			</div>
		</div>
	)
}

const TextItem: FC<{ text: string; tag: string; episode?: boolean }> = ({
	tag,
	text
}) => {
	return (
		<div className='flex items-center justify-start'>
			<p className='text-base text-white font-normal underline mr-2'>{tag}</p>
			<p className='text-base text-white font-normal'>{text}</p>
		</div>
	)
}

export default ProfileItems
