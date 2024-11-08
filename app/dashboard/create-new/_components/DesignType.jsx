import React, { useState } from 'react'
import Image from 'next/image'

function DesignType({selectedDesignType}) {
    const Designs = [
        {name: "Modern", image: '/modern.jpg'},
        {name: "Minimalist", image: '/minimalist.jpeg'},
        {name: "Scandinavian", image: '/scandinavian.jpg'},
        {name: "Bohemian", image: '/boho.jpeg'},
        {name: "Industrial", image: '/industrial.png'},
        {name: "Indian", image: '/indian.jpg'},
        
    ]
    const [selectedDesign, setSelectedDesign] = useState(null);
  return (
    <div>
      <label>Room Style</label>
      <div className="grid grid-cols-4 gap-4 mt-2 w-[600px]">
        {Designs.map((design, index) => (
            <div key={index} onClick={() => {
                setSelectedDesign(design.name);
                selectedDesignType(design.name);
            }} className={`flex flex-col items-center justify-center gap-2 rounded-lg p-2 cursor-pointer hover:border-gray-300 hover:shadow-lg transition-all duration-300 ${selectedDesign === design.name ? "border-2 border-primary shadow-lg bg-gray-50" : "border border-gray-200"}`}>
                <Image src={design.image} alt={design.name} width={100} height={100} className="rounded-lg"/>
                <p className={`${selectedDesign === design.name ? "font-semibold text-primary" : ""}`}>{design.name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DesignType
