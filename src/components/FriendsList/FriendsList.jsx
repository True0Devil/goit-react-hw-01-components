import { FriendListItem } from './FriendList_Item';
import { List } from './FriendList_Item.styled';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
