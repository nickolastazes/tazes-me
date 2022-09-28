import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='flex flex-col mx-auto py-5'>
      <div className="relative px-4 sm:px-4 lg:px-8">
          <nav className='max-w-2xl flex mx-auto items-center justify-between'>

            <a href='/' className='text-lg flex font-semibold text-slate-100'>
            <span>Nickolas Tazes</span>
            </a>
            <div className='text-base flex text-orange-500 space-x-4'>
            <a href="/blog" className='hover:text-orange-700'>Blog</a>
            <a href="mailto:n@tazes.me" className='hover:text-orange-500'>Contact</a>
            </div>
            
            </nav>
        </div>
      </div>
  )
}

export default Header