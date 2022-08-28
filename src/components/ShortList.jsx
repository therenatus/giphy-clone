import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { CardSkeleton } from './Card/CardSkeleton'

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
export const ShortList = ({title, status, trending}) => {
    return (
        <div className='mt-16'>
            <h2 className='text-white text-2xl font-bold capitalize'>{title}</h2>
            <div className='w-full grid grid-cols-4 gap-4 mt-7'>
                {
                    status === 'fulfilled' ? <Fulfilled data={trending} /> : (
                        status === 'pending' ? <Loading /> : <></>
                    )
                }
            </div>
            <div className='flex justify-end'>
                <Link to={`/${title}`} className='text-white hover:text-blue-500'>See more </Link>
            </div>
        </div>
    )
}
