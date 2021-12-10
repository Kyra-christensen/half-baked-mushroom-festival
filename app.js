// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];


addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const friendName = friendInputEl.value;
    // create a new friend object
    const friend = {
        name: friendName,
        satisfaction: 0,
    };
   

    const defaultNameArray = [
        'Steve',
        'Alan',
        'Joy'
    ];

    if (friendInputEl.value === '') {
        const defaultNameFriend = getRandomItem(defaultNameArray);
        friend.name = defaultNameFriend;
        
    }
    // push it into the friends state array, passed in as an argument
    friendData.push(friend);
    // friendData.push(defaultName);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
    // this is a clickable list, so . . .
    //     add an event listener to each friend
        //         on click, go find the clicked friend in state    
        if (friend.satisfaction >= 0) {
            friendEl.addEventListener('click', () => {
                findFriendByName(friend.name, friendData);
                // and if the friend's satisfaction level is below 3 and you have mushrooms left
                if (friend.satisfaction < 3, mushroomCount > 0){
                // increment the friends satisfaction and decrement your mushrooms mushroomCount--;               
                    friend.satisfaction++;
                    mushroomCount--;
                }
                if (friend.satisfaction === 3) {
                    alert('Can not give ' + friend.name + ' anymore mushrooms!');
                }
                if (mushroomCount === 0) {
                    alert('No more mushrooms! Time to go hunting!');
                }
                // then display your friends and mushrooms with the updated state
                displayFriends();
                displayMushrooms();
            });    
        }
         // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
}


function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushrooms = renderMushroom();
        mushroomsEl.append(mushrooms);
    }
}

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

displayFriends();
displayMushrooms();