import SearchIcon from "@mui/icons-material/Search";

export default function RightSidebar() {
  const filteredUsers = [
    { _id: 1, fullName: "John Doe", username: "john" },
    { _id: 2, fullName: "Tony Stark", username: "tony" },
    { _id: 3, fullName: "Steve Rogers", username: "steve" },
    { _id: 4, fullName: "Bruce Wayne", username: "bruce" },
    { _id: 5, fullName: "Loki", username: "loki" },
  ];

  const dummyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU";

  return (
    <div className="hidden justify-end lg:block w-[350px] mt-2">
      <div className="bg-[#16181C] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
        <SearchIcon />
        <input
          className="bg-transparent w-[100%] outline-none"
          type="text"
          placeholder="Search User"
        />
      </div>

      <div className="bg-[#16181C] rounded-[20px] text-white mt-4 px-4 py-4">
        <h1 className="text-[20px] font-medium mb-4 text-center">Suggested Users</h1>

        {filteredUsers.length ? (
          <div>
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="flex items-start gap-2 cursor-pointer p-3"
                onClick={() => {
                  console.log("Open User Profile");
                }}
              >
                <img src={dummyImg} alt="" className='h-8 w-8 rounded-full object-cover' height="120px" width="120px" />
                <div className="flex flex-col grow -mt-0.5">
                  <span className="text-sm">{user.fullName}</span>
                  <span className="text-sm text-lightGrey -mt-1">
                    @{user.username}
                  </span>
                </div>

                <button
                  className="bg-blue-600 text-sm py-1 px-4 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Followed User");
                  }}
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}