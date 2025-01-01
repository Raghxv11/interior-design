"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'


function Header() {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <div className='flex items-center gap-2'>
      <Image src="/window.svg" alt="logo" width={40} height={40}/>
      <h2 className='font-bold text-lg'>AI Interior Designer</h2>
      </div>
      <Button variant="outline" className='text-primary font-semibold hover:bg-primary hover:text-white rounded-lg'>Buy credits</Button>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2 bg-slate-200 p-2 rounded-lg'><Image src={"/credits.png"} alt="credits" width={28} height={28}/>
        <span className='text-sm font-semibold'>{userDetail?.credits}</span>
        </div>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
