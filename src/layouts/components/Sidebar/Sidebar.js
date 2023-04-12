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
import LinkMenu from './LinkMenu';
import SuggestedMenu from './SuggestedMenu';
import FollowingMenu from './FollowingMenu/FollowingMenu';
import DiscoverMenu from './DiscoverMenu/DiscoverMenu';

// import * as followingService from '~/services/followingService';
// import * as suggestService from '~/services/suggestService';
// import * as discoverService from '~/services/discoverService';
// import * as userInfoService from '~/services/userInfoService';

import fakeFollowingUserAPI from '~/assets/json/fakeFollowingUserAPI.json';
import fakeSuggestedAccountsAPI from '~/assets/json/fakeSuggestedAccountsAPI.json';
import fakeDiscoverAPI from '~/assets/json/fakeDiscoverAPI.json';

const cx = classNames.bind(styles);

function Sidebar() {
  const [followings, setFollowings] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [discover, setDiscover] = useState([]);

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
    //       custom_verify: ele.custom_verify,
    //     };
    //   });
    //   console.log('Following');
    //   console.log(fake);
    // };
    // fetchFollowingAPI();

    // const fetchSuggestAPI = async () => {
    //   const results = await suggestService.getSuggest('VN');
    //   // setSuggested(results.user_list);
    //   return Promise.all(results.user_list.slice(0, 20).map((ele) => userInfoService.getUserInfo(ele.user.uid)));
    // };
    // fetchSuggestAPI()
    //   .then((usersInfo) =>
    //     usersInfo.map((userInfo) => {
    //       return {
    //         uid: userInfo.user.uid,
    //         avatar_thumb: userInfo.user.avatar_thumb,
    //         follower_count: userInfo.user.follower_count,
    //         following_count: userInfo.user.following_count,
    //         nickname: userInfo.user.nickname,
    //         unique_id: userInfo.user.unique_id,
    //         signature: userInfo.user.signature,
    //         total_favorited: userInfo.user.total_favorited,
    //         custom_verify: userInfo.user.custom_verify,
    //       };
    //     }),
    //   )
    //   // Remove duplicated
    //   .then((data) =>
    //     data.filter((element, index) => {
    //       return data.indexOf(element) === index;
    //     }),
    //   )
    //   .then((data) => {
    //     console.log('Following');
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));

    // const fetchDiscoverAPI = async () => {
    //   const results = await discoverService.getDiscover('VN');
    //   setDiscover(results.category_list);
    //   const fake = results.category_list
    //     .filter((ele) => ele.desc === 'Trending hashtag' || ele.desc === 'Trending sound')
    //     .map((ele) => {
    //       if (ele.desc === 'Trending hashtag') {
    //         return {
    //           type: ele.desc,
    //           name: ele.challenge_info.cha_name,
    //           view_count: ele.challenge_info.view_count,
    //           user_count: ele.challenge_info.user_count,
    //           cid: ele.challenge_info.cid,
    //           desc: ele.challenge_info.desc,
    //         };
    //       }
    //       return {
    //         type: ele.desc,
    //         name: ele.music_info.title,
    //         user_count: ele.music_info.user_count,
    //         cid: ele.music_info.id_str,
    //         desc: ele.music_info.desc,
    //         author: ele.music_info.author,
    //         author_avatar: ele.music_info.cover_thumb.url_list[0],
    //         url: ele.music_info.play_url.url_list[0],
    //       };
    //     });
    //   console.log('Discover');
    //   console.log(fake);
    // };
    // fetchDiscoverAPI();
    const fetchFakeAPI = () => {
      setFollowings(fakeFollowingUserAPI);
      setSuggested(fakeSuggestedAccountsAPI);
      setDiscover(fakeDiscoverAPI);
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
          <SuggestedMenu suggestedAccounts={suggested} />
        </div>

        <div className={cx('category-container')}>
          <h2 className={cx('title')}>Following accounts</h2>
          <FollowingMenu followingAccounts={followings} />
        </div>

        <div className={cx('category-container', 'discover-container')}>
          <h2 className={cx('title', 'discover-title')}>Discover</h2>
          <DiscoverMenu discoverTags={discover} />
        </div>

        <div className={cx('category-container', 'support-container')}>
          <LinkMenu />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
