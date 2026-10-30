
import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setFullName("");
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <h2>Full Name: {fullName}</h2>
      )}
    </div>
  );
}

export default App;
