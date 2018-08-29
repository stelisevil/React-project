import React from 'react';
import './style.css';
import retweet from './images/retweet.png';
import heart from './images/heart.png';

class DisplayTweet extends React.Component {
  render() {
    const { tweet, tweetId, retweets, favorites, username, screenName, urls } = this.props;

    /*
      issue here is that this wont work if there is more than one link in a
      tweet but until i see an API response with more that one link in, I
      won't know how to code the logic
    */
    const newTweet = (urls.length) ? (
      urls.map((link, i) => {
        const str1 = tweet.substring(0, link.indices[0])
        const str2 = tweet.substring(link.indices[1])
        return (
          <p>
            {str1}<a href={link.url}>{link.url}</a>{str2}
          </p>
        );
      })
    ) : (
      <p>
        {tweet}
      </p>
    );

    return (
      <React.Fragment>
        <div className="tweet-container">
          {newTweet}
        </div>
        <div className="buttons-container">
          <p>
            <a href={"https://www.twitter.com/" + screenName + "/status/" + tweetId} >
              <img alt="Twitter Retweet" src={retweet} className="buttons retweet" />
            </a>
            {retweets}
            <a href={"https://www.twitter.com/" + screenName + "/status/" + tweetId} >
              <img alt= "Twitter Heart" src={heart} className="buttons heart" />
            </a>
            {favorites}
          </p>
        </div>
        <div className="username-container">
          <p>
            <a href={"http://www.twitter.com/" + screenName}>{username}</a>
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default DisplayTweet;
