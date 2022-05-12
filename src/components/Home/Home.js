import * as React from 'react';
import './Home.css';
import Stack from '@mui/material/Stack';
import homeLogo from '../../assets/home.png';
import paymentsLogo from '../../assets/credit-card.png';
import billsLogo from '../../assets/bill.png';
import servicesLogo from '../../assets/support.png';
import tenantsLogo from '../../assets/tenant.png';
import EmployeeForm from '../../Pages/EmployeeForm'
import {useNavigate} from "react-router-dom";

function Home() {
  let navigate = useNavigate();
    return (
        <div className='a'>
          <div className='b'>
          <Stack className='stk' spacing={2}>
          
            
            <div onClick={()=>{
              navigate("/")
            }}  className="homeContainer">
            <img id='homeLogoId' src={homeLogo}   alt="fireSpot"/>
            <label id='home'>HOME</label> 
             </div>
          
          
             <div  onClick={()=>{
              navigate("/payments")
            }}>
            <img  id='paymentsLogoId' src={paymentsLogo}   alt="fireSpot"/>
            <label id='payment'>PAYMENTS</label>
             </div>
             
             <div onClick={()=>{
              navigate("/bills")
            }}>
            <img id='billsLogoId' src={billsLogo}   alt="fireSpot"/>
            <label id='bills'>BILLS</label>
             </div>
             
             <div onClick={()=>{
              navigate("/services")
            }}>
            <img id='servicesLogoId' src={servicesLogo}   alt="fireSpot"/>
            <label id='services'>SERVICES</label>
             </div>

             <div onClick={()=>{
              navigate("/tenants")
            }}>
            <img id='tenantsLogoId' src={tenantsLogo}   alt="fireSpot"/>
            <label id='tenants'>TENANTS</label>
             </div>
 
          </Stack>
          </div>
          <div className='c'>
          <EmployeeForm />
          </div>
          
        </div>
       
  );
}

export default Home;
