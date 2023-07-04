import Image from 'next/image';
import './page.scss';

export default function Home() {
	return (
		<div className="">
			<section
				className="home-hero-section flex justify-center items-end"
				id="home-hero-section"
			>
				<div>
					<ul className="flex gap-10">
						<li className="text-xl font-semibold text-mainWhite">O NÁS</li>
						<li className="text-xl font-semibold text-mainWhite">
							ŠTUDIJNÉ ODBORY
						</li>
						<li className="text-xl font-semibold text-mainWhite">NOVINKY</li>
						<li className="text-xl font-semibold text-mainWhite">AREÁL</li>
					</ul>
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
