"use client";

import { Verifyemail } from "@/firebase/firebaseAuth";



export default function VerifyEmail(){
    return(
        <>
        <h1>Please Verify your Email </h1>
        <button onClick={Verifyemail}>Send Email</button>
        </>

    )
}