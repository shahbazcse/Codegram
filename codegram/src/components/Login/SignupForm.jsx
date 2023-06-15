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
      <h1 className="text-white font-bold text-2xl pt-0 p-4 items-center justify-center flex">
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
      </div>
    </>
  );
}
