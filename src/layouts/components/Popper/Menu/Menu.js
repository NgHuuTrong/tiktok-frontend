import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import MenuItem from './Menuitem';
import Header from './Header';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = 'false', onChange = () => {} }) {
  const [history, setHistory] = useState([{ items: items }]);
  const current = history[history.length - 1];
  useEffect(() => {
    setHistory([{ items: items }]);
  }, [items]);

  const renderItems = () => {
    return current.items.map((item, index) => {
      return (
        <MenuItem
          key={index}
          item={item}
          language={current.type === 'language'}
          onClick={() => {
            if (!!item.children) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, -1));
  };

  const renderMenu = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        {current.title && <Header title={current.title} onBack={handleBackMenu} />}
        <div className={cx('items-container')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  // Back to first menu
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 600]}
      hideOnClick={hideOnClick}
      interactive
      offset={[12, 11]}
      placement="bottom-end"
      render={renderMenu}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
