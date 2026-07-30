import { Link } from "react-router-dom";
import { Message } from "./Message";

export default function Home(){ 
  return( 
   <div>  
    <p className="text-5xl text-center font-bold">Erica Sobiono</p>
  <Link to="/About"><button >About</button> </Link>
  <div className="flex flex-row gap-10">

  <div className=" border-2 p-2 w-50 rounded-md bg-gradient-to-r from-orange-200 to-pink-200 "> 
  <Message  card="card 2" description="Hello" text="click" color="bg-red-500"/>
  </div>
  <div className=" border-2 p-2 w-50 rounded-md bg-gradient-to-r from-orange-200 to-pink-200 "> 
  <Message  card="card 2" description="Hello" text="click" color="bg-orange-500"/>
  </div>
   <div className=" border-2 p-2 w-50 rounded-md bg-gradient-to-r from-orange-200 to-pink-200 "> 
  <Message  card="card 2" description="Hello" text="click" color="bg-green-500"/>
  </div>
  </div>
    </div>
  )
}