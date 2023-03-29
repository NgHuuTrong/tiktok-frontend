import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import { Link } from 'react-router-dom';

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
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
