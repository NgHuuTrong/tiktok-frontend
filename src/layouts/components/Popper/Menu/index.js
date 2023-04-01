import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import MenuItem from './Menuitem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = 'false', onChange = () => {} }) {
  const [history, setHistory] = useState([{ items: items }]);
  const current = history[history.length - 1];

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

  return (
    <Tippy
      delay={[0, 600]}
      hideOnClick={hideOnClick}
      interactive
      offset={[12, 11]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {current.title && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, -1));
                }}
              />
            )}
            <div className={cx('items-container')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
