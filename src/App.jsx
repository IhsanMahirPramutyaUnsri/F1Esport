import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import Drivers from './pages/Drivers';
import DriverDetail from './pages/DriverDetail';
import History from './pages/History';
import Rules from './pages/Rules';
import Calendar from './pages/Calendar';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:slug" element={<TeamDetail />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/drivers/:slug" element={<DriverDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
