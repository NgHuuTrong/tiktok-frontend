import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TextInfo.module.scss';
import AccountWithTooltip from '~/components/AccountWithTooltip';
import config from '~/config';
import Button from '~/components/Button';
import { MusicTagIcon, TickIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function TextInfo({ data }) {
  const handleDesc = useCallback(() => {
    if (!data.text_extra.length) {
      return [
        {
          component: <span>{data.desc}</span>,
        },
      ];
    }
    let results = [];
    data.text_extra.forEach((ele, index, array) => {
      let a, b;
      !index ? (a = data.desc.substring(0, ele.start)) : (a = data.desc.substring(array[index - 1].end, ele.start));

      b = data.desc.substring(ele.start, ele.end);
      results.push({ component: <span>{a}</span> });
      results.push({
        component: (
          <Link>
            <strong className={cx('hashTag-strong')}>{b}</strong>
          </Link>
        ),
        type: 'Hashtag',
        id: ele.hashtag_id,
        name: ele.hashtag_name,
      });
      if (index === data.text_extra.length - 1) {
        results.push({ component: <span>{data.desc.substring(ele.end, data.desc.length)}</span> });
      }
    });
    return results;
  }, [data.desc, data.text_extra]);

  const convertedDesc = useMemo(() => handleDesc(), [handleDesc]);
  return (
    <div className={cx('text-info-container')}>
      <div className={cx('author-container')}>
        <AccountWithTooltip data={data.author} tick={data.author.custom_verify !== ''} offset={[0, 30]} inHomeMenu>
          <Link
            to={`${config.routes.profile.split(':')[0]}@${data.author.uniqueId || data.author.unique_id}`}
            className={cx('author-link')}
          >
            <h3 className={cx('author-title')}>
              {data.author.unique_id}
              {data.author.custom_verify !== '' && <TickIcon className={cx('tick-icon')} />}
            </h3>
            <h4 className={cx('author-name')}>{data.author.nickname}</h4>
          </Link>
        </AccountWithTooltip>
      </div>
      <Button outline className={cx('follow-button')}>
        Follow
      </Button>
      <div className={cx('desc-container')}>
        <div className={cx('video-desc')}>
          {convertedDesc.map((ele, index) => (
            <span key={index}>{ele.component}</span>
          ))}
        </div>
      </div>
      <h4 className={cx('music-container')}>
        <MusicTagIcon className={cx('music-icon')} />
        <Link
          to={`${config.routes.music.split(':')[0]}${data.music.title.replace(/ /g, '-')}-${data.music.id}`}
          className={cx('music-title')}
        >
          {data.music.title}
        </Link>
      </h4>
    </div>
  );
}

TextInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextInfo;
