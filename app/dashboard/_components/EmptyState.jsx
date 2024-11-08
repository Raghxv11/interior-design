import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center h-[50vh]'>
        <div className='flex flex-col items-center justify-center gap-4'>
        <Image src={"/room.png"} alt="empty" width={240} height={240}/>
        <h2 className='text-xl text-gray-500 font-semibold'>Create your first design</h2>
        <Link href="/dashboard/create-new">
        <Button>Redesign Interior</Button>
        </Link>
        </div>
    </div>
  )
}

export default EmptyState
