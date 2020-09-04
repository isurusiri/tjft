import React from "react";
import { Tweet } from "react-twitter-widgets";

export class TJFTTweet extends React.Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <Tweet tweetId={this.props.tweetId} options={{ width: "800" }}></Tweet>
      </div>
    );
  }
}
