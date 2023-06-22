import SuggestedUserNonMobile from "./SuggestedUsers/SuggestedUserNonMobile";
import SearchBar from "./SearchBar";
import TrendingNewsSidebar from "./Trending/TrendingNewsSidebar";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import VerifiedSidebar from "./VerifiedSidebar";
import { AuthContext } from "../contexts/AuthContext";

export default function RightSidebar() {
  const {
    state: { user },
  } = useContext(AuthContext);
  const {
    state: { isVerified, allUsers },
  } = useContext(AppContext);
  return (
    <div className="hidden justify-end lg:block md:block md:mr-4 w-[350px] mt-2">
      <SearchBar />
      {!isVerified && <VerifiedSidebar />}
      {user?.following?.length !== allUsers.length - 1 && (
        <SuggestedUserNonMobile />
      )}
      <TrendingNewsSidebar />
    </div>
  );
}
