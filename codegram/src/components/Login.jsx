import { useContext } from "react";
import loginBanner from "../assets/Codegram.gif";
import loginBG from "../assets/loginBG2.jpg";
import logo from "../assets/messages.png";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <div
      className="container max-w-full h-screen flex bg-black relative max-w-screen max-h-screen m-auto"
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
        <div className="flex-col m-auto h-72 items-center justify-center p-6 rounded-md bg-[#16181ce5] hover:bg-[#202329]">
          <h1 className="text-white font-bold text-2xl pt-0 p-4 items-center justify-center flex">
            Login
          </h1>
          <hr className="pb-4" />
          <input
            type="text"
            className="flex p-2 m-4 rounded-sm"
            placeholder="Email"
          />
          <input
            type="text"
            className="flex p-2 m-4 rounded-sm"
            placeholder="Password"
          />
          <div className="flex">
            <button
              className="flex items-end justify-center p-2 ml-4 rounded-sm bg-blue-600 text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="flex items-end justify-center p-2 ml-4 rounded-sm bg-blue-600 text-white"
              onClick={handleLogin}
            >
              Guest Login
            </button>
            <button
              className="flex items-end justify-center p-2 ml-4 rounded-sm bg-white text-black"
              onClick={() => console.log("Signup Form")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}