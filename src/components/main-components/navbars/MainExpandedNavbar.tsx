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
	onLinkHover: (hovered: boolean) => void;
};

// interface ExpandContainer {
// 	subLabel: string;
// 	subLink: string;
// 	href: string;
// }

const MainExpandedNavbar = ({ onClose, onLinkHover }: Props) => {
	const [expandedMenuIndex, setExpandedMenuIndex] = useState<number | null>(
		null
	);
	const [isPageBlurred, setIsPageBlurred] = useState(false);

	const handleMenuHover = (index: number) => {
		setExpandedMenuIndex(index);
		onLinkHover(true);
	};

	const handleMenuLeave = () => {
		setExpandedMenuIndex(null);
		onLinkHover(false);
	};

	return (
		<div className="absolute w-screen" id="main-expand-navbar">
			<div className="bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<nav className="flex items-center h-12 gap-36 w-full">
						<Link href={'/'}>
							<Image src={Logo} alt="school logo" width={140} height={0} />
						</Link>
						<ul className="flex items-center  justify-evenly w-full  gap-10">
							{/* This expression maps over an array called MainNavbarLinks and generates list items (<li>) for each element in the array */}
							{MainNavbarLinks.map((link, index) => (
								//! MENU
								//? Each list item has a unique key attribute assigned to it
								<li
									key={index}
									//? These functions are responsible for managing the state or behavior when the mouse enters or leaves a specific list item
									onMouseEnter={() => handleMenuHover(index)}
									onMouseLeave={() => handleMenuLeave()}
								>
									<Link
										className=" font-normal text-md text-mainBlue hover:cursor-pointer hover:text-secondBlue"
										href={link.path || '#'}
									>
										{link.label}
									</Link>

									{/* DROPDOWN */}
									{/*  Here is a conditional rendering block using the && operator */}
									{/*  It checks if the current link has an expandWrapper property and if the expandedMenuIndex (presumably a state variable) matches the current index */}
									{/* If both conditions are true, it renders a nested unordered list (<ul>) as a dropdown menu */}
									{link.expandWrapper && expandedMenuIndex === index && (
										<ul
											className="absolute left-0 mt-2 py-8 pl-52 flex gap-24 w-screen bg-mainWhite"
											id="dropdown-menu"
										>
											{/* JavaScript expression that maps over an array called expandWrapper for each container */}
											{/* Each container represents a dropdown menu container within the overall dropdown menu */}
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
