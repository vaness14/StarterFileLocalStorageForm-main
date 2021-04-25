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
    