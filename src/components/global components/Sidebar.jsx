import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SidebarAtom from "../../recoil/atoms/sidebar/SidebarAtom";
import arrow_left from "../../assets/icons/Arrow-left-nav.svg";
import { NavLink } from "react-router-dom";
import nav_data from "../../mockapi/mobileNavData";

const Sidebar = () => {

  const [sidebarToggle, setSidebarToggle] = useRecoilState(SidebarAtom);

  return (
    <div
      className={`h-screen bg-white transition-all duration-200 fixed z-[1000] right-0 pt-32 ${sidebarToggle ? "w-[75vw] ease-in overflow-y-scroll" : "w-0 ease-out overflow-hidden"
        }`}
    >
      <div className="w-full">
        <ul className="w-full">
          {nav_data?.map((data, i) => {
            return localStorage.getItem("status") ?
              <div key={i} className={`${data?.title === 'LOGIN' ? 'hidden' : ''} `}>
                <div>
                  <NavLink to={data?.routes} className="pl-3" onClick={() => setSidebarToggle(false)}>
                    <li className="poppins text-[#696969d5] border-b border-b-[#6969697c] mx-auto w-[87%] font-[300] flex justify-between items-center py-[13px] text-[18px] tracking-[1px]">
                      {data?.title}
                    </li>
                  </NavLink>
                </div>
              </div>
              :
              <div key={i} className={`${data?.title === 'ACCOUNT' ? 'hidden' : ''} `}>
                <div>
                  <NavLink to={data?.routes} className="px-3 inline" onClick={() => setSidebarToggle(false)}>
                    <li className="poppins text-[#696969d5] border-b border-b-[#6969697c] mx-auto w-[87%] font-[300] flex justify-between items-center py-[5px] text-[18px] tracking-[1px]">
                      {" "}
                      {data?.title}
                    </li>
                  </NavLink>
                </div>
              </div>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
