import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    // history = [{data: [{}, {}, {}]}]
    // current = {data: [...]}
    // current.data = [...]
    // console.log(history); // Array: khoi tao la mang 1 phan tu
    // console.log(current); // Object: data hien tai
    // console.log(current.data);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // convert to boolean
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prevHistory) => [...prevHistory, item.children]);
                            document.body.classList.add(cx('lock-scroll'));
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page - MENU
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
        document.body.classList.remove(cx('lock-scroll'));
    };

    // Back to prev page - MENU
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
        document.body.classList.remove(cx('lock-scroll'));
    };

    return (
        <Tippy
            // visible
            interactive={true}
            delay={[0, 500]}
            offset={[12, 10]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
