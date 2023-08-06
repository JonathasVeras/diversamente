import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));
const MenuDoAluno = lazy(() => import("./pages/menuAluno/index"));
const MenuDoProfessor = lazy(() => import("./pages/menuProfessor/index"));
const StartTest = lazy(() => import("./pages/startTest/index"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key="0"
          path="/"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Login></Login>
            </Suspense>
          }
        />
        <Route
          key="1"
          path="/register"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Register></Register>
            </Suspense>
          }
        />
        <Route
          key="2"
          path="/aluno-menu"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Navbar></Navbar>
              <MenuDoAluno></MenuDoAluno>
            </Suspense>
          }
        />
        <Route
          key="3"
          path="/professor-menu"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Navbar></Navbar>
              <MenuDoProfessor></MenuDoProfessor>
            </Suspense>
          }
        />
        <Route
          key="4"
          path="/start-test/:index"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Navbar></Navbar>
              <StartTest />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
