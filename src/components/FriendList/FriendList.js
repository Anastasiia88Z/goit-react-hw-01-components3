import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
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

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
