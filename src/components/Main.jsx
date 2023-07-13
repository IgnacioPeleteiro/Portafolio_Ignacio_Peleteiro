import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa';
import perfil from '../assets/Perfil.jpg';


const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left ' 
            src={perfil} 
            alt="cambiar" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/30 font-mono'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center md:items-start sm:items-start'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-emerald-950'>Soy Ignacio Peleteiro</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-emerald-950'>
                        Pronto seré
                         < TypeAnimation
                            sequence={[
                            'Programador',
                            2000,
                            'Full-Stuck',
                            2000,
                            ]}
                            wrapper="h2"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '15px' }}
                            repeat={Infinity} 
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                        <FaFacebookF className='cursor-pointer' size={25} />
                        <FaInstagram className='cursor-pointer' size={25} />
                        <FaLinkedin className='cursor-pointer' size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main