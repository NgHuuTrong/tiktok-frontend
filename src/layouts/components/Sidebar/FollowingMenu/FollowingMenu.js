import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './FollowingMenu.module.scss';
import AccountItem from '~/components/AccountItem/AccountItem';

const cx = classNames.bind(styles);

function FollowingMenu({ followingAccounts }) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div>
      {followingAccounts.length > 0 ? (
        seeMore ? (
          followingAccounts
            .slice(0, 15)
            .map((account) => (
              <AccountItem
                key={account.uid}
                data={account}
                inSidebar
                tick={account.follower_count >= Math.pow(10, 6) && account.total_favorited >= 10 * Math.pow(10, 6)}
              />
            ))
        ) : (
          followingAccounts
            .slice(0, 5)
            .map((account) => (
              <AccountItem
                key={account.uid}
                data={account}
                inSidebar
                tick={account.follower_count >= Math.pow(10, 6) && account.total_favorited >= 10 * Math.pow(10, 6)}
              />
            ))
        )
      ) : (
        <p className={cx('announce')}>Accounts you follow will appear hear</p>
      )}
      <button onClick={() => setSeeMore((prev) => !prev)} className={cx('see-button')}>
        {seeMore ? 'See less' : 'See more'}
      </button>
    </div>
  );
}

FollowingMenu.propTypes = {
  followingAccounts: PropTypes.arrayOf(PropTypes.object),
};
export default FollowingMenu;
