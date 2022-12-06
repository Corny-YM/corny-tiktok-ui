import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

// Font Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    // faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
// Tippy search
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English 1',
                            },
                            {
                                code: 'vi',
                                title: 'English 2',
                            },
                        ],
                    },
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Do something
                break;
            default:
        }
    };

    // LOGGED => userMenu = [NEW LIST ITEMS + MENU_ITEMS]
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@corny',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO */}
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                {/* SEARCH */}
                <Search />

                {/* ACTIONS */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {/* BEGIN: CHILDREN */}
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://corny-ym.github.io/Corny_MP3/a_imgs/the%20search.jpg"
                                alt="Nguyen Van A"
                                fallback="https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s176-c-k-c0x00ffffff-no-rj"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                        {/* END: CHILDREN */}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
