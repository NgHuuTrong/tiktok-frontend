import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// import * as feedService from '~/services/feedService';
// import * as userInfoService from '~/services/userInfoService';
import styles from './HomeMenu.module.scss';

import fakeFeedAPI from '~/assets/json/fakeFeedAPI.json';
import VideoItem from '~/components/VideoItem/VideoItem';

const cx = classNames.bind(styles);

function HomeMenu() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    // const fetchFeedAPI = async () => {
    //   const results = await feedService.getFeed('VN');
    //   const fake = async (ele) => {
    //     const userInfo = await userInfoService.getUserInfo(ele.author.uid);
    //     return {
    //       ...userInfo,
    //       video: ele.video,
    //       statistics: ele.statistics,
    //       music: ele.music,
    //       desc: ele.desc,
    //       aweme_id: ele.aweme_id,
    //       text_extra: ele.text_extra,
    //     };
    //   };
    //   return Promise.all(results.aweme_list.map((ele) => fake(ele)));
    // };
    // fetchFeedAPI()
    //   .then((videosInfo) =>
    //     videosInfo.map((info) => {
    //       return {
    //         desc: info.desc,
    //         aweme_id: info.aweme_id,
    //         author: {
    //           uid: info.user.uid,
    //           avatar_thumb: info.user.avatar_thumb,
    //           follower_count: info.user.follower_count,
    //           following_count: info.user.following_count,
    //           nickname: info.user.nickname,
    //           unique_id: info.user.unique_id,
    //           signature: info.user.signature,
    //           total_favorited: info.user.total_favorited,
    //           custom_verify: info.user.custom_verify,
    //         },
    //         video: {
    //           url: info.video.play_addr.url_list[0],
    //           width: info.video.width,
    //           height: info.video.height,
    //         },
    //         statistics: {
    //           comment_count: info.statistics.comment_count,
    //           play_count: info.statistics.play_count,
    //           share_count: info.statistics.share_count,
    //           digg_count: info.statistics.digg_count,
    //         },
    //         music: {
    //           id: info.music.id,
    //           title: info.music.title,
    //           author: info.music.author,
    //         },
    //         text_extra: info.text_extra,
    //       };
    //     }),
    //   )
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    setFeedList(fakeFeedAPI);
  }, []);
  return (
    <main className={cx('wrapper')}>
      <div className={cx('home-container')}>
        {feedList.map((feed) => (
          <VideoItem key={feed.aweme_id} data={feed} />
        ))}
      </div>
    </main>
  );
}

export default HomeMenu;
