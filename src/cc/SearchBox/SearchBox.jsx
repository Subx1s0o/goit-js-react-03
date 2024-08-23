import css from "./searchBox.module.css";

export default function SearchBox({ inputValue, onChange }) {
  return (
    <div>
      <label className={css.search} htmlFor="search">
        Search Your Contacts
        <input
          className={css.input}
          type="text"
          value={inputValue}
          id="search"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
