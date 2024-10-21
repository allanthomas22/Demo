import React from "react";
import { BsBank } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full h-[350px] bg-[#c7daff]  flex items-center justify-center bottom-0">
      <div className="flex flex-row items-center justify-center gap-52">
        <div className=" flex flex-col items-center justify-center gap-1">
          <BsBank size={150} color="#527acc" />
          <p className="font-serif  text-[#374ba5] text-4xl">ABC Bank</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-[#4583ff] font-bold text-3xl">Job Oppurtunities</p>
          <p className="text-[#0055ff] font-semibold text-xl">Blog</p>
          <p className="text-[#0055ff] font-semibold text-xl">Research</p>
          <p className="text-[#0055ff] font-semibold text-xl">Awards</p>
          <p className="text-[#0055ff] font-semibold text-xl">Guides</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-[#4583ff] font-bold text-3xl">Information</p>
          <p className="text-[#0055ff] font-semibold text-xl">
            Help / Contact Us
          </p>
          <p className="text-[#0055ff] font-semibold text-xl">Terms of Use</p>
          <p className="text-[#0055ff] font-semibold text-xl">
            Privacy and Ads
          </p>
          <p className="text-[#0055ff] font-semibold text-xl">
            Cookies and my Info
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-[#4583ff] font-bold text-3xl">Work With Us</p>
          <p className="text-[#0055ff] font-semibold text-xl">Advertisers</p>
          <p className="text-[#0055ff] font-semibold text-xl">Careers</p>
          <p className="text-[#0055ff] font-semibold text-xl">
            Countries and Locations
          </p>
          <p className="text-[#0055ff] font-semibold text-xl">Modes</p>
        </div>
      </div>
    </div>
  );
}
