import UserFeed from "../components/Feeds/UserFeed";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Profile() {
  const {
    state: { isVerified },
  } = useContext(AppContext);
  return (
    <div className="">
      <div className="sticky top-0 bg-black text-center justify-between font-medium text-[20px] px-4 py-2">
        User Profile
      </div>
      <div className=" flex items-center justify-center m-4 mt-2 p-4 border-solid border-[1px] rounded-[8px] border-gray-400 text-white">
        <div className="text-[#d9d9d9] flex-col">
          <div className="flex mb-2 items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU"
              alt=""
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="items-center justify-center flex-col">
            <h4 className="font-bold flex items-center justify-center">
              {/*{session?.user?.name}*/}Shahbaz Ahmad
              {isVerified && (
                <VerifiedIcon
                  className="text-blue-500 ml-1"
                  fontSize="medium"
                />
              )}
            </h4>
            <p className="text-[#6e767d] flex items-center justify-center">
              {/*@{session?.user?.tag}*/}@shahbazahmad
            </p>
          </div>
          <div
            onClick={() => console.log("Edit Profile")}
            className="bg-blue-700 m-auto w-24 rounded-md p-1.5  mt-3 flex items-center justify-center cursor-pointer"
          >
            Edit Profile
          </div>
          <h1 className="m-2 font-bold">About</h1>
          <div className="bg-[#16181C] flex p-2 rounded-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            laborum.
          </div>
          <h1 className="m-2 font-bold">Link</h1>
          <div className="bg-[#16181C] text-red-600 hover:underline p-2 rounded-md m-auto flex items-center justify-center">
            <a href="#">portfolio.link</a>
          </div>
          <div className="flex p-2 mt-2 rounded-md text-center justify-evenly">
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">0</h4>
              <p className="text-white flex items-center justify-center">
                Following
              </p>
            </div>
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">2K</h4>
              <p className="text-white flex items-center justify-center">
                Posts
              </p>
            </div>
            <div className="items-center justify-center flex-col">
              <h4 className="font-bold flex items-center justify-center">
                37.3K
              </h4>
              <p className="text-white flex items-center justify-center">
                Followers
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-4 font-medium text-lg">Your Posts</h1>
      <UserFeed />
    </div>
  );
}
