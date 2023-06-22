import { useContext, useState } from "react";
import styles from "../../Modals/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { TbCameraPlus } from "react-icons/tb";
import { AuthContext } from "../../../contexts/AuthContext";
import { editUserProfile } from "../../../services/PostServices";
import AvatarModal from "./AvatarModal";

export default function EditProfileModal({
  setOpenModal,
  userDP,
  about,
  link,
}) {
  const [avatarModal, setAvatarModal] = useState(false);

  const [changeAvatar, setChangeAvatar] = useState(userDP);
  const [changeAbout, setChangeAbout] = useState(about);
  const [changeLink, setChangeLink] = useState(link);

  const {
    state: { token, user },
    dispatch,
  } = useContext(AuthContext);

  const handleSave = async () => {
    const data = {
      ...user,
      avatar: changeAvatar,
      about: changeAbout,
      portfolioURL: changeLink,
    };
    editUserProfile(token, data);
    dispatch({ type: "setUser", payload: data });
    setOpenModal(false);
  };
  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={`h-[412px] w-[512px] ${styles.modal}`}>
          <div className={styles.modalHeader}>
            <div className="flex justify-center items-center">
              <div
                onClick={() => setOpenModal(false)}
                className="mx-4 hover:bg-slate-700 cursor-pointer rounded-full"
              >
                <RiCloseLine className="text-3xl" />
              </div>
              <div className={styles.heading}>Edit Profile</div>
            </div>
            <div
              onClick={handleSave}
              className="py-1 px-4 bg-white text-black mr-4 hover:bg-slate-300 cursor-pointer rounded-full"
            >
              Save
            </div>
          </div>
          <div className="flex flex-col justify-center text-center p-8 mx-4 my-2 text-md gap-1">
            <div
              onClick={() => setAvatarModal(true)}
              className="flex mb-2 w-20 items-center m-auto justify-center rounded-full cursor-pointer container"
            >
              <img
                src={changeAvatar}
                alt=""
                className="flex h-20 w-20 rounded-full image"
              />
              <TbCameraPlus className="text-3xl middle ml-7 mt-7" />
            </div>
            {avatarModal && (
              <AvatarModal
                setAvatarModal={setAvatarModal}
                setChangeAvatar={setChangeAvatar}
                userDP={userDP}
              />
            )}
            <label className="flex text-slate-400">About</label>
            <input
              type="text"
              value={changeAbout}
              placeholder="Write something about yourself"
              className="flex mb-4 py-2 px-6 text-lg text-white rounded border border-slate-700 bg-black"
              onChange={(e) => setChangeAbout(e.target.value)}
            />
            <label className="flex text-slate-400">Link</label>
            <input
              type="text"
              value={changeLink}
              placeholder="Add your portfolio link"
              className="flex mb-4 py-2 px-6 text-lg text-white rounded border border-slate-700 bg-black"
              onChange={(e) => setChangeLink(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
