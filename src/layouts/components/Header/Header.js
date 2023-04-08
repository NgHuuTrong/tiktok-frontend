import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/layouts/components/Popper/Menu';
import config from '~/config';

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
      type: 'language',
      title: 'Language',
      items: [
        {
          code: 'en',
          title: 'English',
        },
        {
          title: 'العربية',
        },
        {
          title: 'বাঙ্গালি (ভারত)',
        },
        {
          title: 'Cebuano (Pilipinas)',
        },
        {
          title: 'Čeština (Česká republika)',
        },
        {
          title: 'Deutsch',
        },
        {
          title: 'Ελληνικά (Ελλάδα)',
        },
        {
          title: 'Español',
        },
        {
          title: 'Suomi (Suomi)',
        },
        {
          title: 'Filipino (Pilipinas)',
        },
        {
          title: 'Français',
        },
        {
          title: 'עברית (ישראל)',
        },
        {
          title: 'हिंदी',
        },
        {
          title: 'Magyar (Magyarország)',
        },
        {
          title: 'Bahasa Indonesia (Indonesia)',
        },
        {
          title: 'Italiano (Italia)',
        },
        {
          title: '日本語（日本）',
        },
        {
          title: 'Basa Jawa (Indonesia)',
        },
        {
          title: 'ខ្មែរ (កម្ពុជា)',
        },
        {
          title: '한국어 (대한민국)',
        },
        {
          title: 'Bahasa Melayu (Malaysia)',
        },
        {
          title: 'မြန်မာ (မြန်မာ)',
        },
        {
          title: 'Nederlands (Nederland)',
        },
        {
          title: 'Polski (Polska)',
        },
        {
          title: 'Português (Brasil)',
        },
        {
          title: 'Română (Romania)',
        },
        {
          title: 'Русский (Россия)',
        },
        {
          title: 'Svenska (Sverige)',
        },
        {
          title: 'ไทย (ไทย)',
        },
        {
          title: 'Türkçe (Türkiye)',
        },
        {
          title: 'Українська (Україна)',
        },
        {
          title: 'اردو',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt (Việt Nam)',
        },
        {
          title: '简体中文',
        },
        {
          title: '繁體中文',
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
  const [userLogin, setUserLogin] = useState(true);
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
      separate: true,
    },
  ];

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
    switch (menuItem.title) {
      case 'Log out':
        setUserLogin(false);
        break;
      default:
        break;
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-left')}>
          <Link className={cx('logo-container')} to={config.routes.home}>
            <Image src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        {/* Search */}
        <Search />

        <div className={cx('action')}>
          <Button leftIcon={<UploadIcon />} basic to={config.routes.upload}>
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
              <Button primary onClick={() => setUserLogin(true)}>
                Log in
              </Button>
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
