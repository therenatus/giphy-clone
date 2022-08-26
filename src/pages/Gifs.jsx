import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGifs } from '../store/gif/action/action';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { CardSkeleton } from '../components/Card/CardSkeleton';

const Loading = () => {
    return (
        <>
            {
                [...new Array(4)].map((elem, i) => (
                    <CardSkeleton key={i}/>
                    )
                )
            }
        </>
    )
}

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
}

export const Gifs = () => {
    const { subcategory } = useParams();
    const dispatch = useDispatch();
    const { gifs, status } = useSelector(state => state.gifsReducer);

    useEffect(() => {
        dispatch(getGifs(subcategory))
    }, [])

    
    return (
        <div className='mt-16'>
            <h2 className='text-white text-2xl font-bold capitalize'>{subcategory}</h2>
            <div className='w-full grid grid-cols-4 gap-4 mt-7'>
                {
                    status === 'fulfilled' ? <Fulfilled data={gifs} /> : (
                        status === 'pending' ? <Loading /> : <></>
                    )
                }
            </div>
        </div>
    )
}
