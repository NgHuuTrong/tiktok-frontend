import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Layout/components/Popper/Menu';
import {
  DarkModeIcon,
  FeedbackIcon,
  GetCoinIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessagesIcon,
  MoreIcon,
  ProfileIcon,
  SettingsIcon,
  UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    title: 'English',
    icon: <LanguageIcon />,
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
        },
      ],
    },
  },
  {
    title: 'Feedback and help',
    icon: <FeedbackIcon />,
    to: './feedback',
  },
  {
    title: 'Keyboard shortcuts',
    icon: <KeyboardIcon />,
  },
  {
    title: 'Dark mode',
    icon: <DarkModeIcon />,
  },
];

function Header() {
  const userLogin = true;
  const userMenu = [
    {
      title: 'View profile',
      icon: <ProfileIcon />,
      to: './@profile',
    },
    {
      title: 'Get Coins',
      icon: <GetCoinIcon />,
      to: './coins',
    },
    {
      title: 'Settings',
      icon: <SettingsIcon />,
      to: './settings',
    },
    ...MENU_ITEMS,
    {
      title: 'Log out',
      icon: <LogoutIcon />,
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
            <Image src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        {/* Search */}
        <Search />

        <div className={cx('action')}>
          <Button leftIcon={<UploadIcon />} basic to="/upload">
            <span className={cx('upload-span')}>Upload</span>
          </Button>
          {userLogin ? (
            <>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn', 'messages-icon')}>
                  <MessagesIcon width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <span>
                    <InboxIcon />
                  </span>
                  <sup className={cx('badge')}>1</sup>
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
              <Image
                className={cx('user-ava')}
                src="https://vapa.vn/wp-content/uploads/2022/12/cac-hinh-cute-001-1.jpg"
                alt="user-avatar"
                fallback={require('~/assets/images/no-avatar.jpeg')}
              />
            ) : (
              <button className={cx('more-icon')}>
                <MoreIcon />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
