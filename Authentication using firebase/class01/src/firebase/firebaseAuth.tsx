import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { app } from "./firebaseConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UseAuthContext } from "@/Context/AuthContext";

const auth = getAuth(app);

export function Signup(email: string, password: string) {
    // const router=useRouter()



    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("inside signin", user);
            // router.push("/login")

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export function Login(email: string, password: string) {


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            
        });
}


export function Logout() {
    // const router = useRouter();
    // const {setLogOut}=UseAuthContext()


    signOut(auth)
    
    
        .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        // setLogOut(true)
        // router.push("/login");
    })
        .catch((error) => {
            console.error("Logout Error:", error.message);
            // Optionally, display the error to the user
        });
}

export function Verifyemail() {
    // const router = useRouter();



    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        // router.push("/login");

            console.log("done");
            
        });
}
//refresh kharna pahr raha haa 
// logout kisy hoga
