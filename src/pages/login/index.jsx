import React from "react";
import Login from "../../containers/login/index";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="">
          <Login />
        </div>
        <div className="flex col-span-3 items-center justify-center ml-[25rem]">
          <img src="/images/DiversaMente.png" alt="logo da empresa" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;