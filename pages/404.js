import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
const router=useRouter();
const handleInput=()=>{
    router.push("/");
};
useEffect(()=>{
    setTimeout(()=>{
        router.push("/");
    },3000);
}),[];
router(
    <>
    <Navbar/>
    <div id="not found">
        <div className="not Found">
            <h1>404</h1>
        </div>
        <h2>"We are sorry,Page is not found-404" </h2>
        <p>
            The page you are looking for might have been removed has its name changed or is temporarily unavailable.
        </p>
        <link href="/">
            Back to Home page
        </link>
    </div>
    </>
);
export default Errorpage;
    
    

