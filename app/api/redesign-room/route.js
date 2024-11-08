import {NextResponse} from "next/server";
import Replicate from "replicate";
import axios from "axios";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});

export async function POST(req) {
    const { imageUrl, roomType, designType, additionalReq } = await req.json();
    //Convert to AI Image
    try{
        const input = {
            image: imageUrl,
            prompt: "A " + roomType + " with a " + designType + " styled interior design " + additionalReq
        };
        
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        //Convert imageUrl to base64
        // const base64Image = await convertToBase64(output);
        // //save base64Image to firebase
        // const fileName = Date.now() + ".png";
        // const storageRef = ref(storage, "designs/" + fileName);
        // await uploadString(storageRef, base64Image, "data_url");
        // const url = await getDownloadURL(storageRef);
        // console.log(url);
        console.log(output);
        return NextResponse.json({result:output});

    } catch (e) {
        return NextResponse.json({error: e});
    }
}

//Convert imageUrl to base64
// async function convertToBase64(imageUrl) {
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const base64 = Buffer.from(response.data).toString('base64');
//     return "data:image/png;base64," + base64;
// }
