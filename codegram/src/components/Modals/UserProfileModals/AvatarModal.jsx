import styles from "../../Modals/Modal.module.css";
import { BsCheckLg } from "react-icons/bs";
import { avatars } from "../../../backend/db/avatars";

export default function AvatarModal({
  setAvatarModal,
  setChangeAvatar,
  userDP,
}) {
  const handleSelect = (avatar) => {
    setChangeAvatar(avatar);
    setAvatarModal(false);
  };

  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={`h-[380px] w-[312px] ${styles.modal}`}>
          <div className={`${styles.modalHeader}`}>
            <div className={styles.heading}>Choose avatar</div>
            <div
              onClick={() => setAvatarModal(false)}
              className="mx-3 bg-white text-black py-1 px-2 hover:bg-red-500 cursor-pointer rounded-full"
            >
              Cancel
            </div>
          </div>
          <div className="flex flex-wrap">
            {avatars.map(
              (avatar) =>
                avatar !== userDP && (
                  <div
                    key={avatar}
                    onClick={() => handleSelect(avatar)}
                    className="flex mb-2 w-20 rounded-full mx-[12px] mt-2 justify-center items-center cursor-pointer container"
                  >
                    <img
                      src={avatar}
                      alt=""
                      className="flex h-16 w-16 rounded-full image border-[1px] border-slate-300 bg-white"
                    />
                    <BsCheckLg className="text-3xl middle ml-7 mt-7" />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
