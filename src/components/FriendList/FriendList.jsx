import FriendListItem from './FriendListItem.jsx';
import PropTypes from 'prop-types';

import s from './FriendList.module.css';

export default function FriendList({ friends }) {
 return (
  <ul className={s.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
 );
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};


