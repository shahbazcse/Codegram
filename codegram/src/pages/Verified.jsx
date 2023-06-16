import VerifiedIcon from "@mui/icons-material/Verified";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function Verified() {
  const [verifySuccess, setVerifySuccess] = useState(false);
  const { dispatch } = useContext(AppContext);
  const handleActivate = () => {
    dispatch({ type: "blueTick" });
    setVerifySuccess(true);
  };
  return (
    <div className="sticky top-0 text-center justify-between px-4 py-2">
      <h1 className="font-medium text-[20px]">Verify your account</h1>
      <div className="bg-[#16181C] rounded-[20px] text-white max-h-screen mt-4 px-4 py-4">
        <h1 className="text-[20px] font-medium mb-4 mt-4">
          Blue Checkmark is free for coders!
          <VerifiedIcon className="text-blue-500 ml-1" fontSize="large" />
        </h1>
        <div>
          <p className="text-start ml-3 mb-4">
            Consider it a special gift from us for your contributions and active
            presence on the platform.
          </p>
          <p className="my-8">
            Enjoy using Codegram and keep contributing to the coding community!
          </p>
          <p className="text-sm text-slate-300">
            Accept the{" "}
            <Link to="#" className="underline">
              T&C
            </Link>{" "}
            before activating your blue checkmark
          </p>
          <div className="text-[12px] text-start text-slate-300 mt-6 ml-4 mb-8">
            <input type="checkbox" className="mr-2" /> I accept the terms &
            conditions and I want to activate the blue checkmark for my account
          </div>
          <div onClick={handleActivate}>
            <Link className="px-12 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full">
              Activate
            </Link>
          </div>
          <div
            className={`${
              verifySuccess ? "visible" : "invisible"
            } flex items-center justify-center mt-4`}
          >
            <div>Your Blue Checkmark is Activated Now </div>
            <div className="">
              <iframe
                src="https://giphy.com/embed/Kg9JwOFEyoK75CzQSK"
                className="h-14 w-14 p-0 m-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
