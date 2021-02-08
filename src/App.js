
import './App.css';
import Routes from './Routes';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div id="app" className="App" class="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
