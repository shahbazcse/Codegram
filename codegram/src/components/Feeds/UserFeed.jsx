import Post from "../Post";

export default function UserFeed({ userFeedPosts }) {
  const sortedPost = userFeedPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      {!sortedPost.length && (
        <div className="flex items-center justify-center h-[18rem] sm:h-0 sm:mt-[20rem] m-auto font-bold text-2xl">
          No Posts
        </div>
      )}
      {sortedPost.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
