import PropTypes from 'prop-types'; // thu vien prop-types cua create-react-app
import React from 'react';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

// import images from '~/assets/images';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {/* tick xanh */}
                    {data.tick && (
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    )}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
