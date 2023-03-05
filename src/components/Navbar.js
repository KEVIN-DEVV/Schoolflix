import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    // main Navbar

    <div className="lg:flex justify-between items-center shadow bg-[#c084fc]">

      {/* Logo cont */}
      <div className="w-[100px]">
       
        <h1 className="pl-10 text-4xl font-bold" ><Link to='/'>School<span className="text-red-600">Flix</span></Link></h1>
       
      </div>

      {/* Navlinks */}
      <div className="flex  lg:flex-row md-flex-row justify-between sm:flex-col">
        <Link className="p-7 inline text-xl font-medium hover:text-white focus:text-white" to="/">Home</Link>
        <Link className="p-7 inline text-xl font-medium hover:text-white focus:text-white" to="/students">Students</Link>
        <Link className="p-7 inline text-xl font-medium hover:text-white focus:text-white" to="/lectures">Lecturers</Link>
        <Link className="p-7 inline text-xl font-medium hover:text-white focus:text-white" to="/contact_us">Contact us</Link>
      </div> 
    </div>
  );
};

export default Navbar;
