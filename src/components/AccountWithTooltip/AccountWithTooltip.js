import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';

import styles from './AccountWithTooltip.module.scss';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { TickIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountWithTooltip({ data, tick = false, inSidebar = false }) {
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
                  <Image
                    className={cx('avatar-img')}
                    src={data.avatarThumb || data.avatar_thumb.url_list[0]}
                    alt={data.nickname}
                    fallback={require('~/assets/images/no-avatar.jpeg')}
                  />
                </div>
                <div>
                  <Button primary>Follow</Button>
                </div>
              </div>

              <Link to="/" target="_blank">
                <span className={cx('account-name')}>{data.uniqueId || data.unique_id}</span>
                {tick && <TickIcon className={cx('check-icon')} />}
              </Link>
              <p className={cx('username')}>{data.nickname}</p>

              <div className={cx('detail-container')}>
                <span className={cx('detail-number')}>{handleNumber(data.follower_count)}</span>
                <span className={cx('detail-span')}>Followers</span>
                <span className={cx('detail-number')}>{handleNumber(data.total_favorited)}</span>
                <span className={cx('detail-span')}>Likes</span>
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        <AccountItem data={data} tick={tick} inSidebar={inSidebar} />
      </HeadlessTippy>
    </div>
  );
}

AccountWithTooltip.propTypes = {
  data: PropTypes.object.isRequired,
  tick: PropTypes.bool,
  inSidebar: PropTypes.bool,
};

export default AccountWithTooltip;
