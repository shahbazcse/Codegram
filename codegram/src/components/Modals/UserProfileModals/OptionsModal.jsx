import styles from "../../Modals/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function OptionsModal({ setOptionsModal }) {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "setToken", payload: null });
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setOptionsModal(false)} />
      <div className={styles.centered}>
        <div className={`h-[198px] w-[312px] ${styles.modal}`}>
          <div className={`${styles.modalHeader}`}>
            <div className={styles.heading}>Account Options</div>
            <div
              onClick={() => setOptionsModal(false)}
              className="mx-4 bg-slate-700 cursor-pointer rounded-full"
            >
              <RiCloseLine className="text-3xl" />
            </div>
          </div>
          <div className="flex-col items-center justify-center m-2">
            <div
              onClick={() => navigate("/about")}
              className="flex items-center justify-center"
            >
              <div className="px-3 py-2 mb-2 bg-slate-900 rounded-full">
                <span className="text-2xl mx-4">About</span>
                <InfoOutlinedIcon fontSize="large" />
              </div>
            </div>
            <div
              onClick={() => handleLogout()}
              className="flex items-center justify-center text-red-600 py-2 px-2 rounded-full"
            >
              <div className="p-2 bg-slate-900 rounded-full">
                <span className="text-2xl mx-4">Logout</span>
                <LogoutIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
