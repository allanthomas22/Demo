import React from "react";
import { BsBank } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className=" w-full h-[100px] bg-[#c7daff] shadow-lg shadow-[#4c64cf]/50 sticky top-0">
      <div className="px-10 w-full h-full flex flex-row">
        <div className=" flex flex-row items-center justify-start w-full h-full">
          <div className="p-4 text-xl flex flex-col items-center justify-center gap-1">
            <BsBank size={60} color="#527acc" />
            <p className="font-serif text-base text-[#374ba5]">ABC Bank</p>
          </div>
          <div className=" flex flex-row gap-2">
            <p className="text-[#4c64cf] font-bold text-xl px-5 ">Home</p>
            <p className="text-[#4c64cf] font-bold text-xl px-5">Tender</p>
            <p className="text-[#4c64cf] font-bold text-xl px-5">Profile</p>
            <p className="text-[#4c64cf] font-bold text-xl px-5">
              Self-Service
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full h-full">
          <div className=" flex flex-col items-center justify-center ">
            <div className="px-10 py-2 gap-1 text-white rounded-2xl bg-[#4c64cf] flex flex-row items-center justify-center ">
              <p>Signup</p>/<p>Login</p>
            </div>
            <div className="font-bold text-center p-2 text-md text-[#4c64cf]">
              Select Language
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
