import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer.component';
import Header from './components/Header.component';
import Router from './Router';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
