export default function SingleNews() {
  return (
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
        <p>{content}</p>
        <Link to="#" className="text-slate-400 hover:text-blue-600 underline">
          Read full story by {source.name}
        </Link>
      </div>
      <hr className="m-5" />
    </div>
  );
}
