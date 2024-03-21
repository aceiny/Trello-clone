import React, { useState } from 'react';
import searchIcon from '../assets/icons/search.svg';
import { Link } from 'react-router-dom';
import { NavCreate } from './utils/NavCreate';
import logo from '../assets/logo.png';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/reducers/auth.reducer';
const NavBar = () => {
  const dispatch = useDispatch();
  const navs = [
    {
      title: 'Workspace',
      path: '/',
    },
    {
      title: 'Recent',
      path: '/recent',
    },
    {
      title: 'Starred',
      path: '/starred',
    },
    {
      title: 'Templates',
      path: '/templates',
    },
  ];

  return (
    <nav className=" py-2 px-4 h-fit bg-[#1D2125] text-[#b6c2cf] border-b border-[#b6c2cf5c] flex justify-between items-center">
      <article className="flex items-center justify-center gap-8">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[70px] object-cover" />
        </Link>
        <ul className="flex items-center justify-center gap-8">
          {navs.map((nav, index) => (
            <Link
              to={nav.path}
              key={index}
              className="text-[#b6c2cf] hover:text-[#fff] transition duration-200 ease-linear"
            >
              <li
                key={index}
                className="cursor-pointer hover:text-white transition duration-200 ease-linear"
              >
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>
        <NavCreate />
      </article>
      <article className="flex h-full justify-center items-center gap-4">
        <div className="flex pl-2  border border-[#b6c2cf56] rounded items-center">
          <img src={searchIcon} alt="" className="w-6 py-1" />
          <input
            placeholder="Search"
            type="text"
            className=" bg-transparent outline-none  py-1 px-2"
          />
        </div>
        <div>
          <Menu>
            <MenuButton>
              <img
                src=" https://xsgames.co/randomusers/avatar.php?g=pixel "
                alt="profile"
                className="w-7 border h-7 rounded-full object-cover"
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => dispatch(logout())}
                className=" text-black flex items-center gap-2"
              >
                <LogOut size={16} />
                logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </article>
    </nav>
  );
};

export default NavBar;
