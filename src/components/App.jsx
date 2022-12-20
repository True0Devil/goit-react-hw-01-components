import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import {}
import user from './Profile/user.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} />
    </>
  );
};
