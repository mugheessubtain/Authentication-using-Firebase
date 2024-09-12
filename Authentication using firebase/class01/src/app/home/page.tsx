"use client";

import { UseAuthContext } from "@/Context/AuthContext";
import { Logout } from "@/firebase/firebaseAuth";
import { useRouter } from "next/navigation";



export default function TimeLine(){
    const route=useRouter();
    // const {logOut}=UseAuthContext()
    // {
    //     if(logOut){
    //         route.push("/");
    //     }
    // }
    return(
        <>
        <h1>hello User</h1>
        <button onClick={
            Logout

        }>LogOut</button>
        </>
    )
}