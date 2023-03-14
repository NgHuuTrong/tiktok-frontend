import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faEllipsisVertical, faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faKeyboard, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Layout/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    title: 'English',
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
      title: 'Language',
      items: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          children: {
            title: 'Language1',
            items: [
              {
                code: 'en',
                title: 'English1',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt1',
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'Feedback and help',
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: './feedback',
  },
  {
    title: 'Keyboard shortcuts',
    icon: <FontAwesomeIcon icon={faKeyboard} />,
  },
  {
    title: 'Dark mode',
    icon: <FontAwesomeIcon icon={faMoon} />,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState('');

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

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
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} basic to="/upload">
            <span className={cx('upload-span')}>Upload</span>
          </Button>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('more-icon')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
