import './App.css';
// import Main from './Main';
import ClassParent from './Class';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';
import Sidenav from './Components/Sidenav/Sidenav';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px' }}>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1, marginTop: '20px', marginBottom: '20px' }}>
        <Sidenav />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;