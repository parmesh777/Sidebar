import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import MenuItem from './MenuItem';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
// import * as BiIcons from "react-icons/bi";
import { IconContext } from 'react-icons/lib';

const SideBar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="nav">
          <Link to="#" className="nav-icon">
            {!sidebar ? (
              <FaIcons.FaBars onClick={showSidebar} />
            ) : (
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            )}
          </Link>
        </div>

        <div className="sidebar-nav" style={{ left: sidebar ? '0' : '-15%' }}>
          <div className="sidebar-wrap">
            {SideBarData.map((item, index) => {
              return <MenuItem item={item} key={index} />;
            })}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
