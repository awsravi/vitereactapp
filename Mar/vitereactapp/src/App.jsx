import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import userName from "./Data.jsx"; // Importing default exports
import { age, marks,greetName} from "./Data.jsx"; // Importing named exports
import  {HedderClassComponent,HedderFunctionalComponent,HedderFunctionalComponent1} from "./Header.jsx";

export default function App() {
  const notify = () => toast("Wow, so easy!");

    console.log(userName); 
    console.log(age);
    console.log(marks);
  
    console.log(greetName());
    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />

        {greetName()}
        {age+1}
    //calling function class component
        <HedderClassComponent/>
        <HedderFunctionalComponent/>
        <HedderFunctionalComponent1/>

      </div>
    );

}