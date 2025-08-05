'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const footerLinks = [
	{ name: 'About Us', href: '#' },
	{ name: 'Courses', href: '#courses' },
	{ name: 'Register', href: '/register' },
	{ name: 'FAQ', href: '#' },
	{ name: 'Contact', href: '#contact' }
];

const socialLinks = [
	{
		name: 'Facebook',
		href: '#',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
				<path
					fillRule='evenodd'
					d='M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
					clipRule='evenodd'
				/>
			</svg>
		)
	},
	{
		name: 'Twitter',
		href: '#',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
				<path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
			</svg>
		)
	},
	{
		name: 'LinkedIn',
		href: '#',
		icon: (
			<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
				<path
					fillRule='evenodd'
					d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
					clipRule='evenodd'
				/>
			</svg>
		)
	}
];

export default function Footer() {
	return (
		<footer className='bg-[#0c67b0] text-white py-12'>
			<div className='max-w-6xl mx-auto px-4'>
				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}>
					{/* Logo and Description */}
					<motion.div
						className='md:col-span-1'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						viewport={{ once: true }}>
						<div className='flex items-center mb-4'>
							<motion.div
								className='w-12 h-12 bg-white rounded-lg p-2 mr-3'
								whileHover={{ rotate: 5, scale: 1.05 }}>
								<Image
									src='/abol-logo.png'
									alt='Abol Life Support Logo'
									width={48}
									height={48}
									className='w-full h-full object-contain'
								/>
							</motion.div>
							<h3 className='text-2xl font-bold text-white'>
								Abol Life Support
							</h3>
						</div>
						<p className='text-gray-300 mb-4'>
							Training healthcare heroes with AHA-certified life support
							courses. Your path to saving lives starts here.
						</p>
						<div className='flex space-x-4'>
							{socialLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className='text-gray-400 hover:text-white transition-colors duration-200'
									aria-label={link.name}>
									{link.icon}
								</a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						className='md:col-span-1'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						viewport={{ once: true }}>
						<h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
						<ul className='space-y-2'>
							{footerLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className='text-gray-300 hover:text-white transition-colors duration-200'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						className='md:col-span-1'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						viewport={{ once: true }}>
						<h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
						<div className='space-y-2 text-gray-300'>
							<p>📧 info@abollifesupport.com</p>
							<p>📞 +234 807 555 2050</p>
							<p>📞 +234 803 317 2422</p>
							<p>📍 35 Airport Rd, beside Gemstone Supermarket, Warri</p>
							<p>
								📍 Suite 302 Ijeoma Plaza, Rumukrusi Round about, Rumukrusi,
								Port-Harcourt.
							</p>
						</div>
					</motion.div>
				</motion.div>

				{/* Bottom Border */}
				<motion.div
					className='border-t border-blue-400 pt-8'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					viewport={{ once: true }}>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<p className='text-gray-400 text-sm'>
							© 2025 Abol Life Support. All rights reserved.
						</p>
						<p className='text-gray-400 text-sm text-center md:text-right'>
							American Heart Association affiliation disclaimer: Training
							aligned with AHA guidelines. Not directly affiliated with AHA.
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
