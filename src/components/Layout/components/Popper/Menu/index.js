import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import MenuItem from './Menuitem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} item={item} />);
  };

  return (
    <Tippy
      delay={[0, 600]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
