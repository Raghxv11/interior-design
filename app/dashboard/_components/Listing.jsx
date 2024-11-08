"use client"
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import EmptyState from './EmptyState'
import Link from 'next/link'
import { db } from '@/config/db'
import { generatedDesigns } from '@/config/schema'
import Cards from './Cards'
import { eq } from 'drizzle-orm'


function Listing() {
    const {user} = useUser();
    const [userRoomList, setUserRoomList] = useState([]);
    useEffect(()=>{
      user && getUserRoomList()
    }, [user])

    const getUserRoomList = async() => {
      const result = await db.select().from(generatedDesigns).where(eq(generatedDesigns.userEmail, user?.primaryEmailAddress.emailAddress));
      setUserRoomList(result);
    }
  return (
    <div className="p-6 max-w-7xl mx-auto">
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl font-semibold'>Hello, {user?.fullName}</h2>
          <Link href="/dashboard/create-new">
            <Button className="bg-primary hover:bg-primary/90">
              Redesign Interior
            </Button>
          </Link>
        </div>

        {userRoomList.length === 0 ? (
          <EmptyState/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRoomList.map((room, index) => (
              <Cards key={index} room={room} />
            ))}
          </div>
        )}
    </div>
  )
}

export default Listing
