import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faA,
  faGear,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faMoon,
  faKeyboard,
  faCircleQuestion,
  faMessage,
  faEnvelopeOpen,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Layout/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    title: 'English',
    icon: <FontAwesomeIcon icon={faA} />,
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
    button: <button type="button" role="switch" aria-checked="false" className="mode-switch" />,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState('');
  const userLogin = true;
  const userMenu = [
    {
      title: 'View profile',
      icon: <FontAwesomeIcon icon={faUser} />,
      to: './@profile',
    },
    {
      title: 'Get Coins',
      icon: <FontAwesomeIcon icon={faTiktok} />,
      to: './coins',
    },
    {
      title: 'Settings',
      icon: <FontAwesomeIcon icon={faGear} />,
      to: './settings',
    },
    ...MENU_ITEMS,
    {
      title: 'Log out',
      icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
      to: './logout',
      separate: true,
    },
  ];

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-left')}>
          <Link className={cx('logo-container')} to="/">
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        <HeadlessTippy
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
        </HeadlessTippy>

        <div className={cx('action')}>
          <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} basic to="/upload">
            <span className={cx('upload-span')}>Upload</span>
          </Button>
          {userLogin ? (
            <>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon className={cx('message-icon')} icon={faEnvelopeOpen} />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon className={cx('inbox-icon')} icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={userLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {userLogin ? (
              <img
                className={cx('user-ava')}
                src="https://vapa.vn/wp-content/uploads/2022/12/cac-hinh-cute-001-1.jpg"
                alt="user-avatar"
              />
            ) : (
              <button className={cx('more-icon')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
