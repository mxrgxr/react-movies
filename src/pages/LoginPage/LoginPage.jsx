import { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(username);
  };

  const handleChange = (evt) => {
    setUsername(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}