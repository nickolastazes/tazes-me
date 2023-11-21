import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Nickolas Tazes</title>
				<meta property='og:title' content='Nickolas Tazes' />
				<meta
					property='og:description'
					content='Founder of Readnet Publications. Since the start of 2020, I have envisioned, organized, developed, and launched a series of innovative projects. My goal is to solve some of the biggest social & economical problems in the world.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://tazes.me' />
				<meta property='og:image' content='https://tazes.me/tazes-og.png' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@nickolas_tazes' />
				<meta name='twitter:title' content='Nickolas Tazes' />
				<meta
					name='twitter:description'
					content='Founder of Readnet Publications. Since the start of 2020, I have envisioned, organized, developed, and launched a series of innovative projects. My goal is to solve some of the biggest sociNickolas Tazes'
				/>
				<meta name='twitter:image' content='https://tazes.me/tazes-og.png' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
