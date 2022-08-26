import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SubCategoryCard = () => {
    const {categories, category} = useSelector(state => state.categoriesReducer);

    return (
        <div className='w-full grid grid-cols-3 gap-8 mt-7'>
            {categories[category]?.subcategories.map((item, i) => (
                <Link key={i} to={`/category/${item.name}`}>
                    <div className=' relative w-full h-[100px] rounded-lg flex flex-col justify-center cursor-pointer hover:scale-105 transition duration-300 ease-in-out' style={{backgroundColor: `#${Math.random().toString(16).substr(-6)}`}}>
                        <div className=' absolute rounded-lg bg-black w-full h-[100px] bg-opacity-50 ' ></div>
                        <p className='text-white uppercase text-center z-10'>{item.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
