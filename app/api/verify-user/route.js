import { NextResponse } from "next/server";
import {db} from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  const {user} = await req.json();

try{
//if user already exists
  const userInfo= await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
  console.log("User",userInfo)

  //if user does not exist add user to database
  if(!userInfo.length){
    const SaveResult = await db.insert(Users).values({
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
    }).returning({Users})

    return NextResponse.json({"result":SaveResult[0].Users}) 
  }
  return NextResponse.json({result: userInfo[0]});
}catch(error){
  return NextResponse.json({error: error})
  }
}
