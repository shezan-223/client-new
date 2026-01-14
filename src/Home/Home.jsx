import React from 'react';
import Banner from './Banner';
import { useAuth } from '../Auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import { useNavigate } from 'react-router';
import Card from './Card';

const Home = () => {
    const {user}=useAuth()
    const axiosSecure =useAxiosSecure()
    const navigate =useNavigate()
   const {data:properties =[] ,isPending,error}=useQuery({
    queryKey :['latestproperties'],
    queryFn :async()=>{
        const res =await axiosSecure.get("/api/properties/latest")
        return res.data;
    }
   })
    // if(isPending)return <span className="loading loading-ring loading-xl flex justify-center items-center text-center"></span>

    return (
        <div className='container mx-auto bg-[#C1EDF0] min-h-screen'>
          <p>{user?.email}  </p>
            <Banner></Banner>
            <h2 className='text-center mt-2  p-3 max-w-2xl mx-auto bg-white rounded-2xl text-2xl font-bold shadow-2xl ' >Latest Properties</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
            
            {
                properties.map((item)=><Card key={item._id} item ={item} ></Card>)
                
            }

            </div>
        </div>
    );
};

export default Home;