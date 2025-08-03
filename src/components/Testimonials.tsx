'use client';

import { motion } from 'motion/react';

const testimonials = [
	{
		quote:
			'Instructors made the difference between training and true confidence. The real-world scenarios helped me feel prepared for actual emergencies.',
		name: 'Sarah Martinez',
		role: 'EMT Trainee',
		rating: 5
	},
	{
		quote:
			'Blended learning fit perfectly with my shift work. I could complete online modules during breaks and attend hands-on sessions when available.',
		name: 'Michael Chen',
		role: 'ICU Nurse',
		rating: 5
	},
	{
		quote:
			'The AHA certification through this program opened doors in my career. The instructors really know their stuff and care about student success.',
		name: 'Jessica Williams',
		role: 'Paramedic',
		rating: 5
	}
];

export default function Testimonials() {
	return (
		<section className='py-16 bg-[#1B2A49] text-white'>
			<div className='max-w-6xl mx-auto px-4'>
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						What Our Students Say
					</h2>
					<p className='text-lg text-gray-300 max-w-2xl mx-auto'>
						Real feedback from healthcare professionals who have completed our
						training programs.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className='bg-white/10 backdrop-blur-sm rounded-lg p-6'
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.2,
								ease: 'easeOut'
							}}
							viewport={{ once: true }}
							whileHover={{ scale: 1.03, y: -5 }}>
							<motion.div
								className='flex mb-4'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3 + index * 0.2 }}
								viewport={{ once: true }}>
								{[...Array(testimonial.rating)].map((_, i) => (
									<motion.svg
										key={i}
										className='w-5 h-5 text-yellow-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										initial={{ scale: 0, rotate: -180 }}
										whileInView={{ scale: 1, rotate: 0 }}
										transition={{
											delay: 0.4 + index * 0.2 + i * 0.1,
											type: 'spring'
										}}
										viewport={{ once: true }}>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
									</motion.svg>
								))}
							</motion.div>
							<blockquote className='text-lg mb-4 leading-relaxed'>
								&quot;{testimonial.quote}&quot;
							</blockquote>
							<div>
								<div className='font-semibold text-yellow-300'>
									{testimonial.name}
								</div>
								<div className='text-gray-300 text-sm'>{testimonial.role}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
