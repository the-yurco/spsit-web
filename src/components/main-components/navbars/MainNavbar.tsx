import React from 'react';
import Image from 'next/image';
import { RiMenuLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import Logo from '@/assets/logo2.svg';
import './MainNavbar.scss';

type Props = {
	onExpand: () => void;
};

const MainNavbar = ({ onExpand }: Props) => {
	return (
		<div id="main-navbar" className="w-screen absolute indent-1000">
			<div className="">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<nav className="flex items-center justify-between h-32 gap-36 w-full">
						<div>
							<Image src={Logo} alt={''} height={60} width={0} />
						</div>
						<div className="flex gap-5">
							<RiMenuLine
								style={{ height: '35px', width: '35px' }}
								className=" text-mainGreen hover:cursor-pointer text-xl"
								onClick={onExpand} // Invoke onExpand when the user clicks the user icon
							/>
							<FiUser
								style={{ height: '35px', width: '35px' }}
								className=" text-mainGreen hover:cursor-pointer text-xl"
							/>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MainNavbar;
