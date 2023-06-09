import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <div>
      <hr />
      <h1>Left Sidebar</h1>
      <Link to="/home">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/bookmarks">Bookmarks</Link>
      <Link to="/liked">Liked Posts</Link>
      <hr />
    </div>
  );
}
