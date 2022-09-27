import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type Props = {}

function BackBtn({}: Props) {
  return (
    <div>
        <a href="/" className='flex text-sm items-center space-x-1 text-slate-100 rounded-lg border border-zinc-600 py-1 pr-2.5 pl-1 hover:border-orange-700'> <ChevronLeftIcon className='h-4 w-4'/> <span className=''>Back</span></a>

    </div>
  )
}

export default BackBtn