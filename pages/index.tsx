import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../Components/Header'

const projects = [
  {
    name: 'Watchen.xyz',
    handle: 'Watchen is a network for NFT enthusiasts. It makes discovering new projects easier and have all the details about them in one place.',
    imageUrl:
      'https://www.watchen.xyz/favicon.png',
    date: 'To Be Launched',
    link: 'https://watchen.xyz',
  },
  {
    name: 'Grovio.co',
    handle: 'Grovio enhances the reading experience of online books with multimedia.',
    imageUrl:
      'https://grovio.co//assets/img/favicon.png',
    date: 'Jun 2021 - Present',
    link: 'https://grovio.co',
  },
  {
    name: 'Alearning.gr',
    handle: 'Alearning is an educational ecosystem of tools that provides reliable and effective support to children’s learning difficulties.',
    imageUrl:
      'https://www.alearning.gr/wp-content/uploads/2020/08/cropped-favicon-large-1-192x192.png',
    date: 'Jan 2021 - Present',
    link: 'https://alearning.gr',
  },
  {
    name: 'Rbooks.gr',
    handle: 'Rbooks aims to lead the digitalization of the Greek Publishing industry.',
    imageUrl:
      'https://rbooks.gr/assets/img/favicon.png',
    date: 'Oct 2020 - Present',
    link: 'https://rbooks.gr',
  },
  {
    name: 'CivilAlert.gr',
    handle: 'Civil Alert gives the ability to municipalities to alert citizens for matters of civil protection.',
    imageUrl:
      '/cafavicon.png',
    date: 'Sep 2021- Present',
    link: 'https://civilalert.gr',
  },
]

