import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { forwardRef } from 'react';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { TickIcon } from '../Icons';

const cx = classNames.bind(styles);

const AccountItem = forwardRef(({ data, tick = false, inSidebar = false }, ref) => {
  return (
    <Link ref={ref} to={`/user/${data.nickname}`} className={cx('wrapper', { sidebar: inSidebar })}>
      <div className={cx('ava-container')}>
        <Image
          className={cx('avatar-img')}
          src={data.avatarThumb || data.avatar_thumb.url_list[0]}
          alt={data.nickname}
          fallback={require('~/assets/images/no-avatar.jpeg')}
        />
      </div>
      <div className={cx('info-container')}>
        <h4 className={cx('account-name')}>
          <span>{data.uniqueId || data.unique_id}</span>
          {tick && <TickIcon className={cx('check-icon')} />}
        </h4>
        <p className={cx('username')}>{data.nickname}</p>
      </div>
    </Link>
  );
});

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
  tick: PropTypes.bool,
  inSidebar: PropTypes.bool,
};

export default AccountItem;
