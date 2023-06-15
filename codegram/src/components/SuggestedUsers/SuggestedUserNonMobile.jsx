import SuggestedUsersList from "./SuggestedUsersList";

export default function SuggestedUserNonMobile() {
  return (
    <div className="bg-[#16181C] rounded-[20px] text-white mt-4 px-4 py-4">
      <h1 className="text-[20px] font-medium mb-4 text-center">
        Suggested Users
      </h1>
      <SuggestedUsersList />
    </div>
  );
}
