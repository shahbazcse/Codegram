import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { GoEye } from "react-icons/go";

export default function TrendingNewsSidebar() {
  const {
    state: { trending },
  } = useContext(AppContext);
  return (
    <div className="bg-[#16181C] rounded-[20px] text-white mt-4 py-4">
      <h1 className="text-[20px] font-medium mb-4 m-auto text-center justify-center">
        Trending News <MovingIcon fontSize="large" />
      </h1>

      {trending.slice(0, 4).map(({ _id, title, urlToImage, views }) => (
        <div key={_id}>
          <div className="hover:bg-gray-800 text-white mx-4 my-2 p-4 pb-2 rounded-[20px]">
            <Link to={`/trending/${_id}`}>
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
              <span>{views}K views</span>
              <TrendingUpIcon className="ml-1 text-red-600" />
            </div>
          </div>
        </div>
      ))}

      <Link
        to="/trending"
        className="flex justify-start text-blue-400 hover:underline pl-4 ml-4 text-[15px]"
      >
        See more
      </Link>
    </div>
  );
}
