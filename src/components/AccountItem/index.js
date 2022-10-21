import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t31.18172-8/18423226_1318478271582021_7827753074935535642_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=IuiVA0E9mKoAX8BUEGM&tn=9ChhlcaCdpbvDFpu&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-GDIbwgNuFdD771837gyP04TMRJ-Nx9SKqV_sMkNM6dg&oe=63767A5A"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
};

export default AccountItem;
