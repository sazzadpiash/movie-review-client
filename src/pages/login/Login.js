import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from './../../assets/images/logo/logo-no-background.png'

const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const loginHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
        .then(userCredential=>{
            console.log(userCredential)

            // get jwt token
            fetch('https://wild-zone-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({email: userCredential.user.email})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('token', data.token);
                navigate(from, {replace: true});
            }) 
        })
        .catch(error=>console.log(error))
        event.target.reset();
    }

    const googleLoginHandler = () => {
        signInWithGoogle()
        .then(result=>navigate(from, {replace: true}))
        .catch(error=>console.error(error))
    }

    return (
        <div style={{background: 'url(https://res.cloudinary.com/dteeny3pa/image/upload/v1677601641/kk_vl8n7y.jpg)', backgroundPosition: 'bottom', backgroundSize: 'cover'}}>
            <div className='w-full backdrop-blur-sm py-20'>
                <div className='flex flex-col md:flex-row mx-5 max-w-7xl md:mx-auto rounded-2xl overflow-hidden shadow-2xl'>
                    <div className='basis-4/6 hidden md:block'>
                        <img className='h-full' src="https://res.cloudinary.com/dteeny3pa/image/upload/v1677598953/bg_login_utzsxy.jpg" alt='' />
                    </div>
                    <form onSubmit={loginHandler} className='bg-[#ffffff] basis-2/6 flex items-center justify-center flex-col py-10 md:py-0'>
                        <img src={logo} className='w-72' alt="" />
                        
                        <div className='w-full px-16 mt-10'>
                            <input type="email" className='custom-input' name='email' placeholder='Email' required/>
                        </div>
                        <div className='w-full px-16 mt-10'>
                            <input type="password" className='custom-input' name='password' placeholder='Password' required/>
                        </div>
                        <div className='w-full px-16'>
                            <p className='text-right text-xs mt-3 decoration-dotted underline'>Forget Your Password?</p>
                        </div>
                        <div className='w-full px-16'>
                            <button type='submit' className='w-full btn btn-primary mt-10 rounded-full'>Login</button>
                        </div>
                        <div className="divider px-16">or</div>
                        <div className='w-full px-16'>
                            <button type='button' onClick={()=>googleLoginHandler()} className='w-full btn bg-[#ffffff] border-none custom-shadow rounded-full'><FcGoogle className='text-white text-3xl'></FcGoogle></button>
                            <p className='text-right text-xs mt-3 decoration-dotted underline'>Create a account?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;