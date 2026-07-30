import { Link } from "react-router-dom";
import { Message } from "./Message";

export default function Home(){ 
  return( 
   <div>  
    <div className="border-2 h-100 w-300 ml-30 bg-gradient-to-r from-pink-300 to-red-200 rounded-lg shadow-xl shadow-black/60 "> 
   <p className="text-5xl font-bold text-center text-shadow">
  Shain LibodLibod
</p>
  <Link to="/About"><button className="ml-4 mt-5">About</button> </Link>
  <div className="flex flex-row gap-10 ml-20">

  <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-pink-100"> 
  <Message  card="card 1" description="shopee" text="click" color="bg-red-500"/>
  </div>
   <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-pink-100"> 
  <Message  card="card 1" description="shopee" text="click" color="bg-orange-500"/>
  </div>
   <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-pink-100"> 
  <Message  card="card 1" description="shopee" text="click" color="bg-blue-500"/>
  </div>
   <div className=" ml-4 mt-20 border-1 shadow-lg shadow-black/100 p-2 w-50 rounded-md bg-pink-100"> 
  <Message  card="card 1" description="shopee" text="click" color="bg-pink-500"/>
  </div>
  </div>
  </div>
    </div>
  )
}