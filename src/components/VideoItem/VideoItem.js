import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './VideoItem.module.scss';
import Image from '~/components/Image';
import AccountWithTooltip from '../AccountWithTooltip';
import config from '~/config';
import TextInfo from './TextInfo';
import VideoCard from './VideoCard';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <AccountWithTooltip
        data={data.author}
        tick={data.author.custom_verify !== ''}
        placement="bottom-start"
        inHomeMenu
      >
        <Link
          to={`${config.routes.profile.split(':')[0]}@${data.author.uniqueId || data.author.unique_id}`}
          className={cx('avatar-container')}
        >
          <Image alt={data.author.unique_id} src={data.author.avatar_thumb.url_list[0]} className={cx('avatar-img')} />
        </Link>
      </AccountWithTooltip>
      <div className={cx('info-container')}>
        <TextInfo data={data} />

        <VideoCard data={data} />
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoItem;
