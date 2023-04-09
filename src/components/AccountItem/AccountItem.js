import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { TickIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem({ data, tick }) {
  return (
    <Link to={`/user/${data.nickname}`} className={cx('wrapper')}>
      <div className={cx('ava-container')}>
        <Image
          className={cx('avatar-img')}
          src={data.avatarThumb}
          alt={data.nickname}
          fallback={require('~/assets/images/no-avatar.jpeg')}
        />
      </div>
      <div className={cx('info-container')}>
        <h4 className={cx('account-name')}>
          <span>{data.uniqueId}</span>
          {tick && <TickIcon className={cx('check-icon')} />}
        </h4>
        <p className={cx('username')}>{data.nickname}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
