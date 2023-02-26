import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Box } from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: React.FC  = () => {

  // useEffect(() => {
  //   (async () => {
  //     const client = new ChatroomClient("http://localhost:8080");
  //     const req = new JoinRequest()
  //     req.setName("Egor")
  //     req.setAvatarUrl("just_url")
  //     client.join(req, {}, (err, resp) => {
  //       console.log(resp.toObject())
  //     })
  //   })();
  // }, []);

  return (
    <Box>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </Box>
  );
}

export default App;
