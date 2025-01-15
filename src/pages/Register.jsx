import React from "react";
import image from "../assets/images/Register_Image.png";
import logo from "../assets/icons/ppay_logo2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div>
      <div className="flex h-screen bg-primary">
        <div className="py-12 px-36 rounded-r-[100px] w-[800px] bg-neutral flex flex-col gap-2">
          <div className="items-center">
            <img src={logo} alt="" className="w-32 h-10" />
          </div>
          <div className="text-3xl font-medium">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="text-base">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className="btn border-abuMuda w-full h-10 border flex justify-center items-center">
              <button className="w-full text-lg font-medium flex justify-center items-center gap-3 text-info"><FcGoogle />Sign In With Google</button>
            </div>
            <div className="btn border-abuMuda w-full h-10 border flex justify-center items-center">
              <button className="w-full text-lg font-medium flex justify-center items-center gap-3 text-info"><FaFacebook className="text-blue-700"/>Sign In With Facebook</button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div>
              <hr className="w-[200px] h-0.5 bg-info"/>
            </div>
            <div className="text-info">or</div>
            <div>
              <hr className="w-[200px] h-0.5 bg-info"/>
            </div>
          </div>
          <form className="w-full flex flex-col gap-2">
            <label htmlFor="" className="flex flex-col gap-1">
              <div>
                <span className="text-base font-medium">Email</span>
              </div>
              <div>
                <input type="text" className="input border-info w-full h-11 box-border pl-5"/>
              </div>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
              <span className="text-base font-medium">Password</span>
              <div>
                <input type="text" className="w-full h-11 input border-info box-border pl-5"/>
              </div>
            </label>
            <label htmlFor="" className="flex flex-col gap-1">
              <span className="text-base font-medium">Confirm Password</span>
              <div>
                <input type="text" className="w-full h-11 input border-info box-border pl-5"/>
              </div>
            </label>
            <button className="btn btn-primary text-neutral">Register</button>
          </form>
          <div className="w-full flex justify-center">Have An Account?<span className="text-primary">
            <Link to="/login">Login</Link></span></div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Register;
