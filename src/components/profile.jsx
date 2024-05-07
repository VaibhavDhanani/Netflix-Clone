import React, { useState } from "react";
import "./profile.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard'; 
import GppGoodIcon from '@mui/icons-material/GppGood';
import DevicesIcon from '@mui/icons-material/Devices';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import PasswordIcon from '@mui/icons-material/Password';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SettingsIcon from '@mui/icons-material/Settings';

function Profile(props) {
  const [selectedOption, setSelectedOption] = useState("overview");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "back_to_netflix":
        return <div>Content for Back to Netflix</div>;
      case "security":
        return <div>Content for Security</div>;
      case "overview":
        return (<div>
            <div className="title">
            <h1>Account</h1>
            </div>
            <h2>Membership details</h2>
            <div className="plan">
               <h2>Plan name</h2>
               <h2>Plan date : xx/xx/xxxx</h2>
               <h2>payemnt details</h2>
               <h3>upi id :xxxxxxxxx</h3>
               <hr>
               </hr>           
                  <div className="manage"> <a href="">Manage membership</a>
              </div>
               
            </div>
            <div className="ql">
                <h2>Quick Links</h2>
                <ul>
                    <li><ChangeCircleIcon/><span>Change Plan</span></li>
                    <li><PaymentIcon/>   <span> Manage Payment Method</span></li>
                    <li><PhonelinkSetupIcon/> <span> Manage Access Devices</span></li>
                    <li> <PasswordIcon/> <span>  Update Password</span></li>
                    <li> <AccountBoxIcon/>  <span>  Transfer Profile</span></li>
                    <li> <SupervisorAccountIcon/> <span>  Adjust Parental Control</span></li>
                    <li><SettingsIcon/>  <span>  Edit Settings</span></li>
                </ul>
            </div>
        </div>);
      case "membership":
        return <div>Content for Membership</div>;
      case "devices":
        return <div>Content for Devices</div>;
      case "profiles":
        return <div>Content for Profiles</div>;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="Profile">
      <div className="profile-main">
        <div className="sidebar">
          <ul>
            <li>
              <button onClick={() => handleOptionClick("back_to_netflix")} className="backbutton"><KeyboardBackspaceIcon />Back to Netflix</button>
            </li>
            
            <li>
              <button onClick={() => handleOptionClick("overview")} className="sidebarop"> <HomeIcon/><span>Overview</span></button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("membership")} className="sidebarop"><AddCardIcon /><span>Membership</span></button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("security")} className="sidebarop"><GppGoodIcon /> <span>Security </span></button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("devices")} className="sidebarop"><DevicesIcon /><span>Devices</span></button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("profiles")} className="sidebarop"><SwitchAccountIcon /><span>Profiles</span></button>
            </li>
          </ul>
        </div>
        <div className="options">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Profile;
