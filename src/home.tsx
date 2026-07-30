import { Link } from "react-router-dom";
import { Message } from "./Message";

export default function Home(){ 
  return( 
    <> 
    <p className="text-5xl text-center font-bold">My first React</p>
  <Link to="/About"><button className="cursor-pointer">Home</button> </Link>
  <div className="flex flex-row gap-10">

  <div className=" transition duration-3 hover:-translate-y-2 transition duration-150 border-2 shadow-lg shadow-black/60 hover:shadow-black/100 w-60 rounded-lg p-3 mt-10 "> 
  <Message  card="card 2" description="Hello" text="click" color="bg-red-500"/>
  </div>
   <div className=" transition duration-3 hover:-translate-y-2 transition duration-150 border-2 shadow-lg shadow-black/60 hover:shadow-black/100 w-60 rounded-lg p-3 mt-10 "> 
  <Message  card="card 3" description="Hello" text="click" color="bg-blue-500"/>
  </div>
  <div className=" transition duration-3 hover:-translate-y-2 transition duration-150 border-2 shadow-lg shadow-black/60 hover:shadow-black/100 w-60 rounded-lg p-3 mt-10 "> 
  <Message  card="card 4" description="Hello" text="click" color="bg-orange-500"/>
  </div>
  </div>
    </>
  )
}