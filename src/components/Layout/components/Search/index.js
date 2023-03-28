import { useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('1');
  const [clickInside, setClickInside] = useState(true);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleClickOutside = () => {
    setClickInside(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={clickInside && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <span className={cx('accounts-span')}>Accounts</span>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
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
          onChange={(e) => setSearchValue(e.target.value)}
          spellCheck={false}
          onFocus={() => setClickInside(true)}
        />
        {!!searchValue && (
          <button className={cx('clear-btn')} onClick={handleClear}>
            <ClearIcon class />
          </button>
        )}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
