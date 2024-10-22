import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get bidNumber from the URL
import Footer from "../Footer";
import { IoCloseOutline } from "react-icons/io5";

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
  return (
    <>
      <div className="w-full flex justify-center">
        <table className="w-[80%] mt-20 border-collapse">
          <thead>
            <tr className="bg-[#4c64cf] text-white">
              <th className="px-4 py-3 border-r-2 border-white">Criteria</th>
              <th className=" py-3 border-r-2 border-white">
                Qualification Values
              </th>
              <th className="px-4 py-3 border-r-2 border-white">Comments</th>
            </tr>
          </thead>
          <tbody className="bg-[#dee9ff] ">
            <tr className="border-r-2 border-white">
              <td className="border px-4 py-10 border-r-2 border-white"></td>
              <td className="border px-4 py-10 border-r-2 border-white"></td>
              <td className="border px-4 py-10 border-r-2 border-white"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const ItemstoProcure = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center">
        <table className="w-[80%] mt-20 border-collapse">
          <thead>
            <tr className="bg-[#4c64cf] text-white">
              <th className="px-4 py-3 border-r-2 border-white">Criteria</th>
              <th className=" py-3 border-r-2 border-white">
                Qualification Values
              </th>
              <th className="px-4 py-3 border-r-2 border-white">Comments</th>
            </tr>
          </thead>
          <tbody className="bg-[#dee9ff] ">
            <tr className="border-r-2 border-white">
              <td className="border px-4 py-10 border-r-2 border-white"></td>
              <td className="border px-4 py-10 border-r-2 border-white"></td>
              <td className="border px-4 py-10 border-r-2 border-white"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <button
          onClick={() => setShowModal(!showModal)}
          className="w-[190px] mt-[500px] h-[45px] rounded-xl bg-[#4c64cf]"
        >
          <p className="text-white font-semibold text-2xl">Bid Now</p>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-600/30">
          <div className="w-[530px] h-[900px] mb-4 flex items-center justify-center rounded-2xl bg-white shadow-lg">
            <div className="w-full h-full p-4">
              <div className="w-full h-[50px] flex flex-row rounded-t-2xl ">
                <div className="w-full h-full  flex items-center justify-start">
                  <p className="text-4xl  font-thin text-[#4c64cf]">
                    Bid Application
                  </p>
                </div>
                <div className="w-full h-full  flex items-center justify-end">
                  <p className="text-2xl font-thin text-[#4c64cf]">
                    <button onClick={() => setShowModal(false)}>
                      <IoCloseOutline size={50} />
                    </button>
                  </p>
                </div>
              </div>
              <div className="w-full h-[600px] flex flex-col ">
                <div className="flex flex-col h-[150px] mt-4 items-start w-full ">
                  <p className="text-2xl font-normal text-[#4c64cf]">
                    Bid Notice Number:
                  </p>
                  <span className="w-full h-[40px] flex  px-2 mt-2 rounded bg-[#c7daff]">
                    <p className="font-thin text-base py-[7px] text-[#4c64cf]">
                      TESTBID001
                    </p>
                  </span>
                </div>
                <div className="flex flex-col h-[150px] mt-4 items-start w-full ">
                  <p className="text-2xl font-normal text-[#4c64cf]">
                    Application Name:
                  </p>
                  <span className="w-full h-[40px] flex  px-2 mt-2 rounded bg-[#c7daff]">
                    <p className="font-thin text-base py-[7px] text-[#4c64cf]"></p>
                  </span>
                </div>
                <div className="flex flex-col h-[150px] mt-4 items-start w-full ">
                  <p className="text-2xl font-normal text-[#4c64cf]">
                    Application Company Name:
                  </p>
                  <span className="w-full h-[40px] flex  px-2 mt-2 rounded bg-[#c7daff]">
                    <p className="font-thin text-base py-[7px] text-[#4c64cf]"></p>
                  </span>
                </div>
                <div className="flex flex-col h-[150px] mt-4 items-start w-full ">
                  <p className="text-2xl font-normal text-[#4c64cf]">
                    Tax Identification Number:
                  </p>
                  <span className="w-full h-[40px] flex  px-2 mt-2 rounded bg-[#c7daff]">
                    <p className="font-thin text-base py-[7px] text-[#4c64cf]"></p>
                  </span>
                </div>
                <div className="flex flex-col h-[150px] mt-4 items-start w-full ">
                  <p className="text-2xl font-normal text-[#4c64cf]">
                    Short Introduction:
                  </p>
                  <span className="w-full h-[150px] flex  px-2 mt-2 rounded bg-[#c7daff]">
                    <p className="font-thin text-base py-[7px] text-[#4c64cf]"></p>
                  </span>
                </div>
              </div>
              <div className="w-full h-[100px] flex items-center justify-center gap-10">
                <p className="text-2xl font-normal text-[#4c64cf]">
                  Upload Bid Purchase Recipt:
                </p>
                <button className="w-[150px] h-[45px] flex items-center px-4 justify-center  rounded-md bg-[#4c64cf]">
                  <p className="font-normal text-lg text-white text-center">
                    Upload
                  </p>
                </button>
              </div>
              <div className="w-full h-[100px] flex items-center justify-center">
                <button
                  onClick={() => setShowModal2(!showModal2)}
                  className="w-[250px] h-[60px] flex items-center  justify-center  rounded-full bg-[#4c64cf]"
                >
                  <p className="font-normal text-lg text-white text-center">
                    Submit
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-300/30">
          <div className="w-[450px] h-[135px] bg-white rounded-2xl">
            <div className="w-full h-[50%] bg-white rounded-t-2xl flex items-center justify-center">
              <p className="text-2xl font-normal text-[#4c64cf]">
                Bid Submitted Successfully
              </p>
            </div>
            <button
              onClick={() => setShowModal2(false)}
              className="w-full h-[50%] bg-[#4c64cf] rounded-b-2xl flex items-center justify-center"
            >
              <p className="text-2xl font-normal text-white text-[#4c64cf]">
                OK
              </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
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
