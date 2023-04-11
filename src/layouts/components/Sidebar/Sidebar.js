import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
  FollowingActiveIcon,
  FollowingIcon,
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
} from '~/components/Icons';
// import * as followingService from '~/services/followingService';
// import * as suggestService from '~/services/suggestService';
import AccountItem from '~/components/AccountItem/AccountItem';
import LinkMenu from './LinkMenu';

import fakeAPI from '~/assets/json/fakeUserAPI.json';
import AccountWithTooltip from '~/components/AccountWithTooltip/AccountWithTooltip';

const cx = classNames.bind(styles);

function Sidebar() {
  const [followings, setFollowings] = useState([]);
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    // const fetchFollowingAPI = async () => {
    //   const results = await followingService.getFollowing(process.env.REACT_APP_USER_ID);
    //   console.log(results);
    //   setFollowings(results.followings);
    //   const fake = results.followings.map((ele) => {
    //     return {
    //       uid: ele.uid,
    //       avatar_thumb: ele.avatar_thumb,
    //       follower_count: ele.follower_count,
    //       following_count: ele.following_count,
    //       nickname: ele.nickname,
    //       unique_id: ele.unique_id,
    //       signature: ele.signature,
    //       total_favorited: ele.total_favorited,
    //     };
    //   });
    //   console.log(fake);
    // };
    // fetchFollowingAPI();
    // const fetchSuggestAPI = async () => {
    //   const results = await suggestService.getSuggest(process.env.REACT_APP_USER_ID);
    //   console.log(results);
    //   setSuggested(results.user_list);
    // };
    // fetchSuggestAPI();

    const fetchFakeAPI = () => {
      setFollowings(fakeAPI);
      setSuggested(fakeAPI);
    };
    fetchFakeAPI();
  }, []);
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('sidebar-container')}>
        <Menu>
          <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<FollowingIcon />}
            activeIcon={<FollowingActiveIcon />}
          />
          <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>

        <div className={cx('category-container')}>
          <h2 className={cx('title')}>Suggested accounts</h2>
          {suggested && suggested.map((account) => <AccountWithTooltip key={account.uid} data={account} inSidebar />)}
        </div>

        <div className={cx('category-container')}>
          <h2 className={cx('title')}>Following accounts</h2>
          {followings && followings.map((account) => <AccountItem key={account.uid} data={account} inSidebar />)}
        </div>

        <div className={cx('category-container', 'discover-container')}>
          <h2 className={cx('title', 'discover-title')}>Discover</h2>
        </div>

        <div className={cx('category-container', 'support-container')}>
          <LinkMenu />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
