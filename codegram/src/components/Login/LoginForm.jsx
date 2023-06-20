import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../../services/AuthService";

export default function LoginForm({ loginForm, setLoginForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { dispatch } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await loginUser(formData);

    if (response.user && response.token) {
      dispatch({ type: "setToken", payload: response.token });
      dispatch({ type: "setUser", payload: response.user });
    } else if (response.error) {
      dispatch({ type: "setError", payload: response.error });
    }

    navigate(location?.state?.from?.pathname);
  };
  return (
    <>
      {/* <h1 className="text-white font-bold text-2xl pt-0 p-4 items-center justify-center flex">
        Login
      </h1>
      <hr className="pb-4" /> */}

      <div className="relative bg-[#16181ce5] hover:bg-[#202329] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <h1 className="text-2xl font-semibold text-white">Welcome back!</h1>
          <form className="mt-12" action="" method="POST">
            <div className="relative flex m-4">
              <input
                id="email"
                name="email"
                type="text"
                value={formData.username}
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
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:pl-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              >
                Enter Email
              </label>
            </div>
            <div className="mt-6 relative flex m-4">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
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
          </form>
          <div className="flex mt-8 justify-evenly gap-3">
            <button
              className="flex p-2  rounded bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleLogin}
              disabled={!formData.username.length || !formData.username.length}
            >
              Login
            </button>
            <button
              className="flex p-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setFormData({
                ...formData,
                username: "shahbazcse",
                password: "shahbaz123",
              })}
            >
              Guest Login?
            </button>
            <button
              className="flex p-2 rounded bg-white hover:bg-slate-200 text-black"
              onClick={() => setLoginForm(false)}
            >
              Sign up?
            </button>
          </div>
          <a
            href="#"
            className="mt-6 block text-sm text-center font-medium text-sky-600 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {" "}
            Forgot your password?{" "}
          </a>
        </div>
      </div>

      {/* <div className="flex-col items-center">
        <input
          type="text"
          className="flex p-2 m-4 rounded-sm"
          placeholder="Email"
        />
        <div className="flex m-4">
          <input
            type={showPassword ? "text" : "password"}
            className="p-2 rounded-sm"
            aria-hidden
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
        <div className="flex justify-evenly gap-3">
          <button
            className="flex p-2  rounded-sm bg-blue-600 text-white"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="flex p-2 rounded-sm bg-blue-600 text-white"
            onClick={handleLogin}
          >
            Guest Login?
          </button>
          <button
            className="flex p-2 rounded-sm bg-white text-black"
            onClick={() => setLoginForm(false)}
          >
            Sign up?
          </button>
        </div>
      </div> */}
    </>
  );
}
