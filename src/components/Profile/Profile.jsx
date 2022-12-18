import {
  ProfileWrapper,
  ProfileImg,
  Description,
  ProfileName,
  ProfileInfo,
  Stats,
  StatListItem,
  StatsLabel,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </Description>

      <Stats>
        <StatListItem>
          <StatsLabel>Followers</StatsLabel>
          <span className="quantity">{followers}</span>
        </StatListItem>
        <StatListItem>
          <StatsLabel>Views</StatsLabel>
          <span className="quantity">{views}</span>
        </StatListItem>
        <StatListItem>
          <StatsLabel>Likes</StatsLabel>
          <span className="quantity">{likes}</span>
        </StatListItem>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
