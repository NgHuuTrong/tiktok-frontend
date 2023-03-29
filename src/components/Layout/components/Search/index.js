import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [clickInside, setClickInside] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleSearchChange = (e) => {
    if (!searchValue && e.target.value === ' ') return;
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResults([]);
    inputRef.current.focus();
  };

  const handleClickOutside = () => {
    setClickInside(false);
  };

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((response) => response.json())
      .then((res) => {
        setSearchResults(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);
  return (
    <HeadlessTippy
      interactive
      visible={clickInside && searchResults.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <span className={cx('accounts-span')}>Accounts</span>
            {searchResults.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleClickOutside}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          placeholder="Search accounts and videos"
          value={searchValue}
          onChange={handleSearchChange}
          spellCheck={false}
          onFocus={() => setClickInside(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear-btn')} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}
        {loading && <LoadingIcon className={cx('loading-icon')} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
