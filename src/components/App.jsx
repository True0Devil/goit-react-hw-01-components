import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { Transactions } from './Transactions/Transactions';
import transactions from './Transactions/transactionsHistory.json';
import user from './Profile/user.json';
import friends from './FriendsList/friends.json';

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
      <FriendsList friends={friends} />
      <Transactions data={transactions} />
    </>
  );
};
