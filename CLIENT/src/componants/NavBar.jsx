import React from "react";
import searchIcon from "../assets/icons/search.svg";
const NavBar = () => {
  return (
    <nav className=" py-3 px-4 h-fit bg-[#1D2125] text-[#b6c2cf] border-b border-[#b6c2cf5c] flex justify-between items-center">
      <article className="flex items-center justify-center gap-8">
        <img src="" alt="logo" className="w-20 h-10" />
        <ul className="flex items-center justify-center gap-8">
          <li>Workspace</li>
          <li>Recent</li>
          <li>Starred</li>
          <li>Templates</li>
        </ul>
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-black font-[600] transition duration-200 ease-linear">
          Create
        </button>
      </article>
      <article className="flex h-full justify-center items-center gap-4">
        <div className="flex pl-2  border border-[#b6c2cf56] rounded items-center">
          <img src={searchIcon} alt="" className="w-6 py-1" />
          <input
          placeholder="Search" 
          type="text" 
          className=" bg-transparent  py-1 px-2" />
        </div>
        <p>notifiaction</p>
        <p>help</p>
        <div>
          <img
            src=""
            alt="profile"
            className="w-7 border h-7 rounded-full object-cover"
          />
        </div>
      </article>
    </nav>
  );
};

export default NavBar;
