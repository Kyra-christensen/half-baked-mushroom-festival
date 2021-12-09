export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const container = document.createElement('div');
    const pName = document.createElement('p');
    const pFace = document.createElement('p');
    // add friend, name, and emoji classes to the appropriate elements
    container.classList.add('friend');
    pName.classList.add('friendName');
    pFace.classList.add('friendFace');
    // put the friend's name in the nameEl
    pName.textContent = friend.name;
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    pFace.textContent = friend.satisfaction === 3 ? '😁' : friend.satisfaction === 2 ? '🙂' : friend.satisfaction === 1 ? '😐' : '☹️';

    // append the emojiEl and nameEl to the outer div
    container.append(pName, pFace);
    // return the outer div
    return container;
}