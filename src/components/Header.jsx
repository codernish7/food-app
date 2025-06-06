import { Link } from "react-router-dom"


const Header =()=>{
   return (
    <header className="flex justify-between items-center px-4 md:px-10 py-2 bg-white shadow-md sticky top-0 z-50">
      <div className="p-2 transition-transform duration-300">
        <img 
          className="w-24 md:w-32 transition-all duration-300 hover:scale-105" 
          src="https://imgs.search.brave.com/8dHqoQc9CzURAeGr8m36KOf-L5GwzwhWZBzBrUkhOJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MzUzMzc4L3ZlY3Rv/ci9mYXN0LWZvb2Qt/bGluZS1pY29uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz14/RDktS2xWal93NGhx/aGxCNlZuc25UcWNh/dW1BVGdEbnl3TmRo/cmhPb2s0PQ" 
          alt="logo" 
        />
      </div>
      <nav>
        <ul className="flex gap-3 md:gap-8">
          <li className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            Cart
          </li>
        </ul>
      </nav>
    </header>
  )
    }

export default Header