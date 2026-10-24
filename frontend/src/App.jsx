import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import TourPackages from './pages/TourPackages.jsx';
import MountTossa from './pages/MountTossa.jsx';
import MekdelaAmba from './pages/MekdelaAmba.jsx';
import GishenMariam from './pages/GishenMariam.jsx';
import LakeHayq from './pages/LakeHayq.jsx';
import TosaSucha from './pages/TosaSucha.jsx';
import BatiMarket from './pages/BatiMarket.jsx';
import WuchaleNature from './pages/WuchaleNature.jsx';
import GofMountainForest from './pages/GofMountainForest.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Events from './pages/Events.jsx';
import Destinations from './pages/Destinations.jsx';
import CulturalHeritage from './pages/CulturalHeritage.jsx';
import Contact from './pages/Contact.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Experiences from './pages/Experiences.jsx';

function App() {
  // የብራውዘሩን URL Path ማጣሪያ
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (currentPath === '/about') {
    return <About />;
  }
  if (currentPath === '/packages/mount-tossa') {
    return <MountTossa />;
  }
  if (currentPath === '/packages/mekdela-amba') {
    return <MekdelaAmba />;
  }
  if (currentPath === '/packages/gishen-mariam') {
    return <GishenMariam />;
  }
  if (currentPath === '/packages/lake-hayq') {
    return <LakeHayq />;
  }
  if (currentPath === '/packages/tosa-sucha') {
    return <TosaSucha />;
  }
  if (currentPath === '/packages/bati-market') {
    return <BatiMarket />;
  }
  if (currentPath === '/packages/wuchale-nature') {
    return <WuchaleNature />;
  }
  if (currentPath === '/packages/gof-mountain-forest') {
    return <GofMountainForest />;
  }
  if (currentPath === '/packages' || currentPath === '/tour-packages') {
    return <TourPackages />;
  }
  if (currentPath === '/login') {
    return <Login />;
  }
  if (currentPath === '/admin' || currentPath === '/admin/users') {
    if (localStorage.getItem('wollo-admin-session') !== 'true') {
      window.location.replace('/login');
      return null;
    }
    return <AdminDashboard initialMenu={currentPath === '/admin/users' ? 'Users' : 'Dashboard'} />;
  }
  if (currentPath === '/register') {
    return <Register />;
  }
  if (currentPath === '/events') {
    return <Events />;
  }
  if (currentPath === '/experiences') {
    return <Experiences />;
  }
  if (currentPath === '/destinations' || currentPath.startsWith('/destinations/')) {
    return <Destinations />;
  }
  if (currentPath === '/cultural-heritage') {
    return <CulturalHeritage />;
  }
  if (currentPath === '/contact') {
    return <Contact />;
  }

  // የመነሻ ገፅ (Default Home)
  return <Home />;
}

export default App;