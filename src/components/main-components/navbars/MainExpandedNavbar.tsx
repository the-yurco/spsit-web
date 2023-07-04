'use client';

import React, { useState } from 'react';
import './MainExpandedNavbar.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiChevronDown } from 'react-icons/fi';
import MainNavbarLinks from '@/components/main-components/navbars/object-links/MainNavbarLinks';
import Logo from '@/assets/logo.png';

type Props = {
	onClose: () => void;
};

// interface ExpandContainer {
// 	subLabel: string;
// 	subLink: string;
// 	href: string;
// }

const MainExpandedNavbar = ({ onClose }: Props) => {
	const [expandedMenuIndex, setExpandedMenuIndex] = useState<number | null>(
		null
	);

	const handleMenuHover = (index: number) => {
		setExpandedMenuIndex(index);
	};

	const handleMenuLeave = () => {
		setExpandedMenuIndex(null);
	};

	return (
		<div className="absolute w-screen">
			<div className="bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<nav className="flex items-center h-12 gap-36 w-full">
						<Link href={'/'}>
							<Image src={Logo} alt="school logo" width={140} height={0} />
						</Link>
						<ul className="flex items-center  justify-evenly w-full  gap-10">
							{MainNavbarLinks.map((link, index) => (
								// MENU
								<li
									key={index}
									onMouseEnter={() => handleMenuHover(index)}
									onMouseLeave={() => handleMenuHover(index)}
								>
									<Link
										className=" font-normal text-md text-mainBlue hover:cursor-pointer hover:text-secondBlue"
										href={link.path || '#'}
									>
										{link.label}
									</Link>

									{/* DROPDOWN */}
									{link.expandWrapper && expandedMenuIndex === index && (
										<ul
											className="absolute left-0 mt-2 py-8 pl-52 flex gap-24 w-screen bg-mainWhite"
											id="dropdown-menu"
										>
											{link.expandWrapper.map((container, containerIndex) => (
												<React.Fragment key={containerIndex}>
													<div className="">
														{container.expandContainer &&
															container.expandContainer[0].subLabel && (
																<li className="">
																	<p className="pl-4 pr-10 py-2 text-sm text-secondBlue">
																		{container.expandContainer[0].subLabel}
																	</p>
																</li>
															)}
														{container.expandContainer && (
															<li className="flex flex-wrap justify-start pl-4  delay-100">
																<div className="">
																	{container.expandContainer
																		.slice(1)
																		.map((item, itemIndex) => (
																			<a
																				key={itemIndex}
																				className="block py-2  text-mainBlue  text-lg font-semibold"
																				href={item.path}
																				rel="noopener noreferrer"
																			>
																				{item.subLink}
																			</a>
																		))}
																</div>
															</li>
														)}
													</div>
												</React.Fragment>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
						<div>
							<div>
								<FiUser
									style={{ height: '50px' }}
									className=" text-mainBlue hover:cursor-pointer text-xl"
								/>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8"></div>
		</div>
	);
};

export default MainExpandedNavbar;
