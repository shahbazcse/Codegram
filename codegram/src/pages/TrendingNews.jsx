import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { GoEye } from "react-icons/go";

export default function TrendingNews() {
  const {
    state: { trending },
  } = useContext(AppContext);

  return (
    <div>
      <div className="sm:sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Trending News
      </div>
      {!trending.length && (
        <div className="flex items-center justify-center h-[18rem] sm:h-0 sm:mt-[20rem] m-auto font-bold text-2xl">
          No News To Show
        </div>
      )}
      {trending.map(
        ({
          _id,
          title,
          urlToImage,
          author,
          publishedAt,
          description,
          views,
        }) => (
          <div key={_id}>
            <div className="bg-slate-800 text-white m-4 p-4 rounded-md">
              <Link to={`/trending/${_id}`} className="hover:underline">
                <h1 className="text-lg font-bold">{title}</h1>
              </Link>
              <div className="flex justify-end text-slate-400 my-2">
                Date: {publishedAt}
              </div>
              <div className="m-2 my-3">
                <img src={urlToImage} alt="" className="h-42 w-42 rounded-md" />
                <div className="flex items-center justify-between text-slate-400 mt-2">
                  <div className="mt-2">by {author}</div>
                  <div className="flex items-center justify-end text-sm mt-2">
                    <GoEye className="mr-1" />
                    <span>{views}K views</span>
                    <TrendingUpIcon className="ml-1 text-red-600" />
                  </div>
                </div>
              </div>
              <p className="my-2">
                {description}
                <Link
                  to={`/trending/${_id}`}
                  className="ml-1 text-slate-400 hover:text-blue-600 underline"
                >
                  Read more
                </Link>
              </p>
            </div>
            <hr className="m-5" />
          </div>
        )
      )}
    </div>
  );
}
