import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='flex flex-col mx-auto py-5'>
      <div className="relative px-4 sm:px-4 lg:px-8 justify-between">
          <nav className='max-w-2xl flex mx-auto items-center justify-between'>

            <a href='/' className='text-lg font-semibold text-slate-100 block '>
            <span>Nickolas Tazes</span>
            </a>
            <div className='text-base space-x-4 text-slate-100 justify-between'>
            <a href="/blog" className='hover:text-orange-500'>Blog</a>
            <a href="mailto:n@tazes.me" className='hover:text-orange-500'>Contact</a>
            </div>
            
            </nav>
        </div>
      </div>
  )
}

export default Header