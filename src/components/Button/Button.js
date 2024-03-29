import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  leftIcon,
  rightIcon,
  primary = false,
  outline = false,
  basic = false,
  rounded = false,
  className,
  onClick,
  ...passProps
}) {
  let Component = 'button';

  const _props = {
    onClick,
    ...passProps,
  };

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    basic,
    rounded,
  });

  if (to) {
    _props.to = to;
    Component = Link;
  } else if (href) {
    _props.href = href;
    _props.target = 'blank';
    Component = 'a';
  }

  return (
    <Component className={classes} {..._props}>
      {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,

  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,

  primary: PropTypes.bool,
  outline: PropTypes.bool,
  basic: PropTypes.bool,
  rounded: PropTypes.bool,

  onClick: PropTypes.func,
};

export default Button;
