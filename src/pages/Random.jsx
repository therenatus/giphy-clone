import React, { useEffect, useState } from 'react';
import axios from '../api';

const Random = () => {
    const [gif, setGif] = useState([]);
    const [status, setStatus] = useState('pending');
    const getRamdomGif = async() => {
        const { data } = await axios.get(`/random?api_key=${process.env.REACT_APP_API_KEY}`);
        setGif(data.data)
        if(data.meta.status === 200){
            setStatus('fulfilled')
        }else{
            setStatus('rejected')
        }
    }

    useEffect(() => {
        getRamdomGif()
    }, []);

    return (
        <div className='mt-16 w-full'>
            <h2 className='text-white text-2xl text-center font-bold'>Random</h2>
            <div className='w-[50%] mt-5 mx-auto'>
                {
                    status === 'pending' ? (<div className='w-full h-[350px] rounded-lg bg-gray-300 animate-pulse'></div>)
                        :   (
                                status === 'fulfilled' ? (<img src={gif?.images.original.url} alt='gif' className='w-full max-h-[350px] bg-gray-300 object-cover rounded-lg' loading="lazy"/>)
                                    :   <>Error</>
                            )
                }
            </div>
        </div>
    )
}

export default Random