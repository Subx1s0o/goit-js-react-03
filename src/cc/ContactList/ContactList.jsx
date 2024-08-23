import Contact from "../Contact/Contact";
import css from "../ContactList/contactList.module.css";
export default function ContactList({ users, onDelete }) {
  return (
    <div>
      <ul className={css.userList}>
        {users.map((user) => {
          return <Contact userData={user} key={user.id} onDelete={onDelete} />;
        })}
      </ul>
    </div>
  );
}
