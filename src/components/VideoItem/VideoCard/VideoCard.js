import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './VideoCard.module.scss';
import { CommentIcon, LikeIcon, MutedIcon, PauseIcon, PlayIcon, ShareIcon, UnmutedIcon } from '~/components/Icons';
import ActionButton from './ActionButton';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useVideoPlayer } from '~/hooks';

const cx = classNames.bind(styles);

function VideoCard({ data }) {
  const convertCount = useCallback((number) => {
    if (number > Math.pow(10, 9)) {
      return (number / Math.pow(10, 9)).toFixed(1) + 'B';
    } else if (number > Math.pow(10, 6)) {
      return (number / Math.pow(10, 6)).toFixed(1) + 'M';
    } else if (number > Math.pow(10, 3)) {
      return (number / Math.pow(10, 3)).toFixed(1) + 'K';
    }
    return number;
  }, []);

  const videoElement = useRef(null);
  const videoPlayer = useVideoPlayer(videoElement);

  // Avoid render action button again when video is playing
  const likeIcon = useMemo(() => <LikeIcon />, []);
  const shareIcon = useMemo(() => <ShareIcon />, []);
  const commentIcon = useMemo(() => <CommentIcon />, []);

  const convertTime = (time) => {
    const intMinute = Math.floor(time / 60);
    const intSecond = Math.floor(time) - intMinute * 60;
    return `${intMinute < 10 ? 0 : ''}${intMinute}:${intSecond < 10 ? 0 : ''}${intSecond}`;
  };

  const convertedDuration = useMemo(() => {
    return videoElement.current
      ? convertTime((videoPlayer.playerState.progress * videoElement.current.duration) / 100) +
          '/' +
          convertTime(videoElement.current.duration)
      : '00:00/--:--';
  }, [videoPlayer.playerState.progress]);

  const progressRef = useRef();
  useEffect(() => {
    progressRef.current.style.setProperty('--progress', videoPlayer.playerState.progress + '%');
  }, [videoPlayer.playerState.progress]);

  return (
    <div className={cx('video-container')}>
      <div
        className={cx('video-card-container', {
          portrait: data.video.height > data.video.width,
          landscape: data.video.height <= data.video.width,
        })}
      >
        <canvas
          width={(data.video.width / data.video.height) * 100}
          height={100}
          className={cx('canvas-placeholder')}
        />
        <div className={cx('video-player-container')}>
          <video
            ref={videoElement}
            className={cx('video-player')}
            src={data.video.url}
            onTimeUpdate={videoPlayer.handleOnTimeUpdate}
          />
          <button className={cx('play-button')} onClick={videoPlayer.togglePlay}>
            {videoPlayer.playerState.isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className={cx('volume-container')}>
            <button
              className={cx('volume-button', { hide: videoPlayer.playerState.isMuted })}
              onClick={videoPlayer.toggleMuted}
            >
              {videoPlayer.playerState.isMuted ? <UnmutedIcon /> : <MutedIcon />}
            </button>
          </div>
          <div className={cx('progress-container')}>
            <div className={cx('bar-container')}>
              <input
                ref={progressRef}
                type="range"
                min="0"
                max="100"
                value={videoPlayer.playerState.progress}
                onChange={(e) => videoPlayer.handleVideoProgress(e)}
                className={cx('input-progress')}
              />
            </div>
            <div className={cx('time-container')}>{convertedDuration}</div>
          </div>
        </div>
      </div>

      <div className={cx('action-container')}>
        <ActionButton icon={likeIcon} detailCount={convertCount(data.statistics.digg_count)} />
        <ActionButton icon={commentIcon} detailCount={convertCount(data.statistics.comment_count)} />
        <ActionButton icon={shareIcon} detailCount={convertCount(data.statistics.share_count)} />
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoCard;
