import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState('');

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-left')}>
          <Button to="/">
            <img src={images.logo} alt="Tiktok" />
          </Button>
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
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
        >
          <div className={cx('search')}>
            <input
              placeholder="Search accounts and videos"
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
              spellCheck={false}
            />
            {/* <button>
              <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
            </button> */}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button basic to="/upload">
            <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
            <span className={cx('upload-span')}>Upload</span>
          </Button>
          <Button primary>Log in</Button>
          <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
        </div>
      </div>
    </header>
  );
}

export default Header;
