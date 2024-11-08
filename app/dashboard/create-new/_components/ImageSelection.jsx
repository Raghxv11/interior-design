"use client"
import React, { useState } from 'react'
import Image from 'next/image'

function ImageSelection({ selectedImage }) {
    const [file, setFile] = useState(null);
    const onFileSelected = (e) => {
        const file = e.target.files[0];
        setFile(file);
        selectedImage(file);
    }
  return (
    <div className='flex flex-col gap-2'>
      <label>
        Upload Image of your space
      </label>
      <div className='mt-4'>
        <label htmlFor='image-upload'>
          <div className='rounded-xl p-28 bg-gray-200 w-[450px] flex flex-col cursor-pointer items-center justify-center hover:bg-gray-300 transition-all duration-300'>
            {!file ? <Image src={"/upload.png"} alt="upload" width={80} height={80}/> : <Image src={URL.createObjectURL(file)} alt="upload" width={280} height={280} className='object-cover'/>}    
          <p className='text-sm text-gray-500 mt-2'>{!file ? "Upload an image of your space" : "Image uploaded successfully"}</p>
          </div>
        </label>
      </div>
      <input type='file' accept='image/*' id='image-upload' className='hidden' onChange={onFileSelected}/>

    </div>
  )
}

export default ImageSelection
