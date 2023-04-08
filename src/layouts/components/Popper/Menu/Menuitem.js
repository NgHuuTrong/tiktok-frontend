import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  language: PropTypes.bool,
};

export default MenuItem;
