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
import { Navigate } from "react-router-dom";
import UserProfileCard from "./profilecard";
import Overview from "./overview";

function Profile() {
  const [user, setUser] = useState({});
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("overview");
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const fetchUser = async () => {
    try {
      const userfetch = localStorage.getItem("user");
      if (userfetch) {
        const userlocal = JSON.parse(userfetch);
        console.log(userlocal.email)
        const params = new URLSearchParams({ email: userlocal.email });
        const response = await fetch(`http://localhost:5000/api/user?${params}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
        return data;
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);


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

  const togglePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
    setPasswordError('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const currentPasswordValue = formData.get('currentPassword');
    const newPasswordValue = formData.get('newPassword');
    const confirmPasswordValue = formData.get('confirmPassword');

    if (newPasswordValue !== confirmPasswordValue) {
      setPasswordError('New password and confirm password do not match');
      return;
    }

    if (currentPasswordValue === user.password) {
      if (newPasswordValue === confirmPasswordValue) {

        try {
          const response = await fetch(`http://localhost:5000/api/updateuserpassword`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...user, password: newPasswordValue }),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setUser(data);
          togglePasswordModal();
        } catch (error) {
          console.error("Failed to update password:", error);
          setPasswordError('Failed to update password. Please try again.');
        }
      }
      else {
        setPasswordError('New password and confirm password do not match');
      }
    } else {
      setPasswordError('Current password is incorrect');
    }
  };

  const PasswordModal = () => {
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showPasswordModal ? 'block' : 'hidden'}`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <span
            className="close text-gray-600 hover:text-gray-900 cursor-pointer text-2xl"
            onClick={togglePasswordModal}
          >
            &times;
          </span>
          <h2 className="text-xl font-semibold mb-4">Update Password</h2>
          {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                name="currentPassword"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                name="newPassword"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                name="confirmPassword"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "back_to_netflix":
        return <Navigate to="/home" replace />;
      case "security":
        return <div>Content for Security</div>;
      case "membership":
        return (
          <div>
            <div className="title">
              <h1 className="text-black text-5xl">Account</h1>
            </div>
            <h2 className="text-2xl">Membership details</h2>
            <div className="plan">
              <h2>Plan name:  {user.plan}</h2>
              <h2>Plan date : {formatDate(user.date)}</h2>
              <h2>payment details</h2>
              <h3>Payment Method : Visa Card</h3>
              <hr />
            </div>
            <div className="ql">
              <h2>Quick Links</h2>
              <ul>
                <li><PasswordIcon /><button onClick={togglePasswordModal}>Update Password</button></li>
              </ul>
            </div>
            <PasswordModal />
          </div>
        );
      case "overview":
        return <Overview />;
      case "profiles":
        return <UserProfileCard user={user} />;
      default:
        return;
    }
  };

  return (
    <div className="Profile">
      <div className="profile-main">
        <div className="sidebar">
          <ul>
            <li>
              <button onClick={() => handleOptionClick("back_to_netflix")} className="backbutton">
                <KeyboardBackspaceIcon />
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
