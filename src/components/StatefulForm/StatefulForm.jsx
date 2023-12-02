import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("rojoni");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("pass must be 6 characters or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
          id=""
        />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StatefulForm;
