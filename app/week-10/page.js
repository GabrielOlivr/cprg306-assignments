"use client"
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page (){

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

   if (!user){
        return (
            <div>
                <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
                <button onClick={gitHubSignIn} className="text-lg bg-yellow-700 hover:bg-yellow-500 px-4 py-2 rounded">Sign in with Github</button>  
            </div>
        ) 
    }
    return (
        <div>
            <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
            <p className="text-lg">Signed in as {user?.email}</p>
            <p><button onClick={firebaseSignOut} className="text-lg bg-yellow-700 hover:bg-yellow-500 px-4 py-2 mb-2 mt-2 rounded">Sign Out</button></p>
            <p>
               <a className="text-lg hover:underline" href="week-10/shopping-list">
               Continue to your Shopping List
               </a>
            </p>
        </div>
    )
}