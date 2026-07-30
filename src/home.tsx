import { Link } from "react-router-dom";
import { Message } from "./Message";

export default function Home(){ 
  return( 
   <div>  
    <p className="text-3x1 text-center font-bold">Shan Degolacion</p>
  <Link to="/About"><button >About</button> </Link>
  <div className="flex flex-row gap-10">

  <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-red-100"> 
  <Message  card="card 1" description="desription" text="click" color="bg-red-500"/>
  </div>
   <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-red-100"> 
  <Message  card="card 2" description="description" text="click" color="bg-red-500"/>
  </div>
   <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-red-100"> 
  <Message  card="card 3" description="description" text="click" color="bg-red-500"/>
  </div>
  </div>
    </div>
  )
}