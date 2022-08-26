import React from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div className='min-h-screen bg-gray-800'>
            <Header />
            <div className=' px-4 lg:px-6 py-2.5'>
                <Outlet  className='mx-auto'/>
            </div>
        </div>
    )
}
