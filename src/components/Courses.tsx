'use client';

import { motion } from 'motion/react';

const courses = [
	{
		title: 'BLS (Basic Life Support)',
		description:
			'Essential life-saving skills including CPR, AED use, and choking relief.',
		target: 'For healthcare workers',
		icon: '🏥'
	},
	{
		title: 'ACLS (Advanced Cardiac Life Support)',
		description:
			'Advanced cardiovascular emergency skills and team-based resuscitation.',
		target: 'For ICU/ER professionals',
		icon: '🚑'
	},
	{
		title: 'EMT (Emergency Medical Training)',
		description:
			'Comprehensive emergency response and patient care techniques.',
		target: 'For emergency responders',
		icon: '🚨'
	},
	{
		title: 'GMT (Global Medical Training)',
		description:
			'Specialized training for challenging environments and rescue operations.',
		target: 'For global rescue and aid workers',
		icon: '🌍'
	}
];

export default function Courses() {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-6xl mx-auto px-4'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<h2 className='text-3xl md:text-4xl font-bold text-[#0c67b0] mb-4'>
						Our Training Courses
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Choose from our comprehensive range of AHA-certified courses
						designed for different healthcare professionals and emergency
						responders.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{courses.map((course, index) => (
						<motion.div
							key={index}
							className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: 'easeOut'
							}}
							viewport={{ once: true }}
							whileHover={{ y: -5, scale: 1.02 }}>
							<motion.div
								className='text-4xl mb-4'
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
								viewport={{ once: true }}>
								{course.icon}
							</motion.div>
							<h3 className='text-xl font-bold text-[#0c67b0] mb-3'>
								{course.title}
							</h3>
							<p className='text-gray-600 mb-4 line-clamp-3'>
								{course.description}
							</p>
							<p className='text-[#D71920] font-semibold mb-4'>
								{course.target}
							</p>
							<motion.a
								href='#'
								className='inline-flex items-center text-[#D71920] hover:text-red-700 font-medium transition-colors duration-200'
								whileHover={{ x: 5 }}>
								Learn More
								<svg
									className='ml-1 w-4 h-4'
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
							</motion.a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
