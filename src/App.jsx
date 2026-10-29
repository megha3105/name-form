
import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
      setFullName("");
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
