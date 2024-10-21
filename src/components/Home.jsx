import React from "react";
import Footer from "./Footer";

export default function Home() {
  const tenders = [
    { title: "Supply of IT Equipment", bidNumber: "PRO099" },
    { title: "Supply of Computers", bidNumber: "PRO019" },
    { title: "Supply of Stationary Materials", bidNumber: "PRO001" },
    { title: "Supply of Office Desks", bidNumber: "PRO010" },
    { title: "Supply of Office Chairs", bidNumber: "PRO012" },
    { title: "Supply of RFID Tags", bidNumber: "PRO044" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full h-[200px]  flex items-center justify-center">
        <p className="text-[#4c64cf] font-bold text-5xl">Tender Notification</p>
      </div>
      <div className="w-full h-[570px] ">
        <div className="px-10 flex flex-col items-center justify-center">
          <p className="text-[#4c64cf] w-[95%] text-start font-thin text-2xl py-5">
            Inviting Tenders for:
          </p>
          <div className="grid grid-cols-3 gap-10 ">
            {tenders.map((tender) => (
              <div className="bg-[#c7daff] w-[500px] h-[200px] rounded-2xl ">
                <div className=" flex flex-col gap-2 px-14 py-7">
                  <p className="text-[#4c64cf] text-start  font-bold text-xl">
                    {tender.title}
                  </p>
                  <p className="text-[#5f8de8]  text-start font-bold text-base">
                    Bid Notice Number: {tender.bidNumber}
                  </p>
                </div>
                <div className="flex items-center justify-center cursor-pointer">
                  <button className="w-[190px] h-[45px] rounded-xl bg-[#4c64cf] ">
                    <p className="text-white font-semibold text-base">
                      View Bid Details
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[180px] bg-[#4c64cf]   px-10">
        <div className="flex flex-col gap-2 w-full h-full justify-center">
          <p className="text-white font-bold text-base">
            Announcement to all Tender Seekers: BEWARE OF FAKE BIDDING
            APPLICATIONS!
          </p>
          <p className="text-white font-normal text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
