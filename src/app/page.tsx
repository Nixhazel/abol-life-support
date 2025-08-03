import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import Courses from '@/components/Courses';
import WhyTrainWithUs from '@/components/WhyTrainWithUs';
import HowToRegister from '@/components/HowToRegister';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Navigation />
			<main className='min-h-screen'>
				<section id='home'>
					<Hero />
				</section>
				<TrustBanner />
				<section id='courses'>
					<Courses />
				</section>
				<section id='why-us'>
					<WhyTrainWithUs />
				</section>
				<section id='register'>
					<HowToRegister />
				</section>
				<section id='testimonials'>
					<Testimonials />
				</section>
				<section id='contact'>
					<Footer />
				</section>
			</main>
		</>
	);
}
