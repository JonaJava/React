import React from "react";
import {
  MdMic,
  MdHome,
  MdForum,
  MdPhone,
  MdDevicesOther,
  MdOutlineCalendarToday,
  MdSettings,
  MdLibraryAdd,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <nav className="px-5   ">
      <div className="bg-indigo-500 w-10 h-10 rounded-3xl flex items-center  justify-center mt-5">
        <MdMic size={30} color="white" />
      </div>

      <ul className="  flex flex-col justify-center  items-center mt-8">
        <li className="py-6 relative">
          {<MdHome size={25} />}
          <span className="w-3 h-3 rounded-full bg-green-500  absolute -right-1 top-4"></span>
        </li>
        <li className="py-6">{<MdForum size={25} />}</li>
        <li className="py-6">{<MdPhone size={25} />}</li>
        <li className="py-6">{<MdDevicesOther size={25} />}</li>
        <li className="py-6">{<MdOutlineCalendarToday size={25} />}</li>
        <li className="py-6">{<MdLibraryAdd size={25} />}</li>
        <li className="py-6">{<MdSettings size={25} />}</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
