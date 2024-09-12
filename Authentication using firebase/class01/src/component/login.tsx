"use client";

import { Login } from "@/firebase/firebaseAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginFun(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const router=useRouter();


  return (
    <>
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
      Login(email,password);

    }}>Login</button>
    <p>Do not have an account?Please <Link href={"/Signup"}>
    Sign Up
    </Link></p>
    </>

  )
}