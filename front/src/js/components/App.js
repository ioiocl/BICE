import React from "react";
import List from "./Indicators";
import Trade from "./Trade";
import Post from "./Risk";

const App = () => (
  <>
    <div>
      <h2>SMA</h2>
      <List />
      <Trade />
      <Post />
    </div>
  </>
);

export default App;
