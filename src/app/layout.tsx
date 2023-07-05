'use client';

import React, { useState } from 'react';
import './globals.css';
import { Montserrat } from 'next/font/google';

import MainExpandedNavbar from '@/components/main-components/navbars/MainExpandedNavbar';
import MainNavbar from '../components/main-components/navbars/MainNavbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
	const [isContentBlurred, setIsContentBlurred] = useState(false);

	const handleNavbarExpand = () => {
		setIsNavbarExpanded(true);
	};

	const handleNavbarClose = () => {
		setIsNavbarExpanded(false);
	};

	const handleLinkHover = (hovered: boolean) => {
		setIsContentBlurred(hovered);
	};

	return (
		<html lang="en">
			<body className={`${montserrat.className} overflow-x-hidden bg-mainBg`}>
				{isNavbarExpanded ? (
					<MainExpandedNavbar
						onClose={handleNavbarClose}
						onLinkHover={handleLinkHover}
					/>
				) : (
					<MainNavbar onExpand={handleNavbarExpand} />
				)}
				{/* <div className={`content-wrapper ${isContentBlurred ? 'blur' : ''}`}> */}
				{children}
				{/* </div> */}
			</body>
		</html>
	);
}
