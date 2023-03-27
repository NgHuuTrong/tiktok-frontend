import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('ava-container')}>
        <Image
          className={cx('avatar-img')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/66f48e4fc90bd60e2dccfbe462d64fe1~c5_300x300.webp?x-expires=1680051600&x-signature=%2Byb0QjAwwrjHbnx9VMDFepufrSA%3D"
          alt="avatar"
          fallback={require('~/assets/images/no-avatar.jpeg')}
        />
      </div>
      <div className={cx('info-container')}>
        <h4 className={cx('account-name')}>
          <span>lethikhanhhuyen2004</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>Lê Thị Khánh Huyền</p>
      </div>
    </div>
  );
}

export default AccountItem;
