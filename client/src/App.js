
import './App.css';
import axios from "axios";
import {useEffect} from "react";
import Sidebar from './components/js/sidebar';
import Money_Calculator from './components/js/Money_Cal';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Raidpage from './components/js/raidpage';

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

            <Router >
                <Routes>
                    
                    <Route exact path="/" element={<Money_Calculator />} />
                    <Route exact path="/raid" element={<Raidpage />} />
                
                </Routes>
            </Router>
        </div>
    </div>
  );
}

export default App;
