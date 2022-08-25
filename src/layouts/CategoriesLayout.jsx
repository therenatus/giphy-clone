import React from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const CategoryLayout = () => {
    return (
        <>
            <Header />
            <div className='bg-gray-800 px-4 lg:px-6 py-2.5 flex'>
                <div className='w-[18%]'>
                    <Sidebar />
                </div>
                <div className='w-[81%] mx-auto ml-[1%]'>
                    <Outlet  className='mx-auto'/>
                </div>
            </div>
        </>
    )
}