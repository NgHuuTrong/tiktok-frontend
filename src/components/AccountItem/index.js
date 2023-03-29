import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { TickIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/user/${data.nickname}`} className={cx('wrapper')}>
      <div className={cx('ava-container')}>
        <Image
          className={cx('avatar-img')}
          src={data.avatar}
          alt={data.full_name}
          fallback={require('~/assets/images/no-avatar.jpeg')}
        />
      </div>
      <div className={cx('info-container')}>
        <h4 className={cx('account-name')}>
          <span>{data.nickname}</span>
          {data.tick && <TickIcon className={cx('check-icon')} />}
        </h4>
        <p className={cx('username')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
