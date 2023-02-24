import { useEffect } from 'react';
import { ChatroomClient } from './protos/ChatroomServiceClientPb';
import { JoinRequest } from './protos/chatroom_pb';
import { Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginPage from './pages/LoginPage';

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
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
        </Routes>
  );
}

export default App;
