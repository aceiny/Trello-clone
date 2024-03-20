import React from "react";
import searchIcon from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import { Button, Menu , MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
const NavBar = () => {
  const navs = [
    {
      title: "Workspace",
      path: "/",
    },
    {
      title: "Recent",
      path: "/recent",
    },
    {
      title: "Starred",
      path: "/starred",
    },
    {
      title: "Templates",
      path: "/templates",
    },
  ]
  const createBoard = () => { 
    console.log("create workspace") ;
  }
  return (
    <nav className=" py-2 px-4 h-fit bg-[#1D2125] text-[#b6c2cf] border-b border-[#b6c2cf5c] flex justify-between items-center">
      <article className="flex items-center justify-center gap-8">
        <img src="" alt="logo" className="w-20 h-10" />
        <ul className="flex items-center justify-center gap-8">
          {
            navs.map((nav, index) => (
              <Link to={nav.path} key={index} className="text-[#b6c2cf] hover:text-[#fff] transition duration-200 ease-linear">
                              <li key={index} className="cursor-pointer hover:text-white transition duration-200 ease-linear">
                {nav.title}
              </li>
              </Link>
            ))  
          }
        </ul>
        <Menu>
          <MenuButton>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-black font-[600] transition duration-200 ease-linear">
            Create
          </button>
          </MenuButton>
          <MenuList>
            <MenuItem className=" flex items-center gap-3">
              <input 
                type="text" 
                placeholder="workspace name" 
                className="px-2 py-1 w-40 border-black border outline-none flex-1 text-black rounded" 
                onClick={(e) => e.stopPropagation()} // Add this line
              />
              <Button onClick={createBoard}>+</Button>
            </MenuItem>
          </MenuList>
        </Menu>
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
/*mport React, { useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { b } from "vite/dist/node/types.d-jgA8ss1A";
const NavBar = () => {
  const navs = [
    {
      title: "Workspace",
      path: "/",
    },
    {
      title: "Recent",
      path: "/recent",
    },
    {
      title: "Starred",
      path: "/starred",
    },
    {
      title: "Templates",
      path: "/templates",
    },
  ]
  const [boardName , setboardName] = useState("")
   const createBoard = () => {
    console.log("create workspace" , boardName) ;
  }
  return (
    <nav className=" py-2 px-4 h-fit bg-[#1D2125] text-[#b6c2cf] border-b border-[#b6c2cf5c] flex justify-between items-center">
      <article className="flex items-center justify-center gap-8">
        <img src="" alt="logo" className="w-20 h-10" />
        <ul className="flex items-center justify-center gap-8">
          {
            navs.map((nav, index) => (
              <Link to={nav.path} key={index} className="text-[#b6c2cf] hover:text-[#fff] transition duration-200 ease-linear">
                              <li key={index} className="cursor-pointer hover:text-white transition duration-200 ease-linear">
                {nav.title}
              </li>
              </Link>
            ))  
          }
        </ul>
        <Menu>
          <MenuButton>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-black font-[600] transition duration-200 ease-linear">
            Create
          </button>
          </MenuButton>
          <MenuList>
            <MenuItem className=" flex items-center gap-3">
              <input 
                type="text" 
                placeholder="workspace name" 
                className="px-2 py-1 w-40 border-black border outline-none flex-1 text-black rounded" 
                onClick={(e) => e.stopPropagation()} // Add this line
              />
              <Button onClick={createBoard}>+</Button>
            </MenuItem>
          </MenuList>
        </Menu>
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

export default NavBar;*/
