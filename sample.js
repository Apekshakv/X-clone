import { tweetsData } from "./scrimba.js"; 


const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");


tweetBtn.addEventListener("click", tweet);

function tweet(event) {
    event.preventDefault(); 
    const tweetText = tweetInput.value.trim(); 
    
    if (tweetText) {
        addTweetToFeed(tweetText);
        tweetInput.value = ''; 
        updateStorage();
    } else {
        alert("Please enter a tweet.");
    }
}

function addTweetToFeed(tweetText) {
    const newTweet = {
        handle: "@YourHandle", 
        profilePic: "images/scrimbalogo.png", 
        tweetText: tweetText,
        likes: 4,
        retweets: 1,
        replies: [],
    };
    
    tweetsData.unshift(newTweet); 
    render(); 
}

function getFeedHtml(){
    let feedHtml = ``;
    
    tweetsData.forEach(function(tweet){
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet"></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`;
    });
    return feedHtml;
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHtml();
}

function showTweets() {
    const storedTweets = localStorage.getItem("tweetsData");
    if (storedTweets) {
        const loadedTweets = JSON.parse(storedTweets);
        tweetsData.length = 0;
        tweetsData.push(...loadedTweets);
    }
    render();
}

function updateStorage() {
    localStorage.setItem("tweetsData", JSON.stringify(tweetsData));
}

showTweets();

render()