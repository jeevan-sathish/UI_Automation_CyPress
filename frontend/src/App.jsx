import { useState } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit() {
    const res = await axios.post("http://127.0.0.1:5000/api/data", {
      text: text,
    });
    setMsg(res.data.message);
  }
  return (
    <div>
      <h1>api test case</h1>

      <input
        data-testid="username"
        type="text"
        placeholder="enter some text"
        name="test"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      <h1>{msg}</h1>
    </div>
  );
};

export default App;
