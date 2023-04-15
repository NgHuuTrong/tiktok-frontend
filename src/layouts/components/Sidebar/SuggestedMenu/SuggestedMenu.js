import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SuggestedMenu.module.scss';
import AccountWithTooltip from '~/components/AccountWithTooltip';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function SuggestedMenu({ suggestedAccounts }) {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <div>
      {suggestedAccounts.length > 0 ? (
        seeAll ? (
          suggestedAccounts.map((account) => (
            <AccountWithTooltip key={account.uid} data={account} tick={account.custom_verify !== ''}>
              <AccountItem data={account} inSidebar tick={account.custom_verify !== ''} />
            </AccountWithTooltip>
          ))
        ) : (
          suggestedAccounts.slice(0, 5).map((account) => (
            <AccountWithTooltip key={account.uid} data={account} tick={account.custom_verify !== ''}>
              <AccountItem data={account} inSidebar tick={account.custom_verify !== ''} />
            </AccountWithTooltip>
          ))
        )
      ) : (
        <p className={cx('announce')}>Suggested accounts will appear here</p>
      )}
      <button onClick={() => setSeeAll((prev) => !prev)} className={cx('see-button')}>
        {seeAll ? 'See less' : 'See all'}
      </button>
    </div>
  );
}

SuggestedMenu.propTypes = {
  suggestedAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SuggestedMenu;
