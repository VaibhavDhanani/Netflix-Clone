import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/User/user';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    let userName = null

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            userName = user.user_metadata.name
            console.log(user.user_metadata.name);
            dispatch(setCurrentUser(user))
        }
        getUser();
    }, [dispatch])

    console.log(userName)
    return (
        <nav className="fixed top-0 w-full m-0 bg-transparent z-10">
            <div className=" px-6 py-3 m-0">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className={`lg:flex lg:items-center justify-between mx-4 ${isOpen ? 'block bg-black bg-opacity-50 w-96' : 'hidden'}`}>
                            <Link to="/">
                                <img className="w-auto h-10 sm:h-12" src="https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n" alt="" />
                            </Link>
                            <div className="flex flex-col lg:flex-row lg:items-center text-base font-bold">
                                <Link to="/" className="px-2 py-2 mx-1 mt-2 text-gray-100 hover:bg-gray-600 rounded-md lg:mt-0">Home</Link>
                                <Link to="/tv-shows" className="px-2 py-2 mx-1 mt-2 text-gray-100 hover:bg-gray-600 rounded-md lg:mt-0">TV-Shows</Link>
                                <Link to="/movies" className="px-2 py-2 mx-1 mt-2 text-gray-100 hover:bg-gray-600 rounded-md lg:mt-0">Movies</Link>
                                <Link to="/new-popular" className="px-2 py-2 mx-1 mt-2 text-gray-100 hover:bg-gray-600 rounded-md lg:mt-0">New & Popular</Link>
                                <Link to="/my-list" className="px-2 py-2 mx-1 mt-2 text-gray-100 hover:bg-gray-600 rounded-md lg:mt-0">My List</Link>
                                <Link to="/browse-language" className="px-2 py-2 mx-1 mt-2 text-gray-100 hover:bg-gray-600 rounded-md lg:mt-0">Browse by Language</Link>
                            </div>
                            <div className={`lg:hidden my-2  ${isOpen ? '' : 'flex-col'}`}>
                                <div className="rounded">
                                    <input className={`${isClicked ? 'w-auto px-2' : 'w-0'} border-none bg-transparent py-1 text-gray-400 hover:outline-dashed focus:outline-dashed`} type="search" name="search" placeholder="Search..." />
                                    <button onClick={toggleSearch} className="m-2 rounded bg-blue-600 px-4 py-2 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-3 w-3" viewBox="0 0 56.966 56.966">
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </button>
                                </div>

                                <button type="button" className="flex items-center focus:outline-none my-2 mx-auto" aria-label="toggle profile dropdown">
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-100 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                    </div>
                                    <div>
                                        <h3 className="mx-2 text-gray-100 lg:hidden">{userName || "Loading..."}</h3>
                                    </div>
                                </button>
                            </div>
                            <div className="flex lg:hidden justify-center">
                                <button onClick={toggleMenu} type="button" className="text-gray-100 hover:text-gray-200 focus:outline-none my-4" aria-label="toggle menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" st rokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`lg:flex lg:items-center hidden mt-4 lg:mt-0  ${isOpen ? 'flex-col' : ''}`}>
                        <div className=" w-full mr-10 rounded bg-white">
                            <input className={`${isClicked ? 'w-auto px-2' : 'w-0'} border-none bg-transparent py-1 text-gray-400 outline-none focus:outline-none`} type="search" name="search" placeholder="Search..." />
                            <button onClick={toggleSearch} className="m-2 rounded bg-blue-600 px-4 py-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-3 w-3" viewBox="0 0 56.966 56.966">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>

                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            <Link to='/profile'><div className="w-8 h-8 overflow-hidden border-2 border-gray-100 rounded-full">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                            </div></Link>
                            <h3 className="mx-2 text-gray-100 lg:hidden">{userName || "User Name"}</h3>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Link to="#" className={`lg:hidden ${isOpen ? 'hidden' : ''}`} >
                        <img className="w-auto h-10 sm:h-12" src="https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n" alt="" />
                    </Link>
                    <div className={`flex lg:hidden justify-end ${isOpen ? 'hidden' : ''}`}>
                        <button onClick={toggleMenu} type="button" className="text-gray-100 hover:text-gray-200 focus:outline-none my-4" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
