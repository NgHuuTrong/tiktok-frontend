import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar-img')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68aadb8359fa5d12f9e22574bdc412a1~c5_300x300.webp?x-expires=1678546800&x-signature=du4vdBA9bNq2YDBmDyAmvMecsfI%3D"
        alt="avatar"
      />
      <div className={cx('info-container')}>
        <h4 className={cx('account-name')}>
          <span>lethikhanhhuyen2004</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>Lê Thị Khánh Huyền dgndisj giofedjg iojdfiojgiof djgoshduighudshufedhvs</p>
      </div>
    </div>
  );
}

export default AccountItem;
