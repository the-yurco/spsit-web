import Image from 'next/image'

import {RxDoubleArrowDown} from 'react-icons/rx'

export default function Home() {
  return (
    <>
    {/* // HERO SECTION start */}
    <section id='hero-section' className='h-screen w-screen relative top-0 grid grid-rows-6 gap-5 '>
      <div className='flex justify-center row-start-5 row-end-6 self-end'>
        <ul className='flex gap-8 text-xl font-semibold text-white z-20'>
          <li><a href="" className=' hover:text-mainGreen hover:underline duration-300 transition-all'>Aktuality</a></li>
          <li><a href="" className=' hover:text-mainGreen hover:underline duration-300 transition-all'>O nás</a></li>
          <li><a href="" className=' hover:text-mainGreen hover:underline duration-300 transition-all'>Študijné odbory</a></li>
          <li><a href="" className=' hover:text-mainGreen hover:underline duration-300 transition-all'>Edupage</a></li>
          <li><a href="" className=' hover:text-mainGreen hover:underline duration-300 transition-all'>Novinky</a></li>
          <li><a href="" className=' hover:text-mainGreen hover:underline duration-300 transition-all'>Kontakt</a></li>
        </ul>
      </div>
      <div className='flex justify-center row-start-6 row-end-7 '>
        <div className='flex gap-8 text-4xl font-semibold text-white z-20 hover:text-mainGreen hover:underline duration-300 transition-all hover:cursor-pointer'>
          <RxDoubleArrowDown/>
        </div>
      </div>
    </section>
    {/* // HERO SECTION end */}

    {/* // NEWS SECTION start */}
    <section id='news-section' className='h-screen w-screen bg-secondBlue'>
    <div className='container mx-auto px-16 grid grid-rows-6 pt-14'>
      <div className='row-start-1 row-end-2 flex justify-between text-white py-8 items-center relative'>
        <h3 className='uppercase text-xl font-normal'>DôLEžITé INFORMáCIE</h3>
        <h1 className='relative text-3xl font-semibold'>
          <div className='absolute top-0 right-0 transform w-10 h-1 bg-mainGreen'></div>
          Aktuality
        </h1>
      </div>
      <div className='row-start-2 row-end-7 border grid grid-cols-4 gap-10'>
        <div id='top-news' className=' col-start-1 col-end-3 border'>
          <h2>2% dane</h2>
          <h4>chcete pomôcť zlepšiť podmienky
          na štúdium, športové aktivity alebo
          záujmovú činnosť Vášho dieťa?
          prispejte 2% z Vašej dane z príjmu
          NAšEJ šKOLE</h4>
          <button>Viac...</button>
        </div>
        <div className=' col-start-3 col-end-4 border'></div>
        <div className=' col-start-4 col-end-5 border'></div>
      </div>
    </div>
  </section>

    {/* // NEWS SECTION end */}
    </>

  )
}
