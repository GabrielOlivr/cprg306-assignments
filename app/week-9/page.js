"use client"
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page (){

// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (!user){
        return (
            <div>
                <h1>Shopping List App</h1>
                <button onClick={gitHubSignIn}>Sign in with Github</button>  
            </div>
        ) 
    }
    return (
        <div>
            <h1>Shopping List App</h1>
            <p>{user?.email}</p>
            <p><button onClick={firebaseSignOut}>Sign Out</button></p>
            <p>
                <Link href="week-9/shopping-list">
                <button>Continue to your Shopping List</button>
                </Link>
            </p>
        </div>
    )

/*Using Link might not be the best idea for this 

This works, but if a sign out button is added to shopping-list page it will return to
the Home page but it will not let me go into the other week's pages

Things to work on: 
- Fix link problems and any other issues 
- Test each functionality to see if works as spected 
- Add Styling 
- Clean up code 

Extras
A few things you can do to improve your application:

- After logging in, redirect the user to the shopping list page.
- Add a logout button to the shopping list page.
- Add a profile page that displays the user's profile information.
- Add other OAuth providers such as Google.

*/
 
/* Sign in to Firebase with GitHub authentication
await gitHubSignIn();
 
Sign out of Firebase
await firebaseSignOut();
*/

}