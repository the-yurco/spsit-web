'use client';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import SVG1 from '/src/assets/hand-coding-bro-1.svg';

export default function App() {
	return (
		<>
			<Swiper
				autoplay={{
					delay: 100,
					disableOnInteraction: false
				}}
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide className="flex flex-col text-center">
					<h1>INTELIGENTNÉ TECHNOLÓGIE</h1>
					<p className=" font-normal text-sm">
						Nový študijný odbor sa otvára od školského roka 2020/2021
					</p>
					<Image src={SVG1} alt={''} height={180} width={170}></Image>
				</SwiperSlide>
				<SwiperSlide>STROJÁRSTVO</SwiperSlide>
				<SwiperSlide>MECHATRONIKA</SwiperSlide>
				<SwiperSlide>INFORMAČNÉ A SIEŤOVÉ TECHNOLÓGIE</SwiperSlide>
				<SwiperSlide>LOGISTIKA</SwiperSlide>
			</Swiper>
		</>
	);
}
