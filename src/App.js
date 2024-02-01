import './App.css';
import './index.css';
import  Navbar from './components/ui/Navbar.js';
import Hero from './components/ui/HeroSection.js';
import RecentPostsSection from './components/ui/RecentPostsSection.jsx';
import FeaturedWorkSection from './components/ui/FeaturedWorkSection.jsx';
import Footer from './components/ui/Footer.jsx';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <RecentPostsSection/>
        <FeaturedWorkSection/>
        <Footer/>
    </div>
  );
}

export default App;
