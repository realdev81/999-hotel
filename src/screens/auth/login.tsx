import React from 'react'
import AuthImageSlider from '../../components/authImageSlider';

const Login = () => {
    return(

        <div className='h-screen w-screen hidden lg:flex bg-white'>
            <div className='w-1/2 '>
                Login
            </div>
            <div className='w-1/2 h-full relative'>
                <AuthImageSlider/>
            </div>
        </div>
    );
};

export default Login;

