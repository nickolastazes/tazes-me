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
    <div className='py-5 sticky top-0 z-10 navbar'>
            
            <div className="mx-auto max-w-2xl px-4 md:px-0.5 lg:px-0.5">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                    <a href="/">
                    <h1 className="block text-left text-slate-100 font-semibold tracking-wide">Nickolas Tazes</h1>
                    </a>
                </div>
                <div className="md:flex space-x-3 md:absolute inset-y-0 right-0 items-center justify-end">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-slate-100 hover:text-orange-700">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
    </div>
  )
}

export default Header