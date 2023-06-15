export default function SuggestedUserMobile() {
  const filteredUsers = [
    { _id: 1, fullName: "John Doe", username: "john" },
    { _id: 2, fullName: "Tony Stark", username: "tony" },
    { _id: 3, fullName: "Steve Rogers", username: "steve" },
    { _id: 4, fullName: "Bruce Wayne", username: "bruce" },
    { _id: 5, fullName: "Loki", username: "loki" },
  ];
  const dummyImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9Vu2kHRkEn3qBiH1szO1Qbxt4sP59Lt66Zu-O8tqpxqysYKfeyraCeAC1L0nLonfRjA&usqp=CAU";
  return (
    <div className="md:hidden flex-col bg-[#25272ec2] p-2 m-4 mb-0 h-64 flex gap-3 rounded-md">
      <div className="text-[20px] font-bold text-center">Suggested Users</div>
      <div className="flex gap-3">
        {filteredUsers.length ? (
          <div className="flex gap-2">
            {filteredUsers.map((user) => (
              <div
                className="flex flex-col justify-center items-center gap-2 cursor-pointer p-3 mx-auto border-solid rounded-[20px] bg-black h-48 w-36"
                key={user._id}
                onClick={() => {
                  console.log("Open User Profile");
                }}
              >
                <img
                  src={dummyImg}
                  alt=""
                  className="h-16 w-16 mt-2 rounded-full object-cover"
                  height="120px"
                  width="120px"
                />
                <div className="flex flex-col items-center grow -mt-0.5">
                  <span className="text-sm mt-2">{user.fullName}</span>
                  <span className="text-sm text-lightGrey -mt-1">
                    @{user.username}
                  </span>
                  <button
                    className="bg-blue-600 text-sm mt-3 py-1 px-4 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Followed User");
                    }}
                  >
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
