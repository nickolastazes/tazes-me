import React from 'react';

type Props = {};

function Footer({}: Props) {
	return (
		<div className='max-w-2xl mt-16 mb-1'>
			<div className='flex justify-center mt-9'>
				<div className='fading-line' />
			</div>
			<footer className='flex mx-auto mt-8 lg:mt-6 items-center justify-between '>
				<div className='text-sm text-gray-300'>
					<span>
						This website is open source.
						<br />
						Feel free to fork it.
					</span>
				</div>
				<div className='text-sm text-gray-300'>&#169; 2023</div>
			</footer>
			<figure className='max-w-2xl text-center'>
				<figcaption className='text-transparent text-xs hover:text-gray-300/5'>
					tazes.eth was here
				</figcaption>
			</figure>
		</div>
	);
}

export default Footer;
