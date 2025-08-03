'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
	{ name: 'Home', href: '#home' },
	{ name: 'Courses', href: '#courses' },
	{ name: 'Why Us', href: '#why-us' },
	{ name: 'Register', href: '#register' },
	{ name: 'Testimonials', href: '#testimonials' },
	{ name: 'Contact', href: '#contact' }
];

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
			}`}>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					{/* Logo */}
					<Link href='/' className='flex items-center space-x-3'>
						<div className='w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg p-1 shadow-sm'>
							<Image
								src='/abol-logo.png'
								alt='Abol Life Support Logo'
								width={48}
								height={48}
								className='w-full h-full object-contain'
							/>
						</div>
						<span
							className={`text-xl md:text-2xl font-bold transition-colors ${
								isScrolled ? 'text-[#0c67b0]' : 'text-white'
							}`}>
							Abol Life Support
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className={`font-medium transition-colors hover:text-[#0c67b0] ${
									isScrolled ? 'text-gray-700' : 'text-white'
								}`}
								onClick={closeMenu}>
								{link.name}
							</a>
						))}
						<Link
							href='/register'
							className='bg-[#0c67b0] hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300'>
							Register Now
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className='md:hidden p-2 rounded-md'
						aria-label='Toggle menu'>
						<svg
							className={`w-6 h-6 transition-colors ${
								isScrolled ? 'text-gray-700' : 'text-white'
							}`}
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							{isMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className='md:hidden bg-white border-t border-gray-200 shadow-lg'
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								className='px-2 pt-2 pb-3 space-y-1'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.1 }}>
								{navLinks.map((link, index) => (
									<motion.a
										key={link.name}
										href={link.href}
										className='block px-3 py-2 text-gray-700 font-medium hover:text-[#0c67b0] hover:bg-gray-50 rounded-md transition-colors'
										onClick={closeMenu}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.1 + index * 0.05 }}>
										{link.name}
									</motion.a>
								))}
								<motion.div
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.1 + navLinks.length * 0.05 }}>
									<Link
										href='/register'
										className='block w-full text-center bg-[#0c67b0] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4'
										onClick={closeMenu}>
										Register Now
									</Link>
								</motion.div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
