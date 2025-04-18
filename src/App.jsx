import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardComp from './components/DashboardComp';
import Corporation from './pages/Corporation'
import Member from './pages/Member';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="home" element={<DashboardComp />} />
      <Route path="member" element={<Member />} />
      <Route path="corporation" element={<Corporation />} />
    </Route>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
