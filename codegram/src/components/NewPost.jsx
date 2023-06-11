import { useState } from "react";

export default function NewPost() {
  const [textField, setTextField] = useState("");
  const loading = false;
  return (
    <div className={`mt-4 px-4 ${loading && "opacity-60"}`}>
      <div className="bg-[#16181C] flex gap-2 rounded-md py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
        <textarea
          className="bg-transparent w-[100%] outline-none text-md h-24 "
          type="text"
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
          placeholder="What's Happening?!"
        />
      </div>
      <button
        className="bg-blue-600 text-lg mt-2 py-1 px-4 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          console.log("Followed User");
        }}
      >
        Post
      </button>
    </div>
  );
}
