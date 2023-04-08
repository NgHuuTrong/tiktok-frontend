import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
  const [fallback, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(customFallback);
  };

  return (
    <img
      className={cx('wrapper', className)}
      ref={ref}
      src={fallback || src}
      {...props}
      alt={alt}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
