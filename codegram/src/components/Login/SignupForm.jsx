import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function SignupForm({ loginForm, setLoginForm }) {
  const [showPassword, setShowPassword] = useState(false);

  const { setIsLoggedIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleSignup = () => {
    console.log("Signup Form");
    setLoginForm(true);
  };
  return (
    <>
      <div class="relative bg-[#16181ce5] hover:bg-[#202329] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <h1 class="text-2xl font-semibold text-white">
            Create a new account!
          </h1>
          <form class="mt-8" action="" method="POST">
            <div class="relative flex m-4">
              <input
                id="email"
                name="email"
                type="text"
                class="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder="john@doe.com"
              />
              <span
                className="invisible text-slate-500 ml-2 my-2 mt-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                for="email"
                class="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Email
              </label>
            </div>
            <div class="mt-6 relative flex m-4">
              <input
                id="fname"
                name="fname"
                type="text"
                class="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder="john@doe.com"
              />
              <span className="invisible text-slate-500 ml-2 my-2 mt-4 cursor-pointer">
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                for="fname"
                class="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter First Name
              </label>
            </div>
            <div class="mt-6 relative flex m-4">
              <input
                id="lname"
                name="lname"
                type="text"
                class="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder="john@doe.com"
              />
              <span className="invisible text-slate-500 ml-2 my-2 mt-4 cursor-pointer">
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                for="lname"
                class="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Last Name
              </label>
            </div>
            <div class="mt-6 relative flex m-4">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                class="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
                placeholder="Password"
              />
              <span
                className="text-slate-500 ml-2 my-2 mt-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                for="password"
                class="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Password
              </label>
            </div>
            <div class="mt-6 relative flex m-4">
              <input
                id="confirmpassword"
                type={showPassword ? "text" : "password"}
                name="confirmpassword"
                class="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
                placeholder="Password"
              />
              <span
                className="text-slate-500 ml-2 my-2 mt-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                for="confirmpassword"
                class="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Confirm Password
              </label>
            </div>
          </form>
          <div className="flex mt-8 justify-center gap-10">
            <button
              className="flex p-2  rounded bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSignup}
            >
              Sign up
            </button>
            <button
              className="flex p-2 rounded bg-white hover:bg-slate-200 text-black"
              onClick={() => setLoginForm(true)}
            >
              Login?
            </button>
          </div>
        </div>
      </div>
      {/* <h1 className="text-white font-bold text-2xl pt-0 p-4 items-center justify-center flex">
        Sign up
      </h1>
      <hr className="pb-4" />
      <div className="flex-col items-center">
        <input
          type="text"
          className="flex p-2 m-4 rounded-sm"
          placeholder="Email"
        />
        <input
          type="text"
          className="flex p-2 m-4 rounded-sm"
          placeholder="First Name"
        />
        <input
          type="text"
          className="flex p-2 m-4 rounded-sm"
          placeholder="Last Name"
        />
        <div className="flex m-4">
          <input
            type={showPassword ? "text" : "password"}
            className="p-2 rounded-sm"
            placeholder="Password"
          />
          <span
            className="text-slate-500 ml-2 my-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </span>
        </div>
        <div className="flex m-4">
          <input
            type={showPassword ? "text" : "password"}
            className="p-2 rounded-sm"
            placeholder="Confirm Password"
          />
          <span
            className="text-slate-500 ml-2 my-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </span>
        </div>
        <div className="flex justify-evenly gap-3">
          <button
            className="flex p-2 rounded-sm bg-white text-black"
            onClick={handleSignup}
          >
            Sign up
          </button>
          <button
            className="flex p-2  rounded-sm bg-blue-600 text-white"
            onClick={() => setLoginForm(true)}
          >
            Login?
          </button>
        </div>
      </div> */}
    </>
  );
}
