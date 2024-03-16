import css from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.disp}>
      <label htmlFor="search">Find contact by name</label>
      <input
        type="search"
        name="search"
        onChange={(e) => onFilter(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default SearchBox;
