"use client";

import { Signup } from "@/firebase/firebaseAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home(){

  const router=useRouter();


  return (
    <>
    {router.push("/login")}
    <h1>Loading...</h1>

    </>

  )
}