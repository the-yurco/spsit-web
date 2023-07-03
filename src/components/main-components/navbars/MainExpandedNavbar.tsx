'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiChevronDown } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import MainNavbarLinks from '@/components/main-components/navbars/object-links/MainNavbarLinks';
import Logo from '@/assets/logo.png';

type Props = {};

interface ExpandContainer {
	subLabel: string;
	subLink: string;
}

const MainExpandedNavbar: React.FC<Props> = (props: Props) => {
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
		<div>
			<div className="bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<nav className="flex items-center h-10 gap-60 w-full">
						<Image src={Logo} alt="school logo" width={95} height={50} />
						<ul className="flex items-center justify-between w-full overflow-y-hidden">
							{MainNavbarLinks.map((link, index) => (
								<li
									key={index}
									onMouseEnter={() => handleMenuHover(index)}
									onMouseLeave={() => handleMenuHover(index)}
								>
									<p className="font-medium text-sm text-gray-950 hover:cursor-pointer">
										{link.label}
									</p>
									{link.expandWrapper && expandedMenuIndex === index && (
										<ul className="absolute left-0 mt-2 py-2 px-60 bg-white border flex w-screen transition-all duration-300">
											{link.expandWrapper.map((container, containerIndex) => (
												<React.Fragment key={containerIndex}>
													<div>
														{container.expandContainer &&
															container.expandContainer[0].subLabel && (
																<li className="transition-all duration-300 ease-in-out">
																	<p className="pl-4 pr-10 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100">
																		{container.expandContainer[0].subLabel}
																	</p>
																</li>
															)}
														{container.expandContainer && (
															<li className="flex flex-wrap justify-start pl-4 transition-all duration-300 ease-in-out delay-100">
																<div className="">
																	{container.expandContainer
																		.slice(1)
																		.map((item, itemIndex) => (
																			<a
																				key={itemIndex}
																				className="block py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"
																				href={item.path}
																				target="_blank"
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
									className="text-gray-950 hover:cursor-pointer"
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
