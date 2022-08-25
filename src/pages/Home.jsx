import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShortList } from '../components/ShortList'
import { getTrending } from '../store/trending/action/action';

export const Home = () => {
    const limit = 4;
    const dispatch = useDispatch();
	const data = useSelector((state) => state.trendingReducer)
	useEffect(() => {
		dispatch(getTrending(limit))
	}, [])

    return (
        <>
            <ShortList title={'Trending'} {...data} />
        </>
    )
}
