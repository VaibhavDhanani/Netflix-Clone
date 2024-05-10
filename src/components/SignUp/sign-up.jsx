import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

const SignUp = () => {

  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })



  const handleSignup = async (event) => {
    event.preventDefault();

    if (user.password === user.confirmPassword) {
      console.log(user);

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
        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
  
        if (!response.ok) {
          throw new Error("Failed to send user information to the server.");
        }
  
        console.log("User information sent successfully.");
      } catch (error) {
        console.error("Error sending user information to server:", error.message);
      }
      console.log(data,error);
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

  return (
    <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 class="text-2xl font-bold text-center mb-4 dark:text-red-600">Welcome To Flixify!</h1>
        <p className="text-white my-4">Fill the details to create your Account</p>
        <form action="#">
          <div class="mb-4">
            <label for="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="displayName" value={user.displayName} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" placeholder="username" onChange={handleChange} required />
            <label for="email" className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" value={user.email} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="your@email.com" required />
          </div>
          <div class="mb-4">
            <label for="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input type="password" id="password" name="password" value={user.password} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="password" required />
            <label for="confirmPassword" className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-2 focus:ring-indigo-800 focus:border-indigo-800" onChange={handleChange} placeholder="Confirm password" required />
            <a href="#"
              class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
              Password?</a>
          </div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
              <label for="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
            </div>
            <a href="/signin"
              class="text-xs text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Already have an
              Account ?</a>
          </div>
          <div className="flex justify-between ">
            <button onClick={handleSignup} type="submit" className="w-full flex justify-center mx-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sign Up</button>
            
          </div>
        </form>
      </div>
    </div >

  );
};

export default SignUp;
