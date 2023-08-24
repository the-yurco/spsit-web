import Image from 'next/image'

import {RxDoubleArrowDown} from 'react-icons/rx'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa6';

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
    <div className='container mx-auto px-28 grid grid-rows-6 pt-10'>
      <div className='row-start-1 row-end-2 flex justify-between text-white py-8 items-center relative'>
        <h3 className='uppercase text-xl font-normal'>DôLEžITé INFORMáCIE</h3>
        <h1 className='relative text-3xl font-semibold'>
          <div className='absolute top-0 right-0 transform w-10 h-1 bg-mainGreen'></div>
          Aktuality
        </h1>
      </div>
      <div className='row-start-2 row-end-7 grid grid-cols-4 gap-16 '>
        <div id='top-news' className=' col-start-1 col-end-3 border-b-4 border-mainGreen rounded flex flex-col p-10 gap-3 justify-end'>
          <h2 className=' uppercase text-xl font-bold text-white'>2% dane</h2>
          <h4 className='text-white text-md w-3/5 font-medium'>Chcete pomôcť zlepšiť podmienky
          na štúdium, športové aktivity alebo
          záujmovú činnosť Vášho dieťa?
          prispejte 2% z Vašej dane z príjmu
          NAšEJ šKOLE</h4>
          <button className='text-white p-1 border rounded text-sm w-max hover:text-mainGreen duration-300 transition-all'>Viac...</button>
        </div>
        <div className=' col-start-3 col-end-4 flex flex-col gap-3'>
          <Image src="/2.jpg" alt="" height={240} width={300} className='border-b-2 border-mainGreen rounded'/>
          <div className='flex flex-col gap-3'>
            <h2 className='text-lgs text-white font-bold uppercase'>Prijímacie skúšky</h2>
            <p className='text-white text-sm'>Milí žiaci základných škôl, na tomto mieste Vám budeme podávať všetky informácie ohľadom prijímacieho konania pre školský rok 2023/2024. 
              V prípade otázok nás kontaktujte prostredníctvom EduPage, resp. telefonicky. </p>
            <button className='text-white p-1 border rounded text-sm w-max hover:text-mainGreen duration-300 transition-all'>Viac...</button>
          </div>
          <div></div>
        </div>
        <div className=' col-start-4 col-end-5 flex flex-col gap-3 relative'>
        <Image src="/3.jpg" alt="" height={240} width={300} className='border-b-2 border-mainGreen rounded'/>
          <div className='flex flex-col gap-3'>
            <h2 className='text-lgs text-white font-bold uppercase'>deň otvorených dverí</h2>
            <p className='text-white text-sm'>Srdečne vás pozývame na Deň otvorených dverí SPŠ IT KNM. Budete mať možnosť stretnúť sa s pedagógmi ako aj našimi študentami. Tešíme sa na osobné stretnutie a vaše otázky. </p>
            <button className='text-white p-1 border rounded text-sm w-max hover:text-mainGreen duration-300 transition-all'>Viac...</button>
          </div>
          <div className='flex gap-3 absolute bottom-0 right-0'>
            <button className='border border-mainGreen p-3 rounded hover:bg-mainGreen hover:text-white duration-300 transition-all text-mainGreen'><FaChevronLeft/></button>
            <button className='border border-mainGreen p-3 rounded hover:bg-mainGreen hover:text-white duration-300 transition-all text-mainGreen'><FaChevronRight/></button>
          </div>
        </div>
      </div>
    </div>
  </section>
    {/* // NEWS SECTION end */}

    {/* // ABOUT SECTION start */}
    <section id='about-section' className='h-screen w-screen relative'>
  <div className='container mx-auto pl-28 grid grid-rows-6 pt-10'>
  </div>
  <div className='absolute top-0 left-0 w-1/2 h-full transform -skew-x-12 bg-mainGreen'></div>
  <div className='absolute top-0 right-0 w-1/2 h-full transform skew-x-12 bg-white'></div>
</section>



    {/* // ABOUT SECTION end */}
    </>

  )
}
