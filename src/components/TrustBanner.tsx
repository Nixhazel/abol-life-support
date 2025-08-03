'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function TrustBanner() {
	return (
		<section className='bg-[#F5F5F5] py-12'>
			<div className='max-w-6xl mx-auto px-4 text-center'>
				<motion.div
					className='flex flex-col md:flex-row items-center justify-center gap-6'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<motion.div
						className='w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg p-4'
						initial={{ scale: 0, rotate: -180 }}
						whileInView={{ scale: 1, rotate: 0 }}
						transition={{
							delay: 0.2,
							duration: 0.6,
							type: 'spring',
							stiffness: 100
						}}
						viewport={{ once: true }}
						whileHover={{ scale: 1.05, rotate: 5 }}>
						<Image
							src='/AHA_LOGO-RGB.png'
							alt='American Heart Association Logo'
							width={96}
							height={96}
							className='w-full h-full object-contain'
						/>
					</motion.div>
					<motion.div
						className='text-[#0c67b0]'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						viewport={{ once: true }}>
						<h2 className='text-2xl md:text-3xl font-bold mb-2'>
							Proudly aligned with the
						</h2>
						<p className='text-xl md:text-2xl'>American Heart Association</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
