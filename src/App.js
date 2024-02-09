import './App.css';
import Footer from './Components/Footer/Footer.js';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Sidebar from './Components/Sidebar/Sidebar.js';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
