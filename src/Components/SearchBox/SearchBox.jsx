export default function SearchBox({ inputValue, onChange }) {
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
    </div>
  );
}
