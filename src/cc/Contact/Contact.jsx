import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./contact.module.css";
export default function Contact({ userData: { name, number, id }, onDelete }) {
  return (
    <li className={css.userData}>
      <ul>
        <li className={css.userDataLi}>
          <div>
            <FaUser />
          </div>
          {name}
        </li>
        <li className={css.userDataLi}>
          <div>
            <BsFillTelephoneFill />
          </div>
          {number}
        </li>
      </ul>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
