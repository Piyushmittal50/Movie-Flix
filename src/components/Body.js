import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/browse",
            element:<Browse/>
        }
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // for sign in / sign up
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                
            }
            else {
                // sign out
                dispatch(removeUser());
            }
        })
    }, []);

    return (
        <div>
         <RouterProvider router={appRouter} />
      </div>
    );
};
export default Body;