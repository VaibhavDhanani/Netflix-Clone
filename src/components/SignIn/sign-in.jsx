import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase/supabaseClient';

const SignIn = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    useEffect(() => {
        const session = supabase.auth.getSession();
        console.log(session);

        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);

            switch (event) {
                case "SIGNED_IN":
                    setUser(session?.user);
                    break;
                case "SIGNED_OUT":
                    setUser(null);
                    break;

                default:
                    break;
            }
        }, []);
        data.subscription.unsubscribe();
    });

    const handleGoogleSubmit = async (event) => {
        event.preventDefault();
        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        console.log(user)
    };

    const handleLogin = async (event) => {
        event.preventDefault()

        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })
        console.log(data,error)
    }

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
                <h1 class="text-2xl font-bold text-center mb-4 dark:text-red-600">Welcome Back!</h1>
                <form action="#">
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" value={user.email} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={handleChange} required />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input type="password" id="password" name='password' value={user.password} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" onChange={handleChange} required />
                        <a href="#"
                            class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                            Password?</a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
                            <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="/signup"
                            class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
                            Account</a>
                    </div>
                    <div className="flex justify-between ">
                        <button onClick={handleLogin} type="submit" class="w-full flex justify-center mx-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Login</button>
                        <button onClick={handleGoogleSubmit} type="submit" class="w-full flex justify-center mx-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login with Google</button>
                    </div>
                </form>
            </div>
        </div >

    );

}

export default SignIn