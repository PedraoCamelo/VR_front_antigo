import React from "react";
import { FaHome, FaClipboardCheck } from "react-icons/fa";
import { IoMdContacts, IoIosInformationCircle } from "react-icons/io";
import { FaBookBookmark, FaMessage, FaCalendarDays, FaFilePen } from "react-icons/fa6";
import { LuLibrary } from "react-icons/lu";
import { MdContactSupport } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${sidebarToggle ? " hidden " : " block "}w-60 bg-gray-500 fixed h-full px-4 py-2  shadow-2xl `}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Painel Aluno</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
            Home
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/professores" className="px-3">
            <IoMdContacts className="inline-block w-6 h-6 mr-2 -mt-2"></IoMdContacts>
            Professores
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/disciplinas" className="px-3">
            <FaBookBookmark className="inline-block w-6 h-6 mr-2 -mt-2"></FaBookBookmark>
            Disciplinas
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/atividades" className="px-3">
            <FaClipboardCheck className="inline-block w-6 h-6 mr-2 -mt-2"></FaClipboardCheck>
            Atividades
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/notas" className="px-3">
            <FaFilePen className="inline-block w-6 h-6 mr-2 -mt-2"></FaFilePen>
            Notas
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/calendario" className="px-3">
            <FaCalendarDays className="inline-block w-6 h-6 mr-2 -mt-2"></FaCalendarDays>
            Calendario
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/biblioteca" className="px-3">
            <LuLibrary className="inline-block w-6 h-6 mr-2 -mt-2"></LuLibrary>
            Biblioteca
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/fale_conosco" className="px-3">
            <MdContactSupport className="inline-block w-6 h-6 mr-2 -mt-2"></MdContactSupport>
            Fale conosco
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/chat_turma" className="px-3">
            <FaMessage className="inline-block w-6 h-6 mr-2 -mt-2"></FaMessage>
            Chat da turma
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
          <Link to="/sobre_nos" className="px-3">
            <IoIosInformationCircle className="inline-block w-6 h-6 mr-2 -mt-2"></IoIosInformationCircle>
            Sobre nós
          </Link>
        </li>

      </ul>
    </div>
  );
};
export default Sidebar