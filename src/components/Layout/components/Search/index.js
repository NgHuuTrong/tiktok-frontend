import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [clickInside, setClickInside] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleSearchChange = (e) => {
    let searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResults([]);
    inputRef.current.focus();
  };

  const handleClickOutside = () => {
    setClickInside(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    inputRef.current.blur();
    setClickInside(false);
  };

  useEffect(() => {
    if (!debounced) {
      setSearchResults([]);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);
      const results = await searchService.search(debounced, 'less');
      setSearchResults(results);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);
  return (
    //Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order. Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
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
          <button className={cx('search-btn')} onMouseDown={handleMouseDown}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
