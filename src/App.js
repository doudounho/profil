//import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
//import Profile from './components/profile';
import Address from './components/Address';
import FullName from './components/FullName';
import PhotoProfile from './components/PhotoProfile';



function App() {
  return (
    <div className="App">
      <PhotoProfile />
      <div className="App_info">
      <FullName/>
      <Address/>
      </div>
    </div>
  );
}

export default App;
