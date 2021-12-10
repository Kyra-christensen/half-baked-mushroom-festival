export function findFriendByName(name, friendData) {
    // iterate through the friends
    for (let friend of friendData) {
        if (friend.name === name) {
            return friend;
        }
    }
    // when you find a friend with the correct name, return that friend
}