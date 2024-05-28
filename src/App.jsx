import "./css/App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("contacts");
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(users));
  }, [users]);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="container">
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addUser} />
        <SearchBox inputValue={inputValue} onChange={handleChange} />
        <ContactList users={visibleUsers} onDelete={deleteUser} />
      </div>
    </div>
  );
}

export default App;
