import React from 'react';

type Props = {};

function Footer({}: Props) {
	return (
		<div className='max-w-2xl mt-16 mb-1'>
			<div className='flex justify-center mt-9'>
				<div className='fading-line' />
			</div>
			<footer className='flex mx-auto my-8 lg:mt-6 items-center '>
				<div className='text-sm mx-auto text-gray-300'>
					&#169; 2025・Nickolas Tazes
				</div>
			</footer>
		</div>
	);
}

export default Footer;
