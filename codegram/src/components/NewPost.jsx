import { useState } from "react";

export default function NewPost() {
  const [textField, setTextField] = useState("");
  const loading = false;
  return (
    <div className={`mt-4 flex flex-col gap-2 px-4 ${loading && "opacity-60"}`}>
      <div className="bg-[#16181C] flex gap-2 rounded-md py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
        {/* Change input to textarea */}
        <input
          className="grow resize-none bg-transparent w-[100%] outline-none text-[16px] h-24 "
          type="text"
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
          placeholder="What's Happening?!"
        />
      </div>
      <div className="ml-auto flex items-center gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-lg mt-2 py-1 px-4 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Created Post:", textField);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
