"use client"

import { app } from "@/firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, createContext, useState, ReactNode, useEffect } from "react";


const AuthContext = createContext({});


export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState();
  // const [logOut, setLogOut] = useState("")

  const router = useRouter();
  useEffect(() => {

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, emailVerified } = user;
        emailVerified ? router.push("/home") : router.push("/verifyEmail")
        setUser({ email, uid });
        // router.push("/home")
        console.log("login");

      } else {
        // console.log("logOut");
        // router.push("/home")

      }
    });
  }, [])
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )


}

export const UseAuthContext = () => useContext(AuthContext);