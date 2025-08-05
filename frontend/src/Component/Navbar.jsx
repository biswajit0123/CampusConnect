import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {

  const isAuth = false;
  const [scrolled, setScrolled] = useState(false);
  const [showBox, setShowBox] = useState(false)

  useEffect(()=>{
     const onScroll  = ()=>{
      if(window.scrollY > 0){
        setScrolled(true);
      }else{
        setScrolled(false)
      }
     };

   window.addEventListener("scroll", onScroll);
       return () => window.removeEventListener('scroll', onScroll);

  },[])


  const toggle = ()=>{
    console.log("toggle")
    setShowBox((prev) => !prev)
  }
  return (
    <div className={`transition  duration-1000 ease-in-out hover:shadow shadow-sm   flex justify-between px-5 py-2 h-14 items-center sticky top-0  ${scrolled?'bg-purple-400' : "bg-white"}   ${scrolled?'text-white' : "text-black"}`} >
      
      {/* logo */}
      <div className="text-xl font-bold">
       <Link to="/"> CampusConn<span className={`${scrolled?"text-white":"text-purple-400"}`}>ect</span></Link> 
      </div>

      {/* links */}
      <div className="hidden sm:block">
         <ul className="flex gap-5 font-normal">
              <li><Link to="/" className="relative group">Explore   <span className={`absolute left-0 bottom-0 h-[2px] w-0  ${scrolled?'bg-white':"bg-purple-400"} transition-all duration-300 group-hover:w-full`}></span>
              </Link></li>
          <li><Link to="/q=popular" className="relative group">Popular  <span className={`absolute left-0 bottom-0 h-[2px] w-0  ${scrolled?'bg-white':"bg-purple-400"} transition-all duration-300 group-hover:w-full`}></span></Link></li>
          <li><Link to="/campuses" className="relative group">Campuses  <span className={`absolute left-0 bottom-0 h-[2px] w-0  ${scrolled?'bg-white':"bg-purple-400"} transition-all duration-300 group-hover:w-full`}></span></Link></li>

          {!isAuth && <li className={`transition-all duration-500 ease-in-out border ${!scrolled ? "border-purple-400" :       "border-white"} px-2 hover:rounded-xl`}>
          <Link to="/login" className="text-xs text-center">Log in</Link>
         </li> }

         {!isAuth && <li className={`transition-all duration-500 ease-in-out border ${!scrolled ? "border-purple-400" : "border-white"} px-2 hover:rounded-xl`}>
            <Link to="/signup" className="text-xs text-center">Sign in</Link>
          </li>  }
         
         {isAuth && <li className={`transition-all duration-500 ease-in-out border ${!scrolled ? "border-purple-400" : "border-white"} px-2 hover:rounded-xl`}>
            <Link to="/signup" className="text-xs text-center">logout</Link>
          </li>  }

         </ul>
      </div>

      {/* toggle sidebar */}
      <div className={`transition  duration-1000 ease-in-out absolute text-black bg-purple-400 ${showBox? "block":"hidden"} sm:hidden top-14 left-0 w-full ${scrolled?'bg-purple-400' : "bg-white"}  `}>
         <ul className={`flex gap-1 font-normal flex-col ${scrolled?'text-white' : "text-black"}`}  >
          <li className="p-2  border-b border-gray-400"><Link to="/" onClick={toggle} className="ml-3">Explore</Link></li>
          <li className="p-2 border-b border-gray-400"><Link to="/q=popular"onClick={toggle} className="ml-3">Popular</Link></li>
          <li className="p-2 border-b border-gray-400"><Link to="/campuses"onClick={toggle} className="ml-3">Campuses</Link></li>
          <li className="p-2 border-b border-gray-400"><Link to="/login"onClick={toggle} className="ml-3">Log in</Link></li>
          <li className="p-2"><Link to="/signup"onClick={toggle} className="ml-3">Sign up</Link></li>

         </ul>
      </div>
      <i className="fa-solid fa-bars sm:hidden text-2xl cursor-pointer   transition-all duration-500 ease-in-out" onClick={toggle}></i>
    </div>
  )
}

export default Navbar