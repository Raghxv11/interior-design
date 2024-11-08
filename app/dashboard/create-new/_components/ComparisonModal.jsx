import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { 
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

function ComparisonModal({ showModal, setShowModal, originalImage, generatedImage }) {
    const FIRST_IMAGE = {
        imageUrl: originalImage ? URL.createObjectURL(originalImage) : ''
    };
    const SECOND_IMAGE = {
        imageUrl: generatedImage || ''
    };

    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="max-w-[900px]">
                <DialogHeader>
                    <DialogTitle>Design Comparison</DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                    {originalImage && generatedImage && (
                        <ReactBeforeSliderComponent
                            firstImage={SECOND_IMAGE}
                            secondImage={FIRST_IMAGE}
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ComparisonModal;