'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const steps = [
	{
		number: '1',
		title: 'Receive your class ID',
		description:
			'Get your unique class ID from your instructor or training coordinator.'
	},
	{
		number: '2',
		title: 'Click the register button',
		description: 'Navigate to our registration page using the button below.'
	},
	{
		number: '3',
		title: 'Enter your ID and fill out the form',
		description:
			'Complete the registration form with your class ID and personal details.'
	}
];

export default function HowToRegister() {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-4xl mx-auto px-4 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<h2 className='text-3xl md:text-4xl font-bold text-[#0c67b0] mb-4'>
						Got a Class ID? You&apos;re 30 Seconds Away from Registering
					</h2>
					<p className='text-lg text-gray-600 mb-12'>
						Quick and easy registration process for students with class IDs
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
					{steps.map((step, index) => (
						<motion.div
							key={index}
							className='relative'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.2,
								ease: 'easeOut'
							}}
							viewport={{ once: true }}>
							<motion.div
								className='flex items-center justify-center w-12 h-12 bg-[#D71920] text-white font-bold text-xl rounded-full mx-auto mb-4'
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{
									delay: 0.3 + index * 0.2,
									type: 'spring',
									stiffness: 200
								}}
								viewport={{ once: true }}
								whileHover={{ scale: 1.1, rotate: 5 }}>
								{step.number}
							</motion.div>
							<h3 className='text-lg font-bold text-[#0c67b0] mb-2'>
								{step.title}
							</h3>
							<p className='text-gray-600'>{step.description}</p>
							{index < steps.length - 1 && (
								<motion.div
									className='hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-6'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
									viewport={{ once: true }}
								/>
							)}
						</motion.div>
					))}
				</div>

				<motion.div
					className='space-y-4'
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					viewport={{ once: true }}>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Link
							href='/register'
							className='inline-flex items-center bg-[#D71920] hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-300'>
							Go to Registration Page
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
					<p className='text-sm text-gray-500'>
						💡 Got a class ID from your instructor? Start here.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
