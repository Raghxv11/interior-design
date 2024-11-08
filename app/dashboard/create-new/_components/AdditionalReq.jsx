import React from 'react'
import { Textarea } from "@/components/ui/textarea"


function AdditionalRequirements({additionalReq}) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm text-gray-500'>Additional Requirements (Optional)</label>
      <Textarea onChange={(e) => additionalReq(e.target.value)} className='w-[600px]' />
    </div>
  )
}

export default AdditionalRequirements
