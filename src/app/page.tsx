import Image from 'next/image';
import './page.scss';
import BiSolidDownArrow from 'react-icons/bi';
import AboutImg from '/src/assets/aboutus.png';
import MyCarousel from '@/components/pages-components/home/MyCarousel';

export default function Home() {
	return (
		<div className="">
			<section
				className="home-hero-section flex justify-center items-end pb-40"
				id="home-hero-section"
			>
				<div>
					<div>
						<ul className="flex gap-16">
							<li className="text-2xl font-medium text-mainWhite  ">
								<p className="drop-shadow-xl">O NÁS</p>
							</li>
							<li className="text-2xl font-medium text-mainWhite">
								<p>ŠTUDIJNÉ ODBORY</p>
							</li>
							<li className="text-2xl font-medium text-mainWhite">
								<p>NOVINKY</p>
							</li>
							<li className="text-2xl font-medium text-mainWhite">
								<p>AREÁL</p>
							</li>
						</ul>
					</div>
					<div>{/* <BiSolidDownArrow /> */}</div>
				</div>
			</section>

			{/* ABOUT SECTION */}
			<section className="mb-40">
				<div>
					<div className="p-10 flex flex-col gap-5">
						<hr className=" w-screen h-1 text-mainBlue" />
						<h1 className="text-7xl font-extrabold text-center text-mainBlue ">
							<span className="border-t border-mainBlue inline-block  w-3/7 pt-12">
								ŠKOLSKÝ PROFIL
							</span>
						</h1>

						<p className="text-xl font-medium text-center">
							PRIPRAVUJEME ŠTUDENTOV NA BUDÚCNOSŤ
						</p>
					</div>
					<div className="container mx-auto grid grid-cols-2 gap-8 mt-12">
						<div className=" w-10/12 flex flex-col justify-between items-stretch">
							<p className=" text-mainBlue font-normal text-lg">
								Vitajte na stránke Strednej priemyselnej školy informačných
								technológií (SPSIT) v Kysuckom Novom Meste! Sme moderná škola so
								výberom zo šiestich odborov, zahŕňajúcich IT, technické
								zameranie a logistiku. Ponúkame praktické a inovatívne
								vzdelávanie, ktoré pripravuje študentov na úspešnú kariéru v
								technologickom svete. Sme aktívni v podujatiach a neustále
								prinášame novinky, aby sme obohatili skúsenosti našich
								študentov. Tešíme sa na vašu účasť a vstup do sveta na SPŠIT!
							</p>
							<div
								className="bg-transparent border border-mainBlue w-60 h-14 py-1 px-1 "
								id="border"
							>
								<a
									href="/"
									className="bg-mainBlue text-mainWhite w-full h-full text-center font-medium flex justify-center items-center"
								>
									VIAC O NÁS
								</a>
							</div>
						</div>
						<div>
							<Image src={AboutImg} alt="school logo" width={752} height={0} />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div>
					<div className="p-10 flex flex-col gap-5">
						<hr className=" w-screen h-1 text-mainBlue" />
						<h1 className="text-7xl font-extrabold text-center text-mainBlue ">
							<span className="border-t border-mainBlue inline-block  w-3/7 pt-12">
								ŠTUDIJNÉ ODBORY
							</span>
						</h1>
					</div>
					<div>
						<MyCarousel />
					</div>
				</div>
			</section>
			<section>
				<h1>NOVINKY / PODUJATIA</h1>
			</section>
			<section>
				<h1>PREKUMAJTE AREAL</h1>
			</section>
			<section>
				<h1>SKOLSKY PROFIL</h1>
			</section>
		</div>
	);
}
