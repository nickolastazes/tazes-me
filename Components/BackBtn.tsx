import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type Props = {}

function BackBtn({}: Props) {
  return (
    <div className='backbtn'>
        <a href="/"> <ChevronLeftIcon className='flex h-4 w-4'/>Back</a>
    </div>
  )
}

export default BackBtn