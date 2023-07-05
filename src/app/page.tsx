import Image from 'next/image';
import './page.scss';
import BiSolidDownArrow from 'react-icons/bi';

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
			<section>
				<h1>SKOLSKY PROFIL</h1>
			</section>
			<section>
				<h1>STUDIJNE ODBORY</h1>
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
