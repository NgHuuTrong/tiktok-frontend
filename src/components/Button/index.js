import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
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
      {children}
    </Component>
  );
}

export default Button;
