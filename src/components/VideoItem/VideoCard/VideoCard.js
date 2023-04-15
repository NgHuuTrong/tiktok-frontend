import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './VideoCard.module.scss';
import { CommentIcon, LikeIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoCard({ data }) {
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
  );
}

VideoCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoCard;
