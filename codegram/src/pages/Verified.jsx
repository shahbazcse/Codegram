import VerifiedIcon from "@mui/icons-material/Verified";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function Verified() {
  const {
    dispatch,
    state: { isVerified },
  } = useContext(AppContext);
  const handleActivate = () => {
    dispatch({ type: "blueTick" });
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
          <p className="text-sm mb-8 text-slate-300">
            By activating the blue checkmark, you're agreeing to accept the{" "}
            <Link to="#" className="underline">
              T&C
            </Link>{" "}
            of Codegram
          </p>
          <div onClick={handleActivate}>
            <Link
              className={`px-12 py-3 text-white ${
                isVerified ? "bg-green" : "bg-blue-600 hover:bg-blue-700"
              } rounded-full`}
            >
              {isVerified ? "Activated" : "Activate"}
            </Link>
          </div>
          <div
            className={`${
              isVerified ? "visible" : "invisible"
            } flex items-center justify-center mt-4`}
          >
            <div>Your Blue Checkmark is now activated</div>
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
