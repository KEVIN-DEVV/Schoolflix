import React from "react";

function Home() {
  return (
    <div className="background flex items-center justify-even flex-col">
      <div className="flex items-center justify-between flex-col mt-24 ">
        <h1 className="text-white text-center text-7xl font-bold pb-12">
          Welcome to SchoolFlix
        </h1>
        <p className="text-white text-xl capitalize">
          This is a platform designed to help institutions keep records of their
          students, lecturers, and contacts.
        </p>
      </div>
      <div className="flex w-1/2 justify-around mt-24">
        <div>
          <button className="text-white bg-[#c084fc] text-xl h-16 w-full px-10 rounded hover:bg-white hover:text-black">Our Students</button>
        </div>
        <div>
          <button className="text-white bg-[#c084fc] text-xl h-16 px-10 rounded hover:bg-white hover:text-black">
            Our Lecturers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
