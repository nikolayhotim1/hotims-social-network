import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/computer-user-icon.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div className={style.user}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : userPhoto}
                            alt='My super avatar'
                            className={style.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => unfollow(user.id)}>
                            Unfollow
                        </button> :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => follow(user.id)}>
                            Follow
                        </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </span>
        </div>
    );
};

export default User;