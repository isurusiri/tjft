import React from "react";
import "./App.css";
import { Tweet } from "react-twitter-widgets";

function App() {
  return (
    <div className="App">
      <div>Tech Jobs from Twitter.</div>
      <div className="Jobs">
        <div style={{ padding: 10 }}>
          <Tweet
            tweetId="1298377943920517121"
            options={{ width: "800" }}
          ></Tweet>
        </div>
        <div style={{ padding: 10 }}>
          <Tweet
            tweetId="1299006926047662080"
            options={{ width: "800" }}
          ></Tweet>
        </div>
        <div style={{ padding: 10 }}>
          <Tweet
            tweetId="1299001225124474880"
            options={{ width: "800" }}
          ></Tweet>
        </div>
        <div style={{ padding: 10 }}>
          <Tweet
            tweetId="1298998982845149186"
            options={{ width: "800" }}
          ></Tweet>
        </div>
        <div style={{ padding: 10 }}>
          <Tweet
            tweetId="1298992386215837703"
            options={{ width: "800" }}
          ></Tweet>
        </div>
        <div style={{ padding: 10 }}>
          <Tweet
            tweetId="1298956117230452739"
            options={{ width: "800" }}
          ></Tweet>
        </div>
      </div>
    </div>
  );
}

export default App;
