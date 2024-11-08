import {NextResponse} from "next/server";
import Replicate from "replicate";
import {ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { db } from "@/config/db";
import { generatedDesigns } from "@/config/schema";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
});

export async function POST(req) {
    const { imageUrl, roomType, designType, additionalReq, userEmail } = await req.json();
    try {
        const input = {
            image: imageUrl,
            prompt: "A " + roomType + " with a " + designType + " styled interior design " + additionalReq
        };
        
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        const base64Image = await convertImageToBase64(output);
        const fileName = Date.now() + ".jpg";
        const storageRef = ref(storage, "designs/" + fileName);
        await uploadString(storageRef, base64Image, "data_url");
        const url = await getDownloadURL(storageRef);
        console.log(url);
        const dbResult = await db.insert(generatedDesigns).values({
            roomType: roomType,
            designType: designType,
            originalImageUrl: imageUrl,
            generatedImageUrl: url,
            userEmail: userEmail
        }).returning({id: generatedDesigns.id});
        return NextResponse.json({result: {generatedImageUrl: url, id: dbResult[0].id}});

    } catch (e) {
        console.error('Error processing image:', e);
        return NextResponse.json({error: e.message || 'Error processing image'});
    }
}

async function convertImageToBase64(imageUrl) {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64 = Buffer.from(response.data).toString('base64');
    return "data:image/jpeg;base64," + base64;
}
