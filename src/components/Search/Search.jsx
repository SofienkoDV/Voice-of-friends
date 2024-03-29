import { useCallback, useRef, useState, useMemo } from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";

const Search = ({ setSearchValue = null }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current?.focus();
  };

  const debouncedSetSearchValue = useMemo(
    () => debounce((nextValue) => setSearchValue(nextValue), 500),
    [setSearchValue]
  );

  const updateSearchValue = useCallback(
    (nextValue) => debouncedSetSearchValue(nextValue),
    [debouncedSetSearchValue]
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 512 512">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Знайти користувачів"
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.iconClear}
          viewBox="0 0 320 512"
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      )}
    </div>
  );
};
export default Search;
