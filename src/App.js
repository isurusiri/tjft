import React from "react";
import "./App.css";
import { TJFTTweet } from "./components/TJFTTweet";

function App() {
  const tweets = [
    "1298377943920517121",
    "1299006926047662080",
    "1299001225124474880",
    "1298998982845149186",
    "1298992386215837703",
    "1298956117230452739",
  ];
  return (
    <div className="App">
      <div>Tech Jobs from Twitter.</div>
      <div className="Jobs">
        {tweets.map((tweet) => (
          <TJFTTweet tweetId={tweet} key={tweet}></TJFTTweet>
        ))}
      </div>
    </div>
  );
}

export default App;
