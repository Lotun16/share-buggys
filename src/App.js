import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateOutlet from './components/PrivateOutlet';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ForgotPassword from './views/ForgotPassword';
import UpdateProfile from './views/UpdateProfile';
import BugsPage from './views/BugsPage';
import AllBugsPage from './views/AllBugsPage';
import MyBugsPage from './views/MyBugsPage';
import CreateBugPost from './components/CreateBugPost';
import BugPostDetails from './views/BugPostDetails';
import MyBugDetails from './views/MyBugDetails';
import SideBar from './components/SideBar';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/bugs" element={<BugsPage />}/>
            <Route path="/bugs/:id" element={<MyBugDetails />}/>
            <Route path="/my-bugs" element={<MyBugsPage />}/>
            <Route path="/all-bugs" element={<AllBugsPage />}/>
            <Route path="/create-bug" element={<CreateBugPost />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/bugs-all/:id" element={<BugPostDetails />}/>
            <Route path="/update-profile" element={<UpdateProfile />}/>
            <Route path="/card" element={<ContactCard />}/>
            <Route exact path="/dashboard" element={<PrivateOutlet />}>
              <Route element={<Dashboard />} />
              {/* <Route element={<UpdateProfile />} /> */}
            </Route>
          </Routes>
        </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
