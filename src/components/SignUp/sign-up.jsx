import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
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

    if (user.password === user.confirmPassword) {
      console.log(user);

      const userDataToSend = { ...user, ...additionalInfo };

      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            name: user.displayName,
            full_name: user.displayName,
            email_verified: true
          }
        }
      });

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
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAdditionalInfoChange = (event) => {
    const { name, value } = event.target;
    setAdditionalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const showAdditionalFormHandler = () => {
    setShowAdditionalForm(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-red-600">Welcome To Flixify!</h1>
        <p className="text-white my-4">Fill the details to create your Account</p>
        <form action="#">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="displayName" value={user.displayName} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" placeholder="username" onChange={handleChange} required />
            <label htmlFor="email" className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" value={user.email} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="your@email.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input type="password" id="password" name="password" value={user.password} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="password" required />
            <label htmlFor="confirmPassword" className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
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
                <input type="radio" id="basic" name="plan" value="basic" onChange={handleAdditionalInfoChange} />
                <label htmlFor="basic" className="ml-2">Basic</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="special" name="plan" value="special" onChange={handleAdditionalInfoChange} />
                <label htmlFor="special" className="ml-2">Special</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="pro" name="plan" value="pro" onChange={handleAdditionalInfoChange} />
                <label htmlFor="pro" className="ml-2">Pro</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="premium" name="plan" value="premium" onChange={handleAdditionalInfoChange} />
                <label htmlFor="premium" className="ml-2">Premium</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
              <input type="text" id="city" name="city" value={additionalInfo.city} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleAdditionalInfoChange} placeholder="City" required />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
              <input type="text" id="address" name="address" value={additionalInfo.address} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleAdditionalInfoChange} placeholder="Address" required />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile Number</label>
              <input type="text" id="mobile" name="mobile" value={additionalInfo.mobile} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleAdditionalInfoChange} placeholder="Mobile Number" required />
            </div>
            <button onClick={handleSignup} type="submit" className="w-full flex justify-center mx-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sign Up</button>
          </form>
        )}

      </div>
    </div>
  );
};

export default SignUp;
