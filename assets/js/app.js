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
//Functions

functionnewTweet(e){
    e.preventDefault();
    
        //Read Textarea value
    const tweet = document.getElementById('tweet').value;
    
    
        //Create the remove button
    constremoveBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    
        //Create an <li> Element
    const li = document.createElement('li');
    li.textContent = tweet;
    
        //Add the remove button to each tweet
    li.appendChild(removeBtn);
    
        //Add to the list
    tweetList.appendChild(li);
    
        //Add to local storage
    addTweetLocalStorage(tweet);
    
        //Print the alert
    alert('Tweet Added');                                                          
    
    this.reset();
    
    }
    //Remove the tweets from the DOM
functionremoveTweet(e){
    if(e.target.classList.contains('remove-tweet')) {
    e.target.parentElement.remove();
        }
    
        //Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
    }
    //Add the tweets into the local storage
functionaddTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    
        //Add tweet into the array
    tweets.push(tweet);
    
        //Convert tweet array into sring
    localStorage.setItem('tweets', JSON.stringify(tweets));
    }
    functiongetTweetsFromStorage() {
    let tweets;
    consttweetsLS = localStorage.getItem('tweets');
    
        //Get the values, if null is returned then we create an empty array
    if(localStorage.getItem('tweets')=== null) {
    tweets = [];
        } else {
    tweets = JSON.parse(tweetsLS);
        }
    return tweets;
    }
    //Prints Local Storage tweets on Load
functionlocalStorageOnLoad() {
    let tweets = getTweetsFromStorage();
    
        //Loop throught storage and then Print the values
    tweets.forEach(function(tweet) {
    
        //Create the remove button
    constremoveBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    
        //Create an <li> Element
    const li = document.createElement('li');
    li.textContent = tweet;
    
        //Add the remove button to each tweet
    li.appendChild(removeBtn);
    
        //Add to the list
    tweetList.appendChild(li);
        });
    }
    
    
    