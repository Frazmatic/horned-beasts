import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

let title = 'Lab 01 Horned Beast App';
let author = 'Joshua Frazer';

function App() {
  return (
    <div className="App">
      <Header title={title}/>
      <Main />
      <Footer author={author}/>
    </div>
  );
}

export default App;
