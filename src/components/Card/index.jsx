import React, { useEffect } from 'react'

export const Card = ({data}) => {
    useEffect(() => {

    }, [])
    return (
        <div className='w-full bg-gray-400 rounded-lg'>
            <img src={data?.images.original.url} alt='gif' className='w-full h-[200px] object-fill rounded-lg' loading="lazy"/>
        </div>
    )
}
