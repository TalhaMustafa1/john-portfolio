import './App.css';
import './index.css';
import  Navbar from './components/ui/Navbar.js';
import Hero from './components/ui/HeroSection.js';
import RecentPostsSection from './components/ui/RecentPostsSection.jsx';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <RecentPostsSection/>
    </div>
  );
}

export default App;
