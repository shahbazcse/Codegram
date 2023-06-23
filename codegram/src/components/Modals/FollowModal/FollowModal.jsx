import styles from "../../Modals/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import FollowingList from "./FollowingList";
import FollowersList from "./FollowersList";

export default function FollowModal({ setFollowModal, type }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setFollowModal(false)} />
      <div className={styles.centered}>
        <div className={`h-[380px] w-[380px] ${styles.modal}`}>
          <div className={`${styles.modalHeader}`}>
            <div className={styles.heading}>{type}</div>
            <div
              onClick={() => setFollowModal(false)}
              className="mx-4 hover:bg-slate-700 cursor-pointer rounded-full"
            >
              <RiCloseLine className="text-3xl" />
            </div>
          </div>
          <div className="flex flex-col text-start p-2 mx-4 my-2 text-md gap-1">
            {type === "Following" ? (
              <FollowingList setFollowModal={setFollowModal} />
            ) : (
              <FollowersList setFollowModal={setFollowModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
