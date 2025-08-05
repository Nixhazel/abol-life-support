'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const courses = [
	{
		title: 'BLS (Basic Life Support)',
		description:
			'Essential life-saving skills including CPR, AED use, and choking relief.',
		target: 'For healthcare workers',
		icon: '🏥',
		featured: true,
		link: 'https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/basic-life-support-bls-training'
	},
	{
		title: 'ACLS (Advanced Cardiac Life Support)',
		description:
			'Advanced cardiovascular emergency skills and team-based resuscitation.',
		target: 'For ICU/ER professionals',
		icon: '🚑',
		featured: true,
		link: 'https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/acls'
	},
	{
		title: 'EMT (Emergency Medical Training)',
		description:
			'Comprehensive emergency response and patient care techniques.',
		target: 'For emergency responders',
		icon: '🚨',
		featured: true,
		link: 'https://www.redcross.org/take-a-class/emt'
	},
	{
		title: 'GMT (Global Medical Training)',
		description:
			'Specialized training for challenging environments and rescue operations.',
		target: 'For global rescue and aid workers',
		icon: '🌍',
		featured: true,
		link: 'https://www.gmtonline.net/'
	},
	{
		title: 'PALS (Paediatric Advance Life Support)',
		description:
			'Specialized pediatric emergency care and advanced life support techniques.',
		target: 'For pediatric healthcare professionals',
		icon: '👶',
		featured: false,
		link: 'https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/pediatric/pals-plus-course-options'
	},
	{
		title: 'HCA (Health Care Assistant Course)',
		description:
			'Comprehensive training for healthcare assistants and support staff.',
		target: 'For healthcare support staff',
		icon: '🩺',
		featured: false,
		link: 'https://lead-academy.org/course/health-care-assistant-training'
	},
	{
		title: 'DFA (First Aid CPR AED)',
		description:
			'Essential first aid, CPR, and automated external defibrillator training.',
		target: 'For general public and workplace safety',
		icon: '🚨',
		featured: false,
		link: 'https://cpr.heart.org/en/cpr-courses-and-kits/heartsaver/heartsaver-cpr-aed-training'
	},
	{
		title: 'Trauma Training',
		description:
			'Advanced trauma care and emergency response for critical situations.',
		target: 'For emergency responders and medical professionals',
		icon: '🏥',
		featured: false,
		link: 'https://traumaresearchfoundation.org/programs/certificate-program/'
	},
	{
		title: 'DMT (IMCA Approved Dive Medic Technician)',
		description:
			'Specialized medical training for diving operations and underwater emergencies.',
		target: 'For commercial divers and offshore workers',
		icon: '🤿',
		featured: false,
		link: 'https://wa.me/2348075552050?text=Hi%2C%20I%27m%20interested%20in%20the%20DMT%20(IMCA%20Approved%20Dive%20Medic%20Technician)%20course.%20Can%20you%20provide%20more%20information%3F'
	},
	{
		title: 'Clinical Skills Hands-on Practice',
		description:
			'Practical clinical skills training with hands-on experience and simulation.',
		target: 'For healthcare students and professionals',
		icon: '🔬',
		featured: false,
		link: 'https://wa.me/2348075552050?text=Hi%2C%20I%27m%20interested%20in%20the%20Clinical%20Skills%20Hands-on%20Practice%20course.%20Can%20you%20provide%20more%20information%3F'
	}
];

export default function Courses() {
	const [showAllCourses, setShowAllCourses] = useState(false);
	const featuredCourses = courses.filter((course) => course.featured);
	const additionalCourses = courses.filter((course) => !course.featured);

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

				{/* Featured Courses */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
					{featuredCourses.map((course, index) => (
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
								href={course.link}
								target='_blank'
								rel='noopener noreferrer'
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

				{/* View All Courses Button */}
				<div className='text-center mb-8'>
					<motion.button
						onClick={() => setShowAllCourses(!showAllCourses)}
						className='inline-flex items-center bg-[#0c67b0] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						{showAllCourses ? 'Show Less Courses' : 'View All Courses'}
						<motion.svg
							className='ml-2 w-4 h-4'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							animate={{ rotate: showAllCourses ? 180 : 0 }}
							transition={{ duration: 0.3 }}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 9l-7 7-7-7'
							/>
						</motion.svg>
					</motion.button>
				</div>

				{/* Additional Courses (Expandable) */}
				<AnimatePresence>
					{showAllCourses && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className='overflow-hidden'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{additionalCourses.map((course, index) => (
									<motion.div
										key={index + featuredCourses.length}
										className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200'
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
											ease: 'easeOut'
										}}
										whileHover={{ y: -5, scale: 1.02 }}>
										<motion.div
											className='text-4xl mb-4'
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}>
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
											href={course.link}
											target='_blank'
											rel='noopener noreferrer'
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
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
