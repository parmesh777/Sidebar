import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

export const SideBarData = [
  {
    title: "Movies",
    path: "/movies",
    icon: <BiIcons.BiCameraMovie />,
    iconOpen: <RiIcons.RiArrowUpSLine />,
    iconClose: <RiIcons.RiArrowDownSLine />,
    subNav: [
      {
        title: "Trending",
        path: "/movies/trending",
        icon: <AiIcons.AiFillFire />,
      },
      {
        title: "Popular",
        path: "/movies/popular",
        icon: <AiIcons.AiFillStar />,
      },
      {
        title: "Search Movies",
        path: "/movies/search",
        icon: <FaIcons.FaSearch />,
      },
    ],
  },
  {
    title: "News",
    path: "/news",
    icon: <Io5Icons.IoNewspaperOutline />,
    iconOpen: <RiIcons.RiArrowUpSLine />,
    iconClose: <RiIcons.RiArrowDownSLine />,
    subNav: [
      {
        title: "Trending",
        path: "/news/trending",
        icon: <AiIcons.AiFillFire />,
      },
      {
        title: "Popular",
        path: "/movies/popular",
        icon: <AiIcons.AiFillStar />,
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaInfoCircle />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <AiIcons.AiFillPhone />,
  },
];
