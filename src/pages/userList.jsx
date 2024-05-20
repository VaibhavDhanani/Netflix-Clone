import React, { useEffect, useState } from 'react';
import Navbar from '../components/header/Navbar';
import Header from '../components/header/Header';
import Bigfooter from '../components/footer/Bigfooter';

const UserList = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userfetch = localStorage.getItem("user");
                if (userfetch) {
                    const user = JSON.parse(userfetch);
                    const params = new URLSearchParams({ email: user.email });
                    const response = await fetch(`http://localhost:5000/api/user?${params}`);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    setUser(data);
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    console.log(user.mylist);

    return (
        <div>
            <Header />
            <div className='text-white'>
                {user.mylist && user.mylist.length > 0 ? (
                    user.mylist.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))
                ) : (
                    <p>No items in the list.</p>
                )}
            </div>
            <Bigfooter />
        </div>
    );
};

export default UserList;
