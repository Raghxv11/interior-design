"use client";
import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalRequirements from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import axios from "axios";

function CreateNew() {
    const [formData, setFormData] = useState({});
  const onHandleInputChange = (value, key) => {
    setFormData(prev => ({...prev, [key]: value}));
    console.log(formData);
  };

  const handleGenerate = async () => {
    const imageUrl = await SaveToFirebase();
    const result = await axios.post("/api/redesign-room", {
      imageUrl: imageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
    });
    console.log(result);
  };
const SaveToFirebase = async () => {
  if (!formData.image) {
    console.error("No image selected");
    return;
  }

  const fileName = Date.now() + ".png";
  const imageRef = ref(storage, 'designs/' + fileName);

  // Upload the raw File object
  await uploadBytes(imageRef, formData.image).then(() => {
    console.log("Image uploaded to Firebase");
  });

  //uploaded file url
  const downloadUrl = await getDownloadURL(imageRef);
  console.log(downloadUrl);
  return downloadUrl;
};  

  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-4xl text-primary font-semibold">
          Experience the magic of AI Remodeling
        </h2>
        <p className="text-md text-gray-500 mt-2">
          Transform any room with a single click using AI
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col gap-8">
          <ImageSelection
            selectedImage={(value) => onHandleInputChange(value, "image")}
          />
          <Button className="w-[450px] mt-4" onClick={handleGenerate}>Generate</Button>
        </div>
        <div className="flex flex-col gap-8">
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />
          <AdditionalRequirements
            additionalReq={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
