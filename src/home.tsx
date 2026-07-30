import { Link } from "react-router-dom";
import { Message } from "./Message";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Jhon Vibert Bagaipo
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to my simple React application.
        </p>

        <Link to="/About">
          <button className="mt-6 px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            About Me
          </button>
        </Link>

        <div className="mt-8 border rounded-md p-4">
          <Message
            card="Card 1"
            description="Shopee"
            text="Click"
            color="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
}