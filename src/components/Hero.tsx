'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Hero() {
	return (
		<section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c67b0] to-[#1B2A49] text-white pt-16'>
			{/* Background overlay */}
			<div className='absolute inset-0 bg-black/20'></div>

			{/* Content */}
			<div className='relative z-10 max-w-4xl mx-auto px-4 text-center'>
				{/* Logo */}
				<motion.div
					className='flex justify-center mb-8'
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{
						duration: 0.8,
						ease: 'easeOut',
						type: 'spring',
						stiffness: 100
					}}>
					<div className='w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-4 shadow-xl overflow-clip'>
						<Image
							src='/abol-logo.png'
							alt='Abol Life Support Logo'
							width={128}
							height={128}
							className='w-full h-full object-contain'
						/>
					</div>
				</motion.div>

				<motion.h1
					className='text-4xl md:text-6xl font-bold mb-6 leading-tight'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}>
					Train to Save Lives.
					<br />
					<motion.span
						className='text-yellow-300'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.8 }}>
						Learn from the Best.
					</motion.span>
				</motion.h1>

				<motion.p
					className='text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}>
					AHA-Certified Life Support Training for Healthcare Heroes, First
					Responders, and Divers.
				</motion.p>

				<motion.div
					className='mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}>
					<p className='text-yellow-300 font-medium text-xl md:text-2xl italic'>
						&quot;We make learning to save lives easy and affordable&quot;
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}>
					<Link
						href='/register'
						className='inline-flex items-center bg-[#D71920] hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-300'>
						Register with a Class ID
						<svg
							className='ml-2 w-5 h-5'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</Link>
				</motion.div>
			</div>

			{/* Background decoration */}
			<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent'></div>
		</section>
	);
}
