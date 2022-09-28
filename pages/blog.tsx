import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'


type Props = {}

function blog({}: Props) {
  return (
    <div className='max-w-2xl mx-auto'>
      <Head>
        <title>tazes - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

    <div className='max-w-2xl flex mx-auto items-center px-8'>
 
            

        </div>

        <div className='mx-auto text-center py-16 max-w-2xl'>
            <p className='text-base text-gray-300'>No posts here, yet...</p>
        </div>

      </div>
  )
}

export default blog