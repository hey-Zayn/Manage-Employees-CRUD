import React from "react";
import {  LayoutDashboard, LogOut, Plus, Settings, UsersRound } from "lucide-react";
import logo from "../../assests/logo.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="menu h-screen bg-base-200 rounded-box flex flex-col justify-between py-10">
    <div>
        <img src={logo} className="w-10" />
    </div>
    
      <div>
        <ul className=" flex flex-col gap-4 ">
          <li>
            <Link to="/" className="tooltip tooltip-right" data-tip="Dashboard">
            <LayoutDashboard size={20}/>
            </Link>
          </li>
          <li>
            <Link to="employees" className="tooltip tooltip-right" data-tip="employees">
            <UsersRound size={20}/>
            </Link>
          </li>
          <li>
            <a className="tooltip tooltip-right" data-tip="Add new">
            <Plus size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <button className="btn btn-circle">
            <Settings />
          </button>
        </div>
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div>
          <button className="btn btn-circle btn-error">
            <LogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
