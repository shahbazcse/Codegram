import { useState } from "react";
import loginBanner from "../../assets/logos/Codegram.gif";
import loginBG from "../../assets/logos/loginBG2.jpg";
import logo from "../../assets//logos/messages.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Bars } from "react-loader-spinner";

export default function Login() {
  const [loginForm, setLoginForm] = useState(true);
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
      className="container max-w-full h-screen flex bg-black relative max-w-screen m-auto"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      {isLoading && (
        <Bars
          height="120"
          width="120"
          color="#D3D3D3"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="m-auto items-center justify-center"
          visible={true}
        />
      )}
      {!isLoading && (
        <div className="flex items-center justify-center mx-auto">
          <div className="flex-col m-auto">
            <div className="flex items-center justify-center p-8">
              <img src={logo} alt="" height="44px" width="44px" />
              <span className="text-white text-3xl md:text-5xl font-logo1 ml-3">
                Codegram
              </span>
            </div>
            {loginForm ? (
              <LoginForm setLoginForm={setLoginForm} />
            ) : (
              <SignupForm setLoginForm={setLoginForm} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
