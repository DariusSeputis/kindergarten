import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/villages/main/home/Home';
import LoginSignup from './components/villages/main/login_signup/LoginSignup';
import Header from './components/villages/header/Header';
import Vyturiukai from './components/villages/main/Vyturiukai/Vyturiukai';
import PhotoUploadForm from './components/UI/organisms/forms/PhotoUploadForm';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/loginSignup' element={<LoginSignup />}>
            <Route path='Vyturiukai' element={<Vyturiukai />} />
          </Route>
          <Route path='/uploadPhoto' element={<PhotoUploadForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
