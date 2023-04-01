import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick, language = false }) {
  const classes = cx('menu-item', {
    separate: item.separate,
    language,
  });
  return (
    <>
      <Button leftIcon={item.icon} className={classes} to={item.to} onClick={onClick}>
        <div>{item.title}</div>
      </Button>
    </>
  );
}

export default MenuItem;
