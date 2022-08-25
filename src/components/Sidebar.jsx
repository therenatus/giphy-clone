import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatrgories, setCategory } from '../store/category/action/action';

export const Sidebar = () => {
    const [active, setActive] = useState(0)
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categoriesReducer)

    const onClickCategory = (id) => {
        setActive(id);
        dispatch(setCategory(id))
    }
    useEffect(() => {
        dispatch(getCatrgories());
    }, [])
    return (
        <>
            <ul>
                {categories.map((menu, index) => (
                    <li onClick={() => onClickCategory(index)}
                        key={`${index}__${menu.name}`}
                        className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-lg uppercase ${active === index && 'bg-white text-black'}`}
                    >
                        <span className={`origin-left duration-200 `}>
                            {menu.name}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    )
}
