let friends = [];

function showFriends() {
    if(friends.length <= 0){
        console.log("You don't have any friend yet.");
    }else{
        console.log(friends);
    }
}

function addFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());

    if(checkFriend == true){
        console.log(`${name.toUpperCase()} is already on your friend list.`);
    }else{
        friends.push(name.toUpperCase());
        console.log(`You added ${name.toUpperCase()}.`);
    }
}

//Remove specific friend - using their name
function removeFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());

    if(checkFriend == true){
        let unfriend = friends.indexOf(name.toUpperCase());
        friends.splice(unfriend, 1);
        console.log(`You removed ${name.toUpperCase()}.`);
    }else{
        console.log(`${name.toUpperCase()} is not on your friend list.`);
    }
}