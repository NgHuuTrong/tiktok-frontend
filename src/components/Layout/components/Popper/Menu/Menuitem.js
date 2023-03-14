import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  return (
    <Button leftIcon={item.icon} className={cx('menu-item')} to={item.to} onClick={onClick}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
