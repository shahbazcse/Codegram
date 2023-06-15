import { useState } from "react";
import loginBanner from "../../assets/Codegram.gif";
import loginBG from "../../assets/loginBG2.jpg";
import logo from "../../assets/messages.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Login() {
  const [loginForm, setLoginForm] = useState(true);
  return (
    <div
      className="container max-w-full h-screen flex bg-black relative max-w-screen m-auto"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className="hidden xl:block">
        <img src={loginBanner} className="h-screen" alt="" />
      </div>
      <div className="flex-col m-auto">
        <div className="xl:hidden flex items-center justify-center p-8">
          <img src={logo} alt="" height="44px" width="44px" />
          <span className="text-white text-3xl font-logo1 ml-3">Codegram</span>
        </div>
        <div className="flex-col m-auto mb-32 items-center justify-center p-6 rounded-md bg-[#16181ce5] hover:bg-[#202329]">
          {loginForm ? (
            <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} />
          ) : (
            <SignupForm loginForm={loginForm} setLoginForm={setLoginForm} />
          )}
        </div>
      </div>
    </div>
  );
}