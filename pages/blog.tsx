import Head from 'next/head'
import React from 'react'
import BackBtn from '../Components/BackBtn'
import Header from '../Components/Header'

type Props = {}

function blog({}: Props) {
  return (
    <div className='flex flex-col'>
           <Head>
        <title>tazes - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
        <Header />
        <div className='mx-auto justify-start my-6 lg:mt-10 px-4 md:px-0.5 lg:px-0.5'>
            <BackBtn />
        </div>

        <div className='mx-auto'>
            <p className='text-base text-gray-300'>No posts here, yet...</p>
        </div>
 
    </div>
  )
}

export default blog