import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import Button from '../Button/Button';
import { CommentIcon, LikeIcon, MusicTagIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
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
    <div className={cx('wrapper')}>
      <div className={cx('avatar-container')}>
        <Image alt={data.author.unique_id} src={data.author.avatar_thumb.url_list[0]} className={cx('avatar-img')} />
      </div>
      <div className={cx('info-container')}>
        <div className={cx('text-info-container')}>
          <div className={cx('author-container')}>
            <div className={cx('author-link')}>
              <h3 className={cx('author-title')}>{data.author.unique_id}</h3>
              <h4 className={cx('author-name')}>{data.author.nickname}</h4>
            </div>
          </div>
          <Button outline className={cx('follow-button')}>
            Follow
          </Button>
          <div className={cx('desc-container')}>
            <div className={cx('video-desc')}>{data.desc}</div>
          </div>
          <h4 className={cx('music-container')}>
            <MusicTagIcon className={cx('music-icon')} />
            <Link to="/" className={cx('music-title')}>
              {data.music.title}
            </Link>
          </h4>
        </div>

        <div className={cx('video-container')}>
          <div className={cx('video-card-container', 'portrait')}>
            <canvas width={data.video.width} height={data.video.height} className={cx('canvas-placeholder')} />
            <div className={cx('video-player-container')}>
              <video className={cx('video-player')} src={data.video.url} controls />
            </div>
          </div>

          <div className={cx('action-container')}>
            <button className={cx('action-button')}>
              <span className={cx('action-outline')}>
                <LikeIcon />
              </span>
              <strong className={cx('detail-count')}>{handleNumber(data.statistics.digg_count)}</strong>
            </button>
            <button className={cx('action-button')}>
              <span className={cx('action-outline')}>
                <CommentIcon />
              </span>
              <strong className={cx('detail-count')}>{handleNumber(data.statistics.comment_count)}</strong>
            </button>
            <button className={cx('action-button')}>
              <span className={cx('action-outline')}>
                <ShareIcon />
              </span>
              <strong className={cx('detail-count')}>{handleNumber(data.statistics.share_count)}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoItem;
