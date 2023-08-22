import Image from 'next/image'

import {RxDoubleArrowDown} from 'react-icons/rx'

export default function Home() {
  return (
    <section id='hero-section' className='h-screen w-screen relative top-0 grid grid-rows-6'>
      <div className='flex justify-center row-start-5 row-end-6'>
        <ul className='flex gap-8 text-xl font-semibold'>
          <li><a href="">Aktuality</a></li>
          <li><a href="">O nás</a></li>
          <li><a href="">Študijné odbory</a></li>
          <li><a href="">Edupage</a></li>
          <li><a href="">Novinky</a></li>
          <li><a href="">Kontakt</a></li>
        </ul>
      </div>
      <div className='flex justify-center row-start-6 row-end-7'>
        <div className='flex gap-8 text-4xl font-semibold'>
          <RxDoubleArrowDown/>
        </div>
      </div>
    </section>
  )
}
