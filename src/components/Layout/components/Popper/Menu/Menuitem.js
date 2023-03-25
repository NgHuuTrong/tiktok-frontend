import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  const classes = cx('menu-item', {
    separate: item.separate,
  });
  return (
    <>
      <Button leftIcon={item.icon} className={classes} to={item.to} onClick={onClick}>
        <div>
          {item.title}
          {item.button}
        </div>
      </Button>
    </>
  );
}

export default MenuItem;
