import { useContext, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser, signupUser } from "../../services/AuthService";
import { dummyFollowers } from "../../backend/db/dummyData";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ loginForm, setLoginForm }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    avatar: "",
    about: "",
    portfolioURL: "",
    isVerified: false,
    followers: [...dummyFollowers],
    following: [],
    bookmarks: [],
  });

  const handleSignup = async () => {
    signupUser(formData);

    const response = await loginUser(formData);

    if (response.user && response.token) {
      dispatch({ type: "setToken", payload: response.token });
      dispatch({ type: "setUser", payload: response.user });
    } else if (response.error) {
      dispatch({ type: "setError", payload: response.error });
    }
    navigate("/");
  };

  return (
    <>
      <div className="relative bg-[#16181ce5] hover:bg-[#202329] top-[50%] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <h1 className="text-2xl font-semibold text-white">
            Create a new account!
          </h1>
          <form className="mt-8" action="" method="POST">
            <div className="relative flex m-4">
              <input
                id="username"
                name="username"
                type="text"
                className="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder="john@doe.com"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
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
                htmlFor="username"
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Username
              </label>
            </div>
            <div className="mt-6 relative flex m-4">
              <input
                id="fname"
                name="fname"
                type="text"
                className="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder="john@doe.com"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <span className="invisible text-slate-500 ml-2 my-2 mt-4 cursor-pointer">
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                htmlFor="fname"
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter First Name
              </label>
            </div>
            <div className="mt-6 relative flex m-4">
              <input
                id="lname"
                name="lname"
                type="text"
                className="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder="john@doe.com"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <span className="invisible text-slate-500 ml-2 my-2 mt-4 cursor-pointer">
                {!showPassword ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </span>
              <label
                htmlFor="lname"
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Last Name
              </label>
            </div>
            <div className="mt-6 relative flex m-4">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Password
              </label>
            </div>
            <div className="mt-6 relative flex m-4">
              <input
                id="confirmpassword"
                type={showPassword ? "text" : "password"}
                name="confirmpassword"
                className="peer h-10 pl-2 mt-2 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
                placeholder="Password"
                onChange={(e) => setCheckPassword(e.target.value)}
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
                htmlFor="confirmpassword"
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Confirm Password
              </label>
            </div>
            <div
              className={`text-center ${
                checkPassword !== formData.password ? "visible" : "invisible"
              } text-red-200 text-[13px]`}
            >
              Password Unmatched
            </div>
          </form>
          <div className="flex mt-4 justify-center gap-10">
            <button
              className="flex p-2  rounded bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSignup}
              disabled={
                checkPassword !== formData.password || !formData.password.length
              }
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
