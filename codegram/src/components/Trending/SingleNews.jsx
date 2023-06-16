import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { GoEye } from "react-icons/go";

export default function SingleNews() {
  const { newsId } = useParams();

  const {
    state: { trending },
  } = useContext(AppContext);

  const news = trending.find(({ _id }) => _id === String(newsId));

  const {
    title,
    urlToImage,
    author,
    publishedAt,
    description,
    source,
    content,
    url,
    views,
  } = news;

  return (
    <div>
      <div>
        <div className="text-white m-4 p-4 rounded-md">
          <h1 className="text-lg font-bold">{title}</h1>
          <div className="flex justify-end text-slate-400 my-2">
            Date: {publishedAt}
          </div>
          <div className="m-2 my-3">
            <img src={urlToImage} alt="" className="h-42 w-42 rounded-md" />
            <div className="flex items-center justify-between text-slate-400 mt-2 mb-4">
              <div className="mt-2">by {author}</div>
              <div className="flex items-center justify-end text-sm mt-2">
                <GoEye className="mr-1" />
                <span>{views}K views</span>
                <TrendingUpIcon className="ml-1 text-red-600" />
              </div>
            </div>
          </div>
          <p className="my-2">{description}</p>
          <div className="my-8">
            <p>
              {content} {content} {content} {content}
              {content} {content} {content} {content}
            </p>
          </div>

          <Link
            to={url}
            target="_blank"
            className="flex justify-center text-black hover:underline"
          >
            <div className="p-2 px-3 bg-blue-600 rounded-full">
              Read full story on <strong>{source.name}</strong>
              <ArrowOutwardIcon
                fontSize="medium"
                className="ml-1 mb-1 items-center justify-center"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
