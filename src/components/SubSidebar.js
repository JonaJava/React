import React from "react";
import {
  MdNotes,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineSearch,
  MdForum,
  MdPhone,
  MdOutlineMoreHoriz,
} from "react-icons/md";

const SubSidebar = () => {
  const usuarios = [
    {
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre: "juana",
      isActive: false,
      status: "diseñadora",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre: "jose",
      isActive: true,
      status: "administrador",
    },
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      nombre: "carlita",
      isActive: false,
      status: "desarroladora",
    },
  ];
  return (
    <div className="w-2/5 bg-slate-100">
      <div className="flex  flex-row items-center border-b px-8 border-b-gray-900 h-20">
        <div className="flex-1 flex flex-row items-center   ">
          <div className="border border-gray-300 bg-white p-1  rounded-md mr-5">
            <MdNotes size={25} />
          </div>
          <h3 className="text-xl">Contactos</h3>
        </div>
        <div className="space-x-2 flex">
          <div className="border border-gray-200 rounded-md bg-white p-2">
            <MdKeyboardArrowLeft size={20} />
          </div>
          <div className="border border-gray-200 rounded-md bg-white p-2">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="px-8 pt-7 ">
        <span>buscar un contacto</span>
        <div className="flex flex-row">
          <span className="flex-1">nombre, email, numero telefonico</span>
          <MdOutlineSearch size={20} />
        </div>
      </div>
      <div className="space-y-3 mt-6">
        {usuarios.map((val, index) => {
          return <Usuario key={index} {...val} />;
        })}
      </div>
    </div>
  );
};

export default SubSidebar;

function Usuario({ img, isActive, nombre, status }) {
  return (
    <div className="flex flex-row px-5 ">
      <div className="w-9 h-9 rounded-xl  mr-4 relative">
        <img
          src={img}
          alt="perfil"
          className="w-9 h-9 object-cover rounded-xl"
        ></img>
        <span
          className={`w-2 h-2 top-0  rounded-full ${
            isActive ? "bg-green-400" : "bg-red-600"
          } absolute`}
        ></span>
      </div>
      <div className="flex-1 flex flex-col px-3 ">
        <span className="font-bold text-sm">{nombre}</span>
        <span className="font-light  text-sm text-gray-400">{status}</span>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <div className="bg-white p-2  rouned-lg border border-gray-200">
          <MdForum size={25} />
        </div>
        <div className="bg-white p-2  rouned-lg border border-gray-200">
          <MdPhone size={25} />
        </div>
        <div className="bg-white p-2  rouned-lg border border-gray-200">
          <MdOutlineMoreHoriz size={25} />
        </div>
      </div>
    </div>
  );
}
