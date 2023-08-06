import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recupera a lista de usuários já registrados (ou inicia com um array vazio se não houver nenhum)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Adiciona o novo usuário à lista de usuários
    users.push(user);

    // Salva a lista de usuários atualizada no localstorage
    localStorage.setItem("users", JSON.stringify(users));

    // Define o novo usuário como o usuário atual
    localStorage.setItem("user", JSON.stringify(user));

    // User is registered, navigate to their menu
    if (user.role === "aluno") {
      navigate("/diversamente/aluno-menu");
    } else if (user.role === "professor") {
      navigate("/diversamente/professor-menu");
    }
  };
  const handleGoToLogin = () => {
    navigate("/diversamente"); // Redireciona para a página de login
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="role">Você é...</label>
              <select
                id="role"
                name="role"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={user.role}
                onChange={handleChange}
              >
                <option value="">---</option>
                <option value="aluno">Aluno</option>
                <option value="professor">Professor</option>
              </select>
            </div>
          </div>

          <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
          >
            Sign up
          </button>
          <button
            onClick={handleGoToLogin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Ir para o Login
          </button>
        </div>

        </form>
      </div>
    </div>
  );
}
