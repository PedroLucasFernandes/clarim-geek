import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LoginPage = () => {
  return (
    <div className="flex h-screen font-sans">
      <div className="flex-1 flex items-center justify-center bg-white">
        <StaticImage
          src="../images/CAPAPRETA.png"
          alt="Clarim Geek Logo"
          placeholder="tracedSVG"
          layout="constrained"
          width={450}
        />
      </div>

      <div className="flex-1 bg-[#252323] text-white flex flex-col items-center justify-center relative">
        <div className="w-4/5 max-w-md">
          <h1 className="mb-24 text-4xl font-bold text-center">
            BEM-VINDO, ESCRITOR!
          </h1>
          <form className="w-full">
            <input
              type="text"
              placeholder="LOGIN"
              className="w-full p-2 mb-4 border-none rounded-md text-[#252323]"
            />
            <input
              type="password"
              placeholder="SENHA"
              className="w-full p-2 mb-4 border-none rounded-md text-[#252323]"
            />
            <button
              type="submit"
              className="w-full p-2 bg-[#F86840] font-bold text-white rounded-md hover:bg-orange-600"
            >
              ENTRAR
            </button>
          </form>
        </div>

        <footer className="absolute bottom-5 text-sm text-center opacity-70">
          ©2024 by Clarim Geek. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;