import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useScramble } from 'use-scramble';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
	{
		name: 'Watchen.xyz',
		handle:
			'Watchen is a network for NFT enthusiasts. It makes discovering new projects easier and have all the details about them in one place.',
		imageUrl: 'https://www.watchen.xyz/watchen-favicon.png',
		link: 'https://watchen.xyz',
	},
	{
		name: 'Alearning.gr',
		handle:
			'Alearning is an educational ecosystem of tools that provides reliable and effective support to children’s learning difficulties.',
		imageUrl:
			'https://www.alearning.gr/wp-content/uploads/2020/08/cropped-favicon-large-1-192x192.png',
		link: 'https://alearning.gr',
	},
	{
		name: 'Rbooks.gr',
		handle:
			'Rbooks aims to lead the digitalization of the Greek Publishing industry.',
		imageUrl: 'https://rbooks.gr/assets/img/favicon.png',
		link: 'https://rbooks.gr',
	},
	{
		name: 'CivilAlert.gr',
		handle:
			'Civil Alert gives the ability to municipalities to alert citizens for matters of civil protection.',
		imageUrl: '/cafavicon.png',
		link: 'https://civilalert.gr',
	},
];

const Home: NextPage = () => {
	const [isLoading, setLoading] = useState(true);
	const { ref } = useScramble({
		text: 'I consider myself a technologist. Since February 2020, I&#39;ve built and launched a series of innovative projects. My goal is to solve some of the biggest social & economical problems in the world.',
		speed: 2,
		tick: 1,
		scramble: 4,

		chance: 0.63,
	});

	function cn(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<div className='max-w-2xl mx-auto'>
			<Header />

			<div className='relative px-4 sm:px-4 lg:px-8 mt-6 lg:mt-6'>
				{/*
				<div className=''>
					<div className='flex items-center mb-2'>
						<div className='animate-ping rounded-full bg-green-500 h-[8px] w-[8px] inline-block mr-2 absolute' />
						<div className='rounded-full bg-green-500 h-[8px] w-[8px] inline-block mr-2' />
						<p className='text-neutral-300 text-sm'>
							Open to invest in consumer & crypto startups.
						</p>
					</div>
				</div>
				*/}
				<div className=''>
					<div className='text-lg max-w-2xl mx-auto'>
						<h1>
							<span className='mt-2 text-4xl text-left leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100/60 via-slate-100 to-slate-100'>
								Founder of
							</span>
							<span className='mt-2 text-4xl text-left leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100/60 via-slate-100 to-slate-100'>
								{' '}
								<a
									className='link lg:hover:text-[#e08300]'
									href='https://readnet.gr'
									target='_blank'>
									Readnet
								</a>
							</span>
						</h1>
						<p ref={ref} className='mt-6 text-base text-gray-300 mx-auto' />
					</div>

					<div>
						<div className='mt-6 mx-auto max-w-2xl'>
							{projects.map((project) => (
								<div key={project.link}>
									<a href={project.link} target='_blank'>
										<div className='flex space-x-4 lg:hover:bg-white lg:hover:bg-opacity-5 px-1 py-4'>
											<div className='flex-shrink-0 '>
												<Image
													src={project.imageUrl}
													objectFit='cover'
													width={25}
													height={25}
													alt='Project logo'
													className={cn(
														'duration-300 ease-in-out',
														isLoading
															? 'scale-110 blur-2xl grayscale'
															: 'scale-100 blur-0 grayscale-0'
													)}
													onLoadingComplete={() => setLoading(false)}
												/>
											</div>
											<div className='flex-1'>
												<p className='text-base font-medium link'>
													{project.name}
												</p>
												<p className='text-sm mt-1 text-gray-300 max-w-[400px]'>
													{project.handle}
												</p>
											</div>
										</div>
									</a>
									<div className='flex justify-center'>
										<div className='fading-line' />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='mt-16 max-w-2xl mx-auto'>
					<h2 className='text-slate-100 font-bold text-3xl'>Connect</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-6'>
						<a
							className='link lg:hover:bg-white lg:hover:bg-opacity-5 px-2 py-3 rounded-lg'
							href='https://twitter.com/nickolas_tazes'
							target='_blank'>
							Twitter &#8599;
						</a>
						<a
							className='link lg:hover:bg-white lg:hover:bg-opacity-5 px-2 py-3 rounded-lg'
							href='https://github.com/nickolastazes'
							target='_blank'>
							Github &#8599;
						</a>
						<a
							className='link lg:hover:bg-white lg:hover:bg-opacity-5 px-2 py-3 rounded-lg'
							href='https://warpcast.com/tazes'
							target='_blank'>
							Farcaster &#8599;
						</a>
						<a
							className='link lg:hover:bg-white lg:hover:bg-opacity-5 px-2 py-3 rounded-lg'
							href='https://www.instagram.com/nickolas_tazes/'
							target='_blank'>
							Instagram &#8599;
						</a>
						<a
							className='link lg:hover:bg-white lg:hover:bg-opacity-5 px-2 py-3 rounded-lg'
							href='https://www.linkedin.com/in/nickolas-tazes/'
							target='_blank'>
							LinkedIn &#8599;
						</a>
					</div>
				</div>

				<div className='mt-16 max-w-2xl mx-auto'>
					<h2 className='text-slate-100 font-bold text-3xl'>Interviews</h2>
					<p className='mt-6 text-base text-gray-300 mx-auto'>
						I've talked about Readnet and myself on News sites, National TV and
						Podcasts.
					</p>

					<div className='hover:bg-white hover:bg-opacity-5 px-1 py-7'>
						<a
							className='link'
							href='https://open.spotify.com/episode/0WNzPPCRCjlHOdC3A9AfTa'
							target='_blank'>
							E1: Nick Tazes and Watchen.xyz
							<div className='flex items-center space-x-2'>
								<img
									className='h-4 w-4 rounded-lg'
									src='/ab67656300005f1f4c40899b480d39737d9d6818.jpeg'
									alt='Toools Podcast logo'
								/>
								<p className='text-gray-300 text-sm'>Toools Podcast</p>
							</div>
						</a>
					</div>

					<div className='flex justify-center'>
						<div className='fading-line' />
					</div>

					<div className='hover:bg-white hover:bg-opacity-5 px-1 py-7'>
						<a
							className='link'
							href='https://www.youtube.com/watch?v=NOx7rtpBAgY'
							target='_blank'>
							The Alearning platform for children with learning disabilities
							<div className='flex items-center space-x-2'>
								<img
									className='h-4 w-4 rounded-lg'
									src='https://program.ert.gr/images/EPT_favicon.jpg'
									alt='ERT logo'
								/>
								<p className='text-gray-300 text-sm'>ERT 3 (National TV)</p>
							</div>
						</a>
					</div>

					<div className='flex justify-center'>
						<div className='fading-line' />
					</div>

					<div className='lg:hover:bg-white lg:hover:bg-opacity-5 px-1 py-7'>
						<a
							className='link'
							href='https://www.startup.gr/synenteyxeis/synenteyxi-sto-startup-gr-nikolas-tazes-apo-tin-omada-readnet/'
							target='_blank'>
							Interview at Startup.gr: Nickolas Tazes from the Readnet
							Publications team
							<div className='flex items-center space-x-2'>
								<img
									className='h-4 w-4 rounded-lg'
									src='https://www.startup.gr/favicon.ico'
									alt='Startup.gr logo'
								/>
								<p className='text-gray-300 text-sm'> Startup.gr</p>
							</div>
						</a>
					</div>

					<div className='flex justify-center'>
						<div className='fading-line' />
					</div>

					<div className='lg:hover:bg-white lg:hover:bg-opacity-5 px-1 py-7'>
						<a
							className='link'
							href='https://www.platform.gr/life/prosopa/78212-nikolas-tazes-neoi-pou-epixeiroyn-kanoume-to-diavasma-pio-endiaferon'
							target='_blank'>
							Nickolas Tazes (young people who do business): We make reading
							more interesting!
							<div className='flex items-center space-x-2'>
								<img
									className='h-4 w-4 rounded-lg'
									src='https://www.platform.gr/images/0_new/dora/favicon-32x32.png'
									alt='Platform.gr logo'
								/>
								<p className='text-gray-300 text-sm'>Platform.gr</p>
							</div>
						</a>
					</div>

					<div className='flex justify-center'>
						<div className='fading-line' />
					</div>

					<div className='lg:hover:bg-white lg:hover:bg-opacity-5 px-1 py-7'>
						<a
							className='link'
							href='https://www.itspossible.gr/%ce%b7-%ce%b5%ce%bb%ce%bb%ce%b7%ce%bd%ce%b9%ce%ba%ce%ae-%cf%80%ce%bb%ce%b1%cf%84%cf%86%cf%8c%cf%81%ce%bc%ce%b1-%cf%83%cf%84%ce%b7%ce%bd-%ce%bf%cf%80%ce%bf%ce%af%ce%b1-%ce%bc%cf%80%ce%bf%cf%81%ce%b5/'
							target='_blank'>
							The Greek platform where you can find books starting from 2.99
							euros and read them online.
							<div className='flex items-center space-x-2'>
								<img
									className='h-4 w-4 rounded-lg'
									src='https://www.itspossible.gr/wp-content/uploads/2021/02/cropped-favicon-180x180.png'
									alt='Itspossible.gr logo'
								/>
								<p className='text-gray-300 text-sm'>It' Possible</p>
							</div>
						</a>
					</div>
				</div>

				<div className='mt-16 max-w-2xl mx-auto'>
					<h2 className='text-slate-100 font-bold text-3xl'>Where I live</h2>
					<figure className='mt-2 text-gray-300'>
						<img
							className='w-full rounded-xl'
							src='/Screenshot 2022-09-27 at 5.11.15 PM.png'
							alt='The map of Greece with a pin at Volos'
							width='1310'
							height='873'
						/>
					</figure>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
