import React from 'react';
import { NavLink} from "react-router-dom";


const Header = () => {
  return (
    <header className="px-10">
      <div className="top-header flex md:flex-row items-center justify-between py-5 ">
        <div className="font-black text-xl site-color">
          Shani Bashiru PhD
        </div>
        <div className="nav flex md:flex-row ">
          <NavLink to="/" className="text-color rounded hover:bg-blue-800 text-base hover:text-blue-100 hover:font-medium py-2 px-2 md:mx-2 font-semibold">Home</NavLink>
          <NavLink to="/about" className="text-color rounded hover:bg-blue-800 text-base hover:text-blue-100 hover:font-medium py-2 px-2 md:mx-2 font-semibold">About</NavLink>
          <NavLink to="/publications" className="text-color rounded hover:bg-blue-800 text-base hover:text-blue-100 hover:font-medium py-2 px-2 md:mx-2 font-semibold">Publications</NavLink>
          <NavLink to="/awards" className="text-color rounded hover:bg-blue-800 text-base hover:text-blue-100 hover:font-medium py-2 px-2 md:mx-2 font-semibold">Awards</NavLink>
          <NavLink to="/media" className="text-color rounded hover:bg-blue-800 text-base hover:text-blue-100 hover:font-medium py-2 px-2 md:mx-2 font-semibold">Media</NavLink>
          <NavLink to="#" className="text-color rounded hover:bg-blue-800 text-base hover:text-blue-100 hover:font-medium py-2 px-2 md:mx-2 font-semibold">Contact</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
