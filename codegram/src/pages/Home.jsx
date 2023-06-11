import Feed from "../components/Feed";

export default function Home() {
    const loading = false;
  return (
    <div>
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        Home
      </div>

      <div className={`mt-4 px-4 ${loading && "opacity-60"}`}>
        <div className="grid grid-cols-[48px,1fr] gap-4">
          <div className="w-[90%]">
            <input
              className="w-[100%] bg-transparent outline-none text-[20px]"
              rows="2"
              placeholder="What's Happening?"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Feed />
    </div>
  );
}
