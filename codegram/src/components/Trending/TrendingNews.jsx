import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

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
              <h1>{title}</h1>
              <div>
                <img src={urlToImage} alt="" />
              </div>
              <p>
                {author} | {publishedAt}
              </p>
              <p>{description}</p>
              <Link
                to="#"
                className="text-slate-400 hover:text-blue-600 underline"
              >
                Read more
              </Link>
            </div>
            <hr className="m-5" />
          </div>
        )
      )}
    </div>
  );
}
