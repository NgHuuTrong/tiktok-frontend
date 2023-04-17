import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './VideoCard.module.scss';

const cx = classNames.bind(styles);

function ActionButton({ icon, detailCount }) {
  return (
    <button className={cx('action-button')}>
      <span className={cx('action-outline')}>{icon}</span>
      <strong className={cx('detail-count')}>{detailCount}</strong>
    </button>
  );
}

ActionButton.propTypes = {
  icon: PropTypes.node,
  detailCount: PropTypes.node,
};

export default memo(ActionButton);
