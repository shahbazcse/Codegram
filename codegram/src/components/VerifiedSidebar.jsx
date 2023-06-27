import { Link } from "react-router-dom";

export default function VerifiedSidebar() {
  return (
    <div className="bg-[#16181C] rounded-[20px] text-white h-48 lg:h-40 mt-4 px-4 py-4">
      <h1 className="text-[20px] mb-3 text-start font-bold">Get Verified</h1>
      <p className="mb-6">Blue Checkmark is free for coders</p>
      <Link
        to="/verified"
        className="px-6 py-3 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full"
      >
        Get Verified
      </Link>
    </div>
  );
}