const Home: NextPage = () => {
  return (
<div className='max-w-2xl mx-auto'>
      <Head>
        <title>tazes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

    <div className="relative px-4 sm:px-4 lg:px-8 mt-6 lg:mt-10">
      <div className="text-lg bg max-w-2xl mx-auto">
        <h1>
          <span className="mt-2 hidden lg:inline-block text-4xl text-left leading-8 font-extrabold tracking-tight text-slate-100">Founder of <a className="text-orange-500 hover:text-orange-700" href="https://readnet.gr" target="_blank">Readnet Publications</a></span>
          <span className="mt-2 block lg:hidden text-4xl text-left leading-8 font-extrabold tracking-tight text-slate-100">Founder of <a className="text-orange-500 hover:text-orange-700" href="https://readnet.gr" target="_blank">Readnet</a></span>
        </h1>
        <p className="mt-6 text-base text-gray-300 mx-auto">Since the start of 2020, I have envisioned, organized, developed, and launched a series of innovative projects. My goal is to solve some of the biggest social & economical problems in the world. The list of projects includes:</p>
      </div>

  <div>
      <div className="mt-6 mx-auto max-w-2xl pb-8">
        <ul role="list" className="divide-y divide-[#292929]">
          {projects.map((project) => (
            <li key={project.link} className="">
              <a href={project.link}>
              <div className="flex space-x-4 hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg">
                <div className="flex-shrink-0 ">
                  <img className="h-8 w-8 rounded-full" src={project.imageUrl} alt="Project logo" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-orange-500">{project.name}</p>
                  <p className="text-sm mt-1 text-gray-300 max-w-[400px]">{project.handle}</p>
                </div>
                <div>
                  <div
                    className="inline-flex text-xs text-gray-300">
                    {project.date}
                  </div>
                </div>
              </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
  </div>

    <div className="mt-16 max-w-2xl mx-auto"> 
      <h2 className='text-slate-100 font-semibold text-3xl'>Find me online</h2>
      <div className='grid grid-cols-2 space-y-1 mt-6'>
      <a className="text-orange-500 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://twitter.com/nickolas_tazes" target="_blank">Twitter &#8599;</a>
      <a className="text-orange-500 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://www.linkedin.com/in/nickolas-tazes/" target="_blank">LinkedIn &#8599;</a>
      <a className="text-orange-500 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://www.instagram.com/tazes.eth/" target="_blank">Instagram &#8599;</a>
      <a className="text-orange-500 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://github.com/nickolastazes" target="_blank">Github &#8599;</a>
      </div>
    </div>

    <div className="mt-16 max-w-2xl mx-auto"> 
      <h2 className='text-slate-100 font-semibold text-3xl'>Interviews</h2>
        <p className="mt-6 text-base text-gray-300 mx-auto">I've about Readnet and myself on News sites, National TV and Podcasts.</p>
        <ul className='grid grid-cols-1 gap-2 mt-6 divide-y divide-[#292929]'>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
        <a className="text-orange-500" href="https://open.spotify.com/episode/0WNzPPCRCjlHOdC3A9AfTa" target="_blank">E1: Nick Tazes and Watchen.xyz
        <div className='flex items-center space-x-2'>
          <img className="h-4 w-4 rounded-lg" src="/ab67656300005f1f4c40899b480d39737d9d6818.jpeg" alt="Toools Podcast logo" />
            <li className='text-gray-300 text-sm'>Toools Podcast</li>
        </div>
        </a> 
        </div>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
        <a className="text-orange-500" href="https://www.youtube.com/watch?v=NOx7rtpBAgY" target="_blank">The Alearning platform for children with learning disabilities
        <div className='flex items-center space-x-2'>
          <img className="h-4 w-4 rounded-lg" src="https://program.ert.gr/images/EPT_favicon.jpg" alt="ERT logo" />
            <li className='text-gray-300 text-sm'>ERT 3 (National TV)</li>
        </div>
        </a> 
        </div>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
            <a className="text-orange-500" href="https://www.startup.gr/synenteyxeis/synenteyxi-sto-startup-gr-nikolas-tazes-apo-tin-omada-readnet/" target="_blank">Interview at Startup.gr: Nickolas Tazes from the Readnet Publications team
            <div className='flex items-center space-x-2'>
              <img className="h-4 w-4 rounded-lg" src="https://www.startup.gr/favicon.ico" alt="Startup.gr logo" />
              <li className='text-gray-300 text-sm'> Startup.gr</li>
            </div>
            </a> 
        </div>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
            <a className="text-orange-500" href="https://www.platform.gr/life/prosopa/78212-nikolas-tazes-neoi-pou-epixeiroyn-kanoume-to-diavasma-pio-endiaferon" target="_blank">Nickolas Tazes (young people who do business): We make reading more interesting!
            <div className='flex items-center space-x-2'>
            <img className="h-4 w-4 rounded-lg" src="https://www.platform.gr/templates/theme2073/favicon.ico" alt="Platform.gr logo" />
            <li className='text-gray-300 text-sm'>Platform.gr</li>
            </div>
            </a> 
        </div>
            
        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
            <a className="text-orange-500" href="https://www.itspossible.gr/%ce%b7-%ce%b5%ce%bb%ce%bb%ce%b7%ce%bd%ce%b9%ce%ba%ce%ae-%cf%80%ce%bb%ce%b1%cf%84%cf%86%cf%8c%cf%81%ce%bc%ce%b1-%cf%83%cf%84%ce%b7%ce%bd-%ce%bf%cf%80%ce%bf%ce%af%ce%b1-%ce%bc%cf%80%ce%bf%cf%81%ce%b5/" target="_blank">The Greek platform where you can find books starting from 2.99 euros and read them online.
            <div className='flex items-center space-x-2'>
            <img className="h-4 w-4 rounded-lg" src="https://www.itspossible.gr/wp-content/uploads/2021/02/cropped-favicon-180x180.png" alt="Itspossible.gr logo" />
            <li className='text-gray-300 text-sm'>It' Possible</li>
            </div>
            </a> 
        </div>

          </ul>
    </div>
      
    <div className="mt-16 max-w-2xl mx-auto">
      <h2 className='text-slate-100 font-semibold text-3xl'>Where I live</h2>
        <figure className='mt-6 text-gray-300'>
        <figcaption className='mb-2'>Based in Thessaloniki, Greece but traveling to Volos and Athens frequently.</figcaption>
          <img className="w-full rounded-lg" src="/Screenshot 2022-09-27 at 5.11.15 PM.png" alt="The map of Greece with a pin at Volos" width="1310" height="873"/>
        </figure>
    </div>

        <figure className="mt-16 max-w-2xl mx-auto">
          <figcaption className="text-[#191919]">tazes.eth was here</figcaption>
        </figure>

    <footer className='max-w-2xl flex mx-auto py-5 justify-between border-t border-[#292929]'>
     <div className='text-sm text-gray-300'>
      <span>You are free to fork this website.</span>
      </div>
      <div className='text-sm text-gray-300'>
      &#169; 2022
      </div>
    </footer>

    </div>
  </div>
  )
}

export default Home
