import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Register() {
	return (
		<>
			<Navigation />
			<div className='min-h-screen bg-gray-50 py-12 px-4 pt-24'>
				<div className='max-w-2xl mx-auto'>
					<div className='text-center mb-8'>
						<h1 className='text-3xl md:text-4xl font-bold text-[#0c67b0] mb-4'>
							Class Registration
						</h1>
						<p className='text-lg text-gray-600'>
							Enter your class ID to begin registration for your AHA-certified
							training course.
						</p>
					</div>

					<div className='bg-white rounded-lg shadow-lg p-8'>
						<form className='space-y-6'>
							<div>
								<label
									htmlFor='classId'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Class ID *
								</label>
								<input
									type='text'
									id='classId'
									name='classId'
									required
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c67b0] focus:border-[#0c67b0] transition-colors'
									placeholder='Enter your class ID'
								/>
								<p className='text-sm text-gray-500 mt-1'>
									This should be provided by your instructor
								</p>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='firstName'
										className='block text-sm font-medium text-gray-700 mb-2'>
										First Name *
									</label>
									<input
										type='text'
										id='firstName'
										name='firstName'
										required
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c67b0] focus:border-[#0c67b0] transition-colors'
									/>
								</div>
								<div>
									<label
										htmlFor='lastName'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Last Name *
									</label>
									<input
										type='text'
										id='lastName'
										name='lastName'
										required
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c67b0] focus:border-[#0c67b0] transition-colors'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Email Address *
								</label>
								<input
									type='email'
									id='email'
									name='email'
									required
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c67b0] focus:border-[#0c67b0] transition-colors'
								/>
							</div>

							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Phone Number
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c67b0] focus:border-[#0c67b0] transition-colors'
								/>
							</div>

							<div>
								<label
									htmlFor='organization'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Organization/Employer
								</label>
								<input
									type='text'
									id='organization'
									name='organization'
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c67b0] focus:border-[#0c67b0] transition-colors'
								/>
							</div>

							<div className='flex items-center'>
								<input
									type='checkbox'
									id='terms'
									name='terms'
									required
									className='w-4 h-4 text-[#0c67b0] border-gray-300 rounded focus:ring-[#0c67b0]'
								/>
								<label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
									I agree to the terms and conditions and privacy policy *
								</label>
							</div>

							<button
								type='submit'
								className='w-full bg-[#0c67b0] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300'>
								Complete Registration
							</button>
						</form>

						<div className='mt-6 text-center'>
							<Link
								href='/'
								className='text-[#0c67b0] hover:text-blue-700 font-medium'>
								← Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
