import Head from 'next/head'
import React from 'react'
import BackBtn from '../Components/BackBtn'
import Header from '../Components/Header'

type Props = {}

function blog({}: Props) {
  return (
    <div>
      <Head>
        <title>tazes - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

    <div className='max-w-2xl flex mx-auto items-center justify-'>
 
            <BackBtn />

        </div>

        <div className='mx-auto text-center py-16 max-w-2xl'>
            <p className='text-base text-gray-300'>No posts here, yet...</p>
        </div>

      </div>
  )
}

export default blog