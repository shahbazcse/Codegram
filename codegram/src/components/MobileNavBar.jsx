import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import male from "../assets/avatars/male.png";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MovingIcon from "@mui/icons-material/Moving";

import { AuthContext } from "../contexts/AuthContext";
import { CreatePostModal } from "./Modals/PostModal/CreatePostModal";

export default function MobileNavBar() {
  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const [createModal, setCreateModal] = useState(false);

  const userAvatar = user.avatar ? user.avatar : male;

  return (
    <div className="flex gap-3 items-center sticky justify-evenly m-auto text-2xl">
      {createModal && <CreatePostModal setCreateModal={setCreateModal} />}
      <div onClick={() => navigate("/")}>
        <HomeIcon fontSize="large" />
      </div>
      <div onClick={() => navigate("/explore")}>
        <ExploreIcon fontSize="large" />
      </div>
      <div onClick={() => navigate("/trending")}>
        <MovingIcon fontSize="large" />
      </div>
      <div onClick={() => setCreateModal(true)}>
        <AddCircleIcon fontSize="large" />
      </div>
      <div onClick={() => navigate("/bookmarks")}>
        <BookmarksIcon fontSize="large" />
      </div>
      <div onClick={() => navigate("/liked")}>
        <FavoriteIcon fontSize="large" />
      </div>
      <Link to={`/profile/${user?.username}`}>
        <img src={userAvatar} alt="" className="flex h-10 w-10 rounded-full" />
      </Link>
    </div>
  );
}
