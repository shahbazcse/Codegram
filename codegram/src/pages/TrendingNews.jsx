import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { GoEye } from "react-icons/go";
var rn = require("random-number");

var randomNumber = {
  min: 0,
  max: 1000,
  integer: true,
};

export default function TrendingNews() {
  const {
    state: { trending },
  } = useContext(AppContext);

  return (
    <div>
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Trending News
      </div>
      {trending.map(
        ({ title, urlToImage, author, publishedAt, description }) => (
          <div key={title}>
            <div className="bg-slate-800 text-white m-4 p-4 rounded-md">
              <h1 className="text-lg font-bold">{title}</h1>
              <div className="m-2 my-3">
                <img src={urlToImage} alt="" className="h-42 w-42 rounded-md" />
                <div className="flex items-center justify-between text-slate-400 mt-2">
                  <div>{author}</div>
                  <div>{publishedAt}</div>
                </div>
              </div>
              <p className="my-2">
                {description}
                <Link
                  to="#"
                  className="ml-1 text-slate-400 hover:text-blue-600 underline"
                >
                  Read more
                </Link>
              </p>
              <div className="flex items-center justify-end text-sm mt-2">
                <GoEye className="mr-1" />
                <span>{rn(randomNumber)} views</span>
                <TrendingUpIcon className="ml-1 text-red-600" />
              </div>
            </div>
            <hr className="m-5" />
          </div>
        )
      )}
    </div>
  );
}
