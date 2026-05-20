import React from "react";

const App = () => {
  const [message, setMessage] = React.useState("");

  function handleClick() {
    setMessage("Button was clicked!");
  }
  return (
    <div>
      <input type="text" placeholder="Enter text here..." />
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
