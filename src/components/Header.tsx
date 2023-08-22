import React from 'react'

import Image from 'next/image'

import logo from '/public/logo.svg';

import {GiHamburgerMenu} from 'react-icons/gi';
import {FaUser}from 'react-icons/fa6'

type Props = {}

const Header = (props: Props) => {
  return (
    <section className="w-screen mt-16 absolute">
        <div className="container mx-auto relative flex justify-between z-10 px-16">
        <div>
                <Image src={logo} alt={''} width={230} height={150}/>
            </div>
            <div className='flex justify-between gap-10'>
                <div className='flex justify-between items-center gap-1'>
                    <div className=' text-mainGreen text-4xl'>
                        <GiHamburgerMenu/>
                    </div>
                    <h3 className=' text-mainGreen uppercase font-semibold'>Menu</h3>
                </div>
                <div className='flex justify-between items-center text-mainGreen text-2xl'>
                    <FaUser/>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Header