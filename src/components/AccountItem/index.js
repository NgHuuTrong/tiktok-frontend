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
        src="https://vapa.vn/wp-content/uploads/2022/12/cac-hinh-cute-001-1.jpg"
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
