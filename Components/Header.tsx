import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

type Props = {}

const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: 'mailto:n@tazes.me' },
  ]
  

function Header({}: Props) {
  return (
    <div className='flex flex-col mx-auto py-5'>
      <div className="relative px-4 sm:px-4 lg:px-8">
          <nav className='max-w-2xl flex mx-auto items-center justify-between'>

            <a href='/' className='text-lg font-semibold text-slate-100 block text-left tracking-wide'>
            <span>Nickolas Tazes</span>
            </a>
            <div className='text-base space-x-4 text-slate-100'>
            <a href="/blog" className='hover:text-orange-500'>Blog</a>
            <a href="mailto:n@tazes.me" className='hover:text-orange-500'>Contact</a>
            </div>
            
            </nav>
        </div>
      </div>
  )
}

export default Header