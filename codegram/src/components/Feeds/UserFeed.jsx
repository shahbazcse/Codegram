import Post from "../Post";

export default function UserFeed({userFeedPosts}) {

  const sortedPost = userFeedPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      {sortedPost.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
