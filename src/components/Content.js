import React from "react";
import {
  MdDriveFolderUpload,
  MdForum,
  MdOutlineMoreHoriz,
  MdOutlineSearch,
  MdPersonAddAlt,
  MdPhone,
} from "react-icons/md";

const Content = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-row  h-20 px-8 space-x-3 justify-end items-center border-b border-b-gray-900">
        <div className="border border-gray-500 rounded-lg bg-white p-2">
          <MdPersonAddAlt size={20} />
        </div>
        <div className=" border border-gray-500 rounded-lg bg-white p-2 ">
          <MdOutlineSearch size={20} />
        </div>
        <img
          src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="perfil"
          className="w-10 h-10 rounded-lg object-cover "
        ></img>
      </div>
      <div className="px-8 py-9 flex flex-row">
        <img
          src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="object-cover w-28 h-28  rounded-3xl"
          alt="perfil_principal"
        />
        <div className="flex flex-col ml-6">
          <span className="text-sm ">Juanita </span>
          <span className="mb-5 font-light">Diseñadora Grafica</span>
          <div className="flex flex-row items-center space-x-2  ">
            <button className="flex flex-row items-center px-2 py-2 rounded-md bg-blue-600 justify-center text-white">
              <MdForum />
              <span>Mensaje</span>
            </button>
            <button className="bg-white p-2 rounded-lg border border-gray-200">
              <MdPhone />
            </button>
            <button className="bg-white p-2 rounded-lg border border-gray-200 ">
              <MdDriveFolderUpload />
            </button>
            <button className="bg-white p-2 rounded-lg border border-gray-200">
              <MdOutlineMoreHoriz />
            </button>
          </div>
        </div>
      </div>
      <table>
        <tr className="border border-b-2">
          <td className="bg-white  text-right pr-5 align-top">Bio</td>
          <td>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
            corporis sint maxime adipisci tenetur totam? Dignissimos eius
            suscipit consectetur soluta accusantium, voluptatem molestiae. Qui
            amet eligendi fugit. Ratione, modi distinctio.
          </td>
        </tr>
        <tr className="border border-b-2">
          <td className="text-right w-1/5 pr-5 align-top">Email</td>
          <td>
            <div className="flex">
              <span className="flex-1">jon@jon.cl</span>
              <button className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-md text-xs ">
                Primario
              </button>
            </div>
            <span className="flex-1">jon2@jon.cl</span>
          </td>
        </tr>
        <tr className="border border-b-2">
          <td className="w-1/5 text-right pr-5 align-top">Pagina Web</td>
          <td className="align-top">www.jon.cl</td>
        </tr>
        <tr className="border border-b-2">
          <td className="text-right w-1/5 pr-5 align-top">Telefono</td>
          <td>
            <div className="flex">
              <span className="flex-1">+569 83278372</span>
              <button className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-md text-xs ">
                Primario
              </button>
            </div>
            <span className="flex-1">+569 737467627</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Content;
