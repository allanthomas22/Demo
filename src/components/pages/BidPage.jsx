import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get bidNumber from the URL
import Footer from "../Footer";

const BidDetails = () => {
  const bidNumber = useParams().bidNumber;
  return (
    <>
      <p className="text-2xl font-bold text-[#4c64cf] py-10">
        Bid Notice Number:
        <span className="font-normal px-6">{bidNumber}</span>
      </p>
      <div className="w-full h-full flex flex-col items-start gap-16">
        <div className="w-full h-full flex flex-col items-start gap-3">
          <p className="text-2xl font-bold text-[#4c64cf]">Bid Documents:</p>
          <span className="font-normal text-2xl text-[#4c64cf] flex flex-row gap-10 ">
            <div className="flex flex-row items-center gap-3">
              <p className="font-normal text-[#4c64cf] text-xl">
                Available PLace:
              </p>
              <span className="w-[200px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                <p className="font-normal text-lg">HQ ABC</p>
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="font-normal text-[#4c64cf] text-xl">
                Available Date:
              </p>
              <span className="w-[200px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                <p className="font-normal text-lg">11/20/2024</p>
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="font-normal text-[#4c64cf] text-xl">
                Purchase Price:
              </p>
              <span className="w-[200px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                <p className="font-normal text-lg">200</p>
              </span>
            </div>
          </span>
        </div>
        <div className="w-full h-full flex flex-col items-start gap-3">
          <p className="text-2xl font-bold text-[#4c64cf]">Bid Security:</p>
          <span className="font-normal text-2xl text-[#4c64cf] ">
            <span className="font-normal text-2xl text-[#4c64cf] flex flex-row gap-10 ">
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Amount</p>
                <span className="w-[120px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">3000</p>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Currency</p>
                <span className="w-[120px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">ATB</p>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">
                  Payment Mode
                </p>
                <span className="w-[120px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">CPO</p>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Language</p>
                <span className="w-[170px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">English</p>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div className="w-full h-full flex flex-col items-start gap-3">
          <p className="text-2xl font-bold text-[#4c64cf]">Bid Submission:</p>
          <span className="font-normal text-2xl text-[#4c64cf] ">
            <span className="font-normal text-2xl text-[#4c64cf] flex flex-row gap-10 ">
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Address:</p>
                <span className="w-[300px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">HQ ABC</p>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Date/Time:</p>
                <span className="w-[350px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">12/30/2024 11:20:31</p>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div className="w-full h-full flex flex-col items-start gap-3">
          <p className="text-2xl font-bold text-[#4c64cf]">Bid Opening:</p>
          <span className="font-normal text-2xl text-[#4c64cf] ">
            <span className="font-normal text-2xl text-[#4c64cf] flex flex-row gap-10 ">
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Address:</p>
                <span className="w-[300px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">HQ ABC</p>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">Date/Time:</p>
                <span className="w-[250px] h-[40px] flex items-center px-4 justify-start rounded-xl bg-[#c7daff]">
                  <p className="font-normal text-lg">12/30/2024 11:20:31</p>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="font-normal text-[#4c64cf] text-xl">
                  Bid Reject Partially:{" "}
                </p>
                <span className=""></span>
              </div>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

const EligibilityCriteria = () => {
  return <>EligibilityCriteria</>;
};

const ItemstoProcure = () => {
  return <>ItemstoProcure</>;
};

export default function BidPage() {
  const [activeComponent, setActiveComponent] = useState("BidDetails");

  const renderComponent = () => {
    switch (activeComponent) {
      case "BidDetails":
        return <BidDetails />;
      case "EligibilityCriteria":
        return <EligibilityCriteria />;
      case "ItemstoProcure":
        return <ItemstoProcure />;
      default:
        return <BidDetails />;
    }
  };

  return (
    <div className="w-full h-full">
      <div className=" w-full h-[120px] bg-[#dee9ff] flex items-center justify-center">
        <p className="text-[#4c64cf] font-bold text-2xl">
          Inviting Tenders for IT Equipment
        </p>
      </div>
      <div className="w-full h-full flex flex-row bg-white shadow-lg shadow-[#4c64cf]/50 py-1">
        <div className="w-[13%] h-full flex flex-col gap-1">
          <button
            className="w-[200px] h-[250px] bg-[#4c64cf] hover:bg-[#4156b4] duration-300 ease-in-out transition-all"
            onClick={() => setActiveComponent("BidDetails")}
          >
            <p className="text-white text-lg font-semibold">Bid Details</p>
          </button>
          <button
            className="w-[200px] h-[250px] bg-[#4c64cf] hover:bg-[#4156b4] duration-300 ease-in-out transition-all"
            onClick={() => setActiveComponent("EligibilityCriteria")}
          >
            <p className="text-white text-lg font-semibold">
              Eligibility Criteria
            </p>
          </button>
          <button
            className="w-[200px] h-[250px] bg-[#4c64cf] hover:bg-[#4156b4] duration-300 ease-in-out transition-all"
            onClick={() => setActiveComponent("ItemstoProcure")}
          >
            <p className="text-white text-lg font-semibold">Items to Procure</p>
          </button>
        </div>
        <div className="w-[87%] h-full">{renderComponent()}</div>
      </div>
      <Footer />
    </div>
  );
}
