'use client';

import { motion } from 'motion/react';

const features = [
	{
		icon: '✅',
		title: 'AHA-Certified Instructors',
		description:
			'Learn from experienced professionals with official AHA certification and real-world expertise.'
	},
	{
		icon: '📚',
		title: 'Real-World Scenarios',
		description:
			'Practice with realistic simulations and case studies based on actual emergency situations.'
	},
	{
		icon: '🕒',
		title: 'Flexible Scheduling',
		description:
			'Choose from multiple class times and formats to fit your busy healthcare schedule.'
	},
	{
		icon: '💬',
		title: 'Student Support',
		description:
			'Get ongoing support from our team before, during, and after your training.'
	},
	{
		icon: '🌍',
		title: 'In-Person & Remote Options',
		description:
			'Access training through in-person sessions or online modules based on your needs.'
	}
];

export default function WhyTrainWithUs() {
	return (
		<section className='py-16 bg-[#F5F5F5]'>
			<div className='max-w-6xl mx-auto px-4'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<h2 className='text-3xl md:text-4xl font-bold text-[#0c67b0] mb-4'>
						Why Train With Us?
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						We provide comprehensive, practical training that prepares you for
						real emergency situations.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='text-center'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: 'easeOut'
							}}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05 }}>
							<motion.div
								className='text-4xl mb-4'
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								transition={{
									delay: 0.2 + index * 0.1,
									type: 'spring',
									stiffness: 200
								}}
								viewport={{ once: true }}>
								{feature.icon}
							</motion.div>
							<h3 className='text-xl font-bold text-[#0c67b0] mb-3'>
								{feature.title}
							</h3>
							<p className='text-gray-600 leading-relaxed'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
