import { lazy, Suspense } from "react";
import { BrowserRouter, Route, HashRouter as RouterA } from "react-router-dom";
import Navbar from "./components/navBar";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));
const MenuDoAluno = lazy(() => import("./pages/menuAluno/index"));
const MenuDoProfessor = lazy(() => import("./pages/menuProfessor/index"));
const StartTest = lazy(() => import("./pages/startTest/index"));

export default function RouterApp() {
  return (
    <BrowserRouter>
      <RouterA>
        <Route
          key="0"
          path="/diversamente"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Login></Login>
            </Suspense>
          }
        />
        <Route
          key="1"
          path="/diversamente/register"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Register></Register>
            </Suspense>
          }
        />
        <Route
          key="2"
          path="/diversamente/aluno-menu"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Navbar></Navbar>
              <MenuDoAluno></MenuDoAluno>
            </Suspense>
          }
        />
        <Route
          key="3"
          path="/diversamente/professor-menu"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Navbar></Navbar>
              <MenuDoProfessor></MenuDoProfessor>
            </Suspense>
          }
        />
        <Route
          key="4"
          path="/diversamente/start-test/:index"
          element={
            <Suspense fallback={<>Carregando...</>}>
              <Navbar></Navbar>
              <StartTest />
            </Suspense>
          }
        />
      </RouterA>
    </BrowserRouter>
  );
}
