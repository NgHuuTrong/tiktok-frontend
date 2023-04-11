import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import config from '~/config';
import styles from './LinkMenu.module.scss';

const cx = classNames.bind(styles);
function LinkMenu() {
  return (
    <>
      <div className={cx('link-container')}>
        <Link to={config.routes.about} className={cx('link-item')}>
          About
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Newsroom
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Contact
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Careers
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          ByteDance
        </Link>
      </div>
      <div className={cx('link-container')}>
        <Link to={config.routes.about} className={cx('link-item')}>
          TikTok for Good
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Advertise
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Developers
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Transparency
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          TikTok Rewards
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          TikTok Browse
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          TikTok Embeds
        </Link>
      </div>
      <div className={cx('link-container')}>
        <Link to={config.routes.about} className={cx('link-item')}>
          Help
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Safety
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Terms
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Privacy
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Creator Portal
        </Link>
        <Link to={config.routes.about} className={cx('link-item')}>
          Community Guidelines
        </Link>
      </div>
      <span className={cx('link-item', 'tiktok-span')}>© 2023 TikTok</span>
    </>
  );
}

export default LinkMenu;
