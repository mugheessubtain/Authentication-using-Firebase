"use client";

import { Signup } from "@/firebase/firebaseAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignUP(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [userName,setUserName]=useState("");

  const router=useRouter();


  return (
    <>
    <label htmlFor="text">Name:</label>
    <input type="text"
    value={userName}
    onChange={(e)=>{
      setUserName(e.target.value)
    }}
    />
    <br />
    
    <label htmlFor="email">Email:</label>
    <input type="text"
    value={email}
    onChange={(e)=>{
      setEmail(e.target.value)
    }}
    />
    <br />
    <label htmlFor="password">password:</label>
    <input type="text"
    value={password}
    onChange={(e)=>{
      setPassword(e.target.value)
    }}
    />
    <br />
    <button onClick={()=>{
      Signup(email,password);
      router.push("/login")


    }}>Sign up</button>
    </>

  )
}