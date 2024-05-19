import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { loadStripe } from '@stripe/stripe-js';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import "./signup.css"
const SignUp = ({ successPayment }) => {

  // console.log(successPayment)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    plan: "",
    city: "",
    address: "",
    mobile: "",
    mylist: []
  });

  const [showAdditionalForm, setShowAdditionalForm] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    let userDataToSend;
    if (user.password === user.confirmPassword) {
      console.log(user);
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        console.log(userData);
        userDataToSend = userData;
      } else {
        console.log("No user data found in localStorage.");
      }

      try {
        const response = await fetch("http://localhost:5000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userDataToSend)
        });

        if (!response.ok) {
          throw new Error("Failed to send user information to the server.");
        }

        console.log("User information sent successfully.");

      } catch (error) {
        console.error("Error sending user information to server:", error.message);
      }

      console.log(data, error);
    } else {
      alert("Password and confirm password don't match");
    }
    if (typeof window !== "undefined") {
      window.location.href = "http://localhost:3000/";
    }

  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));


  };

  const makepayment = async (e) => {
    e.preventDefault();
    console.log("make payment called")
    const userDataToSend = { ...user, ...additionalInfo };
    localStorage.setItem('userData', JSON.stringify(userDataToSend));

    const stripe = await loadStripe("pk_test_51PH97tSFX0SomHQ8V5FbN6UjfeYA4e9kfvaDs7bAySTH7W9ApVH8DwdwXH1E6hVVrxNOO3STALvLDKpEVNnPHMbt00s8x8OEGp");

    const body = {
      userdata: userDataToSend
    }
    console.log(userDataToSend)
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:5000/api/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });



    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log(result);



    if (!result.error) {
      window.location.href = "http://localhost:3000/successpayment";
    } else {
      console.log("there is an error:");
      console.log(result.error);
    }
  }


  const handleAdditionalInfoChange = (event) => {
    const { name, value } = event.target;
    if (name === 'plan') {
      setAdditionalInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    } else {
      setAdditionalInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const showAdditionalFormHandler = () => {
    setShowAdditionalForm(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        {successPayment ? (
          <div className="handlepayment">
            <img
              src="https://zeuxinnovation.com/wp-content/uploads/2023/04/maximising-user-satisfaction-1.jpg"
              alt=""
              style={{ outline: "5px solid white" }}
            />
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Payment Successful , Watch netflix and chill
            </Alert>
            <h3>Click Signup to Open Account</h3>

            <button className="checkout" onClick={handleSignup}>Sign up</button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-red-600">Welcome To Flixify!</h1>
            <p className="text-white my-4">Fill the details to create your Account</p>
            <form action="#">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" autoComplete="off" id="name" name="name" value={user.name} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" placeholder="username" onChange={handleChange} required />
                <label htmlFor="email" className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" autoComplete="off" id="email" name="email" value={user.email} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="your@email.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" autoComplete="off" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input type="password" id="password" name="password" value={user.password} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="password" required />
                <label htmlFor="confirmPassword" autoComplete="off" className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="Confirm password" required />
                <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
              </div>
              {!showAdditionalForm && (
                <div className="flex justify-between">
                  <button onClick={showAdditionalFormHandler} type="button" className="w-full flex justify-center mx-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Next</button>
                </div>
              )}
            </form>

            {showAdditionalForm && (
              <form action="#">
                <div className="mb-4">
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Plan</label>
                  <div className="flex items-center">
                    <input type="radio" id="basic" name="plan" defaultChecked="true" value="basic" onChange={handleAdditionalInfoChange} />
                    <label htmlFor="basic" className="ml-2">Basic 	&#8377;199</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="special" name="plan" value="special" onChange={handleAdditionalInfoChange} />
                    <label htmlFor="special" className="ml-2">Special 	&#8377;299</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="pro" name="plan" value="pro" onChange={handleAdditionalInfoChange} />
                    <label htmlFor="pro" className="ml-2">Pro  	&#8377;399</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="premium" name="plan" value="premium" onChange={handleAdditionalInfoChange} />
                    <label htmlFor="premium" className="ml-2">Premium 	&#8377;599</label>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
                  <input type="text" id="city" autoComplete="off" name="city" value={additionalInfo.city} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleAdditionalInfoChange} placeholder="City" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                  <input type="text" id="address" autoComplete="off" name="address" value={additionalInfo.address} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleAdditionalInfoChange} placeholder="Address" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile Number</label>
                  <input type="text" id="mobile" autoComplete="off" name="mobile" value={additionalInfo.mobile} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleAdditionalInfoChange} placeholder="Mobile Number" required />
                </div>
                <button onClick={makepayment} type="submit" className="w-full flex justify-center mx-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Next</button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;