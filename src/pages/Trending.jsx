import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { CardSkeleton } from '../components/Card/CardSkeleton';
import { getTrending } from '../store/trending/action/action';

const Loading = () => {
    return (
        <>
            {
                [...new Array(8)].map((_, i) => (
                    <CardSkeleton key={i}/>
                    )
                )
            }
        </>
    )
};

const Fulfilled = ({data}) => {
    return(
        <>
            {
                data.map((value, i) => (
                    <Card key={i} data={value}/>
                ))

            }
        </>
    )
};

export const Trending = () => {
    const dispatch = useDispatch();
	const {trending, status} = useSelector((state) => state.trendingReducer)
	useEffect(() => {
		dispatch(getTrending())
	}, [])

    return (
        <div className='mt-16'>
            <h2 className='text-white text-2xl font-bold'>Trending</h2>
            <div className='w-full grid grid-cols-4 gap-4 mt-7'>
                {
                    status === 'pending' ? <Loading /> : (
                        status === 'fulfilled' ? <Fulfilled data={trending} /> : <></>
                    )
                }
            </div>
        </div>
    )
}
