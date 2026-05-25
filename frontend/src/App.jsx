import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleSubmit() {
    setMessage(`this is ${data.name} this is ${data.password}`);
  }

  return (
    <div>
      <h1>UI Automation Login</h1>

      <input
        type="text"
        data-testid="username"
        placeholder="name"
        name="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        type="password"
        data-testid="password"
        placeholder="password"
        name="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit</button>

      <p>{message}</p>
    </div>
  );
};

export default App;
