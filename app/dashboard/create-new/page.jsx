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
import { useUser } from "@clerk/nextjs";
import ComparisonModal from "./_components/ComparisonModal";
import Link from "next/link";

const CustomLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Generating Design...</h2>
        <p>Please wait while we transform your room</p>
      </div>
    </div>
  );
};

function CreateNew() {
    const {user}=useUser();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [outputImage, setOutputImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const onHandleInputChange = (value, key) => {
        setFormData(prev => ({...prev, [key]: value}));
        console.log(formData);
    };

    const handleGenerate = async () => {
        try {
            setLoading(true);
            const imageUrl = await SaveToFirebase();
            const result = await axios.post("/api/redesign-room", {
                imageUrl: imageUrl,
                roomType: formData?.roomType,
                designType: formData?.designType,
                additionalReq: formData?.additionalReq,
                userEmail: user?.primaryEmailAddress?.emailAddress
            });
            
            setOutputImage(result.data.result.generatedImageUrl);
            setShowModal(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const SaveToFirebase = async () => {
        if (!formData.image) {
            console.error("No image selected");
            return;
        }

        // Convert PNG to JPEG if necessary
        const imageToUpload = await convertToJpeg(formData.image);
        const fileName = Date.now() + "_raw.jpg";
        const imageRef = ref(storage, 'designs/' + fileName);

        // Upload the converted image
        await uploadBytes(imageRef, imageToUpload).then(() => {
            console.log("Image uploaded to Firebase");
        });

        const downloadUrl = await getDownloadURL(imageRef);
        console.log(downloadUrl);
        return downloadUrl;
    };

    // Add this new function to convert PNG to JPEG
    const convertToJpeg = async (file) => {
        return new Promise((resolve) => {
            if (!file.type.includes('png')) {
                resolve(file);
                return;
            }

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => {
                    resolve(new File([blob], 'converted.jpg', { type: 'image/jpeg' }));
                }, 'image/jpeg', 0.95);
            };

            img.src = URL.createObjectURL(file);
        });
    };

    console.log("Modal state:", { showModal, outputImage, originalImage: formData?.image });

    return (
        <div>
            {loading && <CustomLoading />}
            <div className="flex flex-col items-center justify-center ">
                <Button className="absolute left-10 top-28"><Link href={'/dashboard'}>Back to Dashboard</Link></Button>
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
            
            <ComparisonModal 
                showModal={showModal}
                setShowModal={setShowModal}
                originalImage={formData?.image}
                generatedImage={outputImage}
            />
        </div>
    );
}

export default CreateNew;
