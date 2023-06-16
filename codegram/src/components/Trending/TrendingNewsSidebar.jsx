import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MovingIcon from '@mui/icons-material/Moving';
import { GoEye } from "react-icons/go";
var rn = require("random-number");

var randomNumber = {
  min: 0,
  max: 1000,
  integer: true,
};

export default function TrendingNewsSidebar() {
  const {
    state: { trending },
  } = useContext(AppContext);
  return (
    <div className="bg-[#16181C] rounded-[20px] text-white mt-4 py-4">
      <h1 className="text-[20px] font-medium mb-4 m-auto text-center justify-center">
        Trending Topics <MovingIcon fontSize="large" />
      </h1>

      {trending.slice(0, 4).map(({ title, urlToImage }) => (
        <div key={title}>
          <div className="bg-black text-white mx-4 my-2 p-4 pb-2 rounded-md">
            <Link to="#" className="hover:text-blue-400 hover:underline">
              <div className="flex">
                <h1 className="text-[14px]">{title}</h1>
                <img
                  src={urlToImage}
                  alt=""
                  className="h-16 w-16 rounded-[20%]"
                />
              </div>
            </Link>
            <div className="flex items-center justify-start text-sm mt-2">
              <GoEye className="mr-1" />
              <span>{rn(randomNumber)} views</span>
              <TrendingUpIcon className="ml-1 text-red-600"/>
            </div>
          </div>
        </div>
      ))}

      <Link
        to="/trending"
        className="flex justify-end text-slate-400 hover:text-blue-600 underline pl-4 mr-4 text-sm"
      >
        See more
      </Link>
    </div>
  );
}
