import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type Props = {}

function BackBtn({}: Props) {
  return (
    <div>
        <a href="/" className='flex text-sm items-center space-x-1 text-slate-100 rounded-lg bg-zinc-700 py-1 pr-2.5 pl-1'> <ChevronLeftIcon className='h-4 w-4'/>Back</a>
    </div>
  )
}

export default BackBtn