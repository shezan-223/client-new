import React from 'react';
import Banner from './Banner';
import { useAuth } from '../Auth/AuthContext';

const Home = () => {
    const {user}=useAuth()
   
    

    return (
        <div className='container mx-auto bg-[#C1EDF0] min-h-screen'>
          <p>{user?.email}  </p>
            <Banner></Banner>
{/* dgdgdddddd ajke eto thuk */ } 
            <div>
            
            </div>
        </div>
    );
};

export default Home;