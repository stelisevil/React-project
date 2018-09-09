import React from 'react';
import axios from 'axios';
import authToken from './auth';
import DisplayTweet from './components/DisplayTweet';

axios.defaults.headers.common['Authorization'] = authToken;

class TwitterDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      tweets: []
    };
    this.queryTwitterApi = this.queryTwitterApi.bind(this);
  }

  // `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonNumber}/`

  queryTwitterApi() {
    this.setState({ loading: true });
    axios.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa').then((response) => {
      console.log(response.data.statuses);
      this.setState({ loading: false, tweets: response.data.statuses })
    });
  }

  render() {
    const { loading, tweets } = this.state;
    const displayTweets = tweets.map((tweet, i) => {
      return (
        <DisplayTweet
          key={i}
          tweet={tweet.text}
          tweetId={tweet.id_str}
          retweets={tweet.retweet_count}
          favorites={tweet.favorite_count}
          username={tweet.user.name}
          screenName={tweet.user.screen_name}
          urls={tweet.entities.urls}
        />
      )
    })

    return (
      <React.Fragment>
        <p>Twitter Dashboard{loading && ' - Loading...'}</p>
        <input value="nasa"/>
        <button onClick={this.queryTwitterApi}>
          Query Twitter
        </button>
        {displayTweets}
      </React.Fragment>
    )
  }
}

export default TwitterDashboard;
