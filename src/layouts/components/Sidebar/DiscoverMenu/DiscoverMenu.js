import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './DiscoverMenu.module.scss';
import { HashtagIcon, MusicTagIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function DiscoverMenu({ discoverTags }) {
  return (
    <div>
      {discoverTags.length > 0 ? (
        discoverTags.map((tag) => (
          <div key={tag.cid} className={cx('discover-list')}>
            <Link className={cx('discover-item')}>
              {tag.type === 'Trending hashtag' ? <HashtagIcon /> : <MusicTagIcon />}
              <p className={cx('tag-name')}>{tag.name}</p>
            </Link>
          </div>
        ))
      ) : (
        <p className={cx('announce')}>Discover Tags will appear here</p>
      )}
    </div>
  );
}

DiscoverMenu.propTypes = {
  discoverTags: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default DiscoverMenu;
