import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Main from './components/Main';
// import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      {/* <Nav/> */}
      {/* <Header/> */}
      <Main/>
      {/* <Footer/> */}
    </Router>
    </>
  );
}

export default App;