import { tweetsData } from "./scrimba.js";
console.log(tweetsData)
let tweetinput=document.getElementById("tweet-input").value
const tweetbtn= document.getElementById("tweet-btn")
tweetbtn.addEventListener("click",tweet)
let run = document.getElementById("run")


function tweet(event) {
    event.preventDefault(); 
    const tweetinput = document.getElementById("tweet-input"); // Access input value here
    const text = tweetinput.value.trim(); 
    
    if (text) { 
        run.innerText = text; 
        addtext(text); 
        localStorage.setItem("notes",text)
        tweetinput.value = "";   

}
      
    else {
        alert("ENTER INPUT"); 
    }
}
function addtext(tweetit){
const textyou={
    handle: "@YourHandle", 
    profilePic: "images/scrimbalogo.png", 
    tweetText: tweetit,
    likes: 0,
    retweets: 0,
    replies: [],
}
tweetsData.unshift(textyou);
render(); 
}
function getFeedHtml(){
    let feedHtml = ``
    
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
`
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()


    