import SuggestedUserNonMobile from "./SuggestedUsers/SuggestedUserNonMobile";
import SearchBar from "./SearchBar";

export default function RightSidebar() {
  return (
    <div className="hidden justify-end lg:block md:block md:mr-4 w-[350px] mt-2">
      <SearchBar/>
      <SuggestedUserNonMobile />
    </div>
  );
}
