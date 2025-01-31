import Header from "./Header";
import { useState,useRef } from "react";
import  checkValidData  from "../utils/validate";

export default function Login(){
    const[isSignInForm,setIsSignInForm] = useState(true);
    const [errMessage,seterrMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
       const message = checkValidData(email.current.value,password.current.value,name.current.value);
       console.log(message);
       seterrMessage(message);
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

    return(
        <div>
        <Header/>
            <div className="absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
                alt="Background-img"/>
            </div>
            <form onSubmit={(event)=>event.preventDefault()} 
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60">
               
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm?"Sign In":"Sign Up"}
                    </h1>
                
                {!isSignInForm &&(
                <input ref={name}
                type="text" placeholder="Name" 
                className="p-4 my-4 w-full bg-gray-700"/>
                )}
                
                <input ref={email}
                 type="email" placeholder="Email Address" 
                className="p-4 my-4 w-full bg-gray-700"/>
                
                <input ref={password}
                type="password" placeholder="Enter Password" 
                className="p-4 my-4 w-full bg-gray-700"/>

                <p className="text-red-500 font-bold text-lg py-2">{errMessage}</p>

                <button onClick={handleButtonClick}
                className="p-4 my-6 bg-red-700 w-full rounded-lg">
                    {isSignInForm?"Sign In":"Sign Up"}
                </button>
                
                <p onClick={toggleSignInForm}
                className="py-4 cursor-pointer">{isSignInForm?"New user! Sign up first":"Sign In to continue"}</p>
            </form>
        </div>
    );
};