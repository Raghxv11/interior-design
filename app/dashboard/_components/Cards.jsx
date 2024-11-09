import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function Cards({room}) {
  if (!room.originalImageUrl || !room.generatedImageUrl) {
    return <div className="rounded-lg bg-red-50 p-4 text-red-500">Missing image data</div>;
  }

  const FIRST_IMAGE = {
    imageUrl: room.originalImageUrl
  };
  const SECOND_IMAGE = {
    imageUrl: room.generatedImageUrl
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video">
        <ReactBeforeSliderComponent
          firstImage={SECOND_IMAGE}
          secondImage={FIRST_IMAGE}
          delimiterColor="#fff"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{room.roomName || 'Room Design'}</h3>
        <p className="text-sm text-gray-600">
          Created on {new Date(room.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default Cards
