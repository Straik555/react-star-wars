import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

const Navigation: FC = () => {
	return (
		<Routes>
			{routes.map(({ name, path, component }) => (
				<Route key={name} path={path} element={component} />
			))}
			<Route path='*' element={<div>NotFound</div>} />
		</Routes>
	)
}

export default Navigation
