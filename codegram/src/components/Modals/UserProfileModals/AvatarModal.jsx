import styles from "../../Modals/Modal.module.css";
// import male from "../../../assets/avatars/batman.png";
// import batman from "../../../assets/avatars/batman.png";
// import boy1 from "../../../assets/avatars/boy1.png";
// import boy2 from "../../../assets/avatars/boy2.png";
// import girl1 from "../../../assets/avatars/girl1.png";
// import man1 from "../../../assets/avatars/man1.png";
// import man2 from "../../../assets/avatars/man2.png";
// import man3 from "../../../assets/avatars/man3.png";
// import man4 from "../../../assets/avatars/man4.png";
// import woman1 from "../../../assets/avatars/woman1.png";
// import woman2 from "../../../assets/avatars/woman2.png";
// import woman3 from "../../../assets/avatars/woman3.png";
// import woman4 from "../../../assets/avatars/woman4.png";
// import woman5 from "../../../assets/avatars/woman5.png";
import { BsCheckLg } from "react-icons/bs";
import { avatars } from "../../../backend/db/avatars";

export default function AvatarModal({
  setAvatarModal,
  setChangeAvatar,
  userDP,
}) {
  const handleSelect = (e) => {
    setChangeAvatar(e.target.value);
    console.log(e.target.value);
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
                    value={avatar}
                    onClick={(e) => handleSelect(e)}
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
