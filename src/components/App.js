import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CategoryLayout } from '../layouts/CategoriesLayout'
import { MainLayout } from '../layouts/MainLayout'
import { CategoriesPage } from '../pages/CategoriesPage'
import { Gifs } from '../pages/Gifs'
import { Home } from '../pages/Home'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home /> } />
					<Route path='/category/:subcategory' element={<Gifs />} />
				</Route>
				<Route path='/category' element={<CategoryLayout />}>
					<Route index element={<CategoriesPage /> } />
				</Route>
			</Routes>
		</>
	)
}

