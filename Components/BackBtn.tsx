import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type Props = {}

function BackBtn({}: Props) {
  return (
    <div>
        <a href="/" className='backbtn'> <ChevronLeftIcon className='h-4 w-4'/>Back</a>
    </div>
  )
}

export default BackBtn