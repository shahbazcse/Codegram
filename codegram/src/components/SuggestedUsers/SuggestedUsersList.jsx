export default function SuggestedUsersList() {
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
    <>
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
              <img
                src={dummyImg}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
                height="120px"
                width="120px"
              />
              <div className="flex flex-col grow -mt-0.5">
                <span className="text-sm">{user.fullName}</span>
                <span className="text-sm text-lightGrey -mt-1">
                  @{user.username}
                </span>
              </div>

              <button
                className="bg-white text-sm hover:bg-gray-300 text-black py-1 px-4 rounded-full"
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
    </>
  );
}
