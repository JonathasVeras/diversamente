import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user")); // Pega o usuário do armazenamento local
  const role = storedUser ? storedUser.role : ""; // Atribui a role do usuário ou vazio caso não exista usuário

  const handleLogout = () => {
    localStorage.removeItem("storedUser"); // Remove o usuário do armazenamento local
    navigate("/diversamente"); // Redireciona para a página de login
  };

  const handleRegister = () => {
    navigate("/diversamente/register"); // Redireciona para a página de registro
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-screen">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="w-[5rem]" src="/images/DiversaMente.png" alt="logo da empresa" />
        <span className="font-semibold text-xl tracking-tight ml-4">{role}</span>
      </div>
      <div>
        <button
          onClick={handleRegister}
          className="bg-black inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-4"
        >
          Criar Conta
        </button>
        <button
          onClick={handleLogout}
          className="bg-black inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
