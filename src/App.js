import './App.css';
import Home from './components/Home/Home'
import Payments from './components/Payments/Payments'
import Bills from './components/Bills/Bills'
import Services from './components/Services/Services'
import Tenants from './components/Tenants/Tenants'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EmployeeForm from './Pages/EmployeeForm';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/bills" element={<Bills/>}/>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/tenants" element={<Tenants/>}/>
          <Route path="/" element={<Home />}/>
          
          
        </Routes>
      </div>
      </Router>
    
  );
}

export default App;
