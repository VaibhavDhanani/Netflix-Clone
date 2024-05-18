import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/User/user";
import { supabase } from "../../supabase/supabaseClient";
import { Navigate } from "react-router-dom";

function Profile(props) {
  const [userdb, setUser] = useState({});
  const [selectedOption, setSelectedOption] = useState("overview");
  const dispatch = useDispatch();

  useEffect(() => {
    let email = ""
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        dispatch(setCurrentUser(user));
        email = user.user_metadata.email
        console.log(email);
        
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    getUser();

    const fetchUser = async () => {
      try {
        const email = 'test256@gmail.com'; 
        const params = new URLSearchParams({ email });

        const response = await fetch(`http://localhost:5000/api/user?${params}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };


    fetchUser();
  }, [dispatch]);

  console.log(userdb);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "back_to_netflix":
        return <Navigate to="/" replace />;
      case "security":
        return <div>Content for Security</div>;
      case "membership":
        return (
          <div>
            <div className="title">
              <h1>Account</h1>
            </div>
            <h2>Membership details</h2>
            <div className="plan">
              <h2>Plan name:  {userdb.plan}</h2>
              <h2>Plan date : {formatDate(userdb.date)}</h2>
              <h2>payment details</h2>
              <h3>Payment Method : Visa Card</h3>
              <hr />
            </div>
            <div className="ql">
              <h2>Quick Links</h2>
              <ul>
                <li><PasswordIcon /><span>Update Password</span></li>
                <li><SettingsIcon /><span>Edit Settings</span></li>
              </ul>
            </div>
          </div>
        );
      case "overview":
        return <div>Content for Overview</div>;
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
              <button onClick={() => handleOptionClick("back_to_netflix")} className="backbutton">
                <KeyboardBackspaceIcon />Back to Netflix
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("overview")} className="sidebarop">
                <HomeIcon /><span>Overview</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("membership")} className="sidebarop">
                <AddCardIcon /><span>Membership</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("security")} className="sidebarop">
                <GppGoodIcon /><span>Security</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("devices")} className="sidebarop">
                <DevicesIcon /><span>Devices</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("profiles")} className="sidebarop">
                <SwitchAccountIcon /><span>Profiles</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="options">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Profile;
