import React, { useRef, useState} from 'react';
import Header from "./Header";
import {checkValidateDataForSignin , checkValidateDataForSignup,} from "../utils/Validate";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'; 
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
// rafce
const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current ? name.current.value : null;

    const validationErrorMessage = isSignInForm
      ? checkValidateDataForSignin(emailValue, passwordValue)
      : checkValidateDataForSignup(nameValue, emailValue, passwordValue);

    /*  if (name.current == null) {
      const message = checkValidateDataForSignin(emailValue, passwordValue);
      setErrorMessage(message);
    }
    else {
      const message01 = checkValidateDataForSignup(name.current.value, email.current.value, password.current.value);
      setErrorMessage(message01);
    } 
  */
    if (validationErrorMessage) {
      setErrorMessage(validationErrorMessage);
      return;
    }

    // Firebase authentication logic
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in successfully
          const user = userCredential.user;
        })
        .catch((error) => {
          // Handle errors here
          const errorCode = error.code;
          const errorMessage = error.message;
          // Display error message to the user
          if (errorCode === "auth/user-not-found") {
            setErrorMessage("Incorrect Password");
          } else {
            setErrorMessage(errorMessage);
          }
        });
    } else {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
           updateProfile(user, {
             displayName: nameValue || user.displayName,
             photoURL: "https://avatars.githubusercontent.com/u/105166314?v=4",
           })
             .then(() => {
               // Profile updated!
               const { uid, email, displayName, photoURL } = auth.currentUser;
               dispatch(
                 addUser({
                   uid: uid,
                   email: email,
                   displayName: displayName,
                   photoURL: photoURL,
                 })
               );
             })
             .catch((error) => {
               // An error occurred
               const updateErrorCode = error.code;
               // Display error message to the user
               setErrorMessage(updateErrorCode);
             });
          // Proceed with further actions after sign-in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Display error message to the user
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage("Email is already in Use");
          } else {
            setErrorMessage(errorMessage);
          }
        });
    }
  };

  // Handle changes in the email input field
  const handleEmailChange = () => {
    // Reset error message when user starts typing in the email field
    setErrorMessage(null);
  };

  const handlePasswordChange = () => {
    setErrorMessage(null);
  };

  // Toggle between sign-in and sign-up forms
  const ToggleSignIn = () => {
    setSignInForm(!isSignInForm);
  };

  
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black my-36 mx-auto left-0 right-0 p-8 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          onChange={handleEmailChange}
        />
        <input
          ref={password}
          type="email"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          onChange={handlePasswordChange}
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 w-full rounded-lg bg-red-700"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={ToggleSignIn}>
          {isSignInForm ? (
            <>
              New to Netflix? <span className="text-blue-500">Sign Up Now</span>
            </>
          ) : (
            <>
              Already Registered?{" "}
              <span className="text-blue-500">Sign In Now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default Login