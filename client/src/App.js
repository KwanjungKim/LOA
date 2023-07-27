import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect} from "react";
import NaviBar from './components/js/Navi_bar';
import Sidebar from './components/js/sidebar';
import Money_Calculator from './components/js/Money_Cal';


function App() {
  const callApi = async () => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data.test)
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
        <div className="App_Main">
            <Sidebar />
            <Money_Calculator />
        </div>
    </div>
  );
}

export default App;
