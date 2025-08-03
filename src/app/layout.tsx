import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Abol Life Support | AHA-Certified Training for Healthcare Heroes',
	description:
		'Train to Save Lives. Learn from the Best. AHA-Certified Life Support Training for Healthcare Heroes, First Responders, and Divers.',
	keywords:
		'AHA certified, BLS, ACLS, EMT training, life support, CPR, healthcare training'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
