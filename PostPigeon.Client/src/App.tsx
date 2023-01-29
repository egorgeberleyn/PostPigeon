import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { JoinRequest } from './protos/chatroom_pb';
import {ChatroomClient} from './protos/ChatroomServiceClientPb';

function App() {
  
  useEffect(() => {
    (async () => {
      const client = new ChatroomClient("http://localhost:8080");
      const req = new JoinRequest()
      req.setName("Egor")
      req.setAvatarUrl("just_url")
      client.join(req, {}, (err, resp) => {
        console.log(resp.toObject())
      })
    })();
    
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
