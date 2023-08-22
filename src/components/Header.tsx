import React from 'react'

import Image from 'next/image'

import logo from '/public/logo.svg';

type Props = {}

const Header = (props: Props) => {
  return (
    <>
        <div>
            <Image src={logo} alt={''} width={300} height={300}/>
        </div>
    </>
  )
}

export default Header