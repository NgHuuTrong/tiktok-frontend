import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountWithTooltip.module.scss';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { TickIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function AccountWithTooltip({ data, tick = false, children, inHomeMenu = false, ...passProps }) {
  const handleNumber = (number) => {
    if (number > Math.pow(10, 9)) {
      return (number / Math.pow(10, 9)).toFixed(1) + 'B';
    } else if (number > Math.pow(10, 6)) {
      return (number / Math.pow(10, 6)).toFixed(1) + 'M';
    } else if (number > Math.pow(10, 3)) {
      return (number / Math.pow(10, 3)).toFixed(1) + 'K';
    }
    return number;
  };
  console.log(`${config.routes.profile}/${data.uniqueId || data.unique_id}`);
  return (
    <div>
      <HeadlessTippy
        // trigger="click"
        delay={[800, 0]}
        appendTo={() => document.body}
        offset={[-16, 0]}
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('tooltip-container')}>
              <div className={cx('header-container')}>
                <div className={cx('ava-container')}>
                  <Link to={`${config.routes.profile.split(':')[0]}@${data.uniqueId || data.unique_id}`}>
                    <Image
                      className={cx('avatar-img')}
                      src={data.avatarThumb || data.avatar_thumb.url_list[0]}
                      alt={data.nickname}
                      fallback={require('~/assets/images/no-avatar.jpeg')}
                    />
                  </Link>
                </div>
                <div>
                  <Button primary={!inHomeMenu} outline={inHomeMenu}>
                    Follow
                  </Button>
                </div>
              </div>

              <span className={cx('account-name')}>
                <Link to={`${config.routes.profile.split(':')[0]}@${data.uniqueId || data.unique_id}`}>
                  {data.uniqueId || data.unique_id}
                  {tick && <TickIcon className={cx('check-icon')} />}
                </Link>
              </span>

              <span className={cx('username')}>
                <Link to={`${config.routes.profile.split(':')[0]}@${data.uniqueId || data.unique_id}`}>
                  {data.nickname}
                </Link>
              </span>

              <div className={cx('detail-container')}>
                <span className={cx('detail-number')}>{handleNumber(data.follower_count)}</span>
                <span className={cx('detail-span')}>Followers</span>
                <span className={cx('detail-number')}>{handleNumber(data.total_favorited)}</span>
                <span className={cx('detail-span')}>Likes</span>
              </div>
              {inHomeMenu && <p className={cx('user-bio')}>{data.signature}</p>}
            </PopperWrapper>
          </div>
        )}
        {...passProps}
      >
        {children}
      </HeadlessTippy>
    </div>
  );
}

AccountWithTooltip.propTypes = {
  data: PropTypes.object.isRequired,
  tick: PropTypes.bool,
  inHomeMenu: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default AccountWithTooltip;
