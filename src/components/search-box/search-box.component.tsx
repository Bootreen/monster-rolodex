import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxProps) => (
  <input
    type='search'
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;