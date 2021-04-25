//variables
consttweetList = document.getElementById('tweet-list');


//Event Listeners
eventListeners();
functioneventListeners(){
    //form submission
document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet from the list
tweetList.addEventListener('click', removeTweet);


    //Document
document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}
