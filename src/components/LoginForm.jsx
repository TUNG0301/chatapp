import { useState } from 'react';
import axios from 'axios';

const projectID = '43bb1571-5b0e-4123-b7c7-0fdfe75e902d';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      // send request
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      // successfull
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      // reload page
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect userName or Password.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;
