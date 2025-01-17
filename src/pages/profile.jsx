// import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import NavbarDashboard from "../components/NavbarDashboard";
import { TbEdit } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <>
      <div className="w-full flex flex-col box-border h-fit-content">

      <NavbarDashboard page={"profile"}/>
      <div className="flex box-border">
          <Sidebar page={"dashboard"} side={"sidebar"}/>
          <main className="flex flex-col gap-8 w-full p-4 md:p-8">
            <div className="flex gap-2">
              <div className=" text-secondary">
                <CgProfile className="text-primary w-6 h-6" />
              </div>
              <div className="font-semibold text-base">Profile</div>
            </div>
            <div className="md:px-9 md:py-4 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda">
                <div className="flex flex-col gap-3">
                  <div className="text-secondary font-bold text-base">
                    Account Information
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className=" avatar">
                      <div className="w-32 h-32 rounded">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Link to="/change-pin">
                          <button className="justify-center items-center rounded-lg w-40 h-11 bg-[#2948FF] text-white flex gap-2">
                            <TbEdit className="w-6 h-6" /> Change Profile
                          </button>
                        </Link>
                      </div>
                      <div>
                        <Link to="/change-password">
                          <button className="justify-center items-center rounded-lg border border-[#D00000] text-[#D00000] w-40 h-11 flex gap-2">
                            <AiOutlineDelete className="w-6 h-6" /> Delete
                            Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-info text-sm">
                    The profile picture must be 512 x 512 pixels or less
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Full Name
                    </div>
                  </div>
                  <div className="flex">
                    <div className="">
                      <CgProfile className="ml-5 mt-3 absolute w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Phone
                    </div>
                  </div>
                  <div className="flex">
                    <div className="">
                      <LuPhone className="ml-5 mt-3 absolute w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Email
                    </div>
                  </div>
                  <div className="flex">
                    <div className="">
                      <MdOutlineEmail className=" ml-5 mt-3 absolute w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Password
                    </div>
                  </div>
                  <div className="flex">
                    <a className="text-[#2948FF]" href="">
                      Change Password
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-secondary font-semibold text-base">
                      Pin
                    </div>
                  </div>
                  <div className="flex">
                    <a className="text-[#2948FF]" href="">
                      Change Password
                    </a>
                  </div>
                </div>
                <div>
                  <button className="bg-[#2948FF] w-full h-11 text-white rounded-md">
                    Submit
                  </button>
                </div>
              </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
