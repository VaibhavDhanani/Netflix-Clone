import React, { useEffect, useState } from 'react'

const Overview = () => {
    const [formData, setFormData] = useState({
        companyEmail: '',
        companyName: '',
        companyLocation: '',
        establishDate: '',
        contactNumber: ''
    });
    const [isFilled, setIsFilled] = useState(false);

    const [user, setUser] = useState({});

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
                console.log(data._id)
                setUser(data);
                return data;
            }
        } catch (error) {
            console.error("Failed to fetch user:", error);
        }
    };

    const checkSeller = async (userId) => {
        try {
            console.log(userId);
            const params = new URLSearchParams({ userId: userId.toString() });
            const response = await fetch(`http://localhost:5000/api/checkseller?${params}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setFormData({
                companyEmail: data.companyEmail,
                companyName: data.companyName,
                companyLocation: data.companyLocation,
                establishDate: data.establishDate,
                contactNumber: data.contactNumber
            });
            setIsFilled(true);
        } catch (error) {
            console.error("Failed to fetch user:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUser();
                if (userData) {
                    await checkSeller(userData._id);
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };

        fetchData();

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updateUserRoleResponse = await fetch(`http://localhost:5000/api/updateuserrole`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user }),
            });

            if (!updateUserRoleResponse.ok) {
                throw new Error('Failed to update user role');
            }

            console.log('User role updated');

            const createSellerResponse = await fetch(`http://localhost:5000/api/createseller`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    userId: user._id.toString(),
                }),
            });

            if (!createSellerResponse.ok) {
                throw new Error('Failed to create seller document');
            }

            console.log('Seller document created:', formData);
        }
        catch (error) {
            console.error('Error:', error);
        }

        setIsFilled(true);
    };

    console.log(user)
    return (
        <div className='text-black'>
            {!isFilled ? (
                <>
                    <h1 className='text-black'>Be seller in our Netflix</h1>
                    <div className="flex items-start justify-center h-screen">
                        <form
                            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                            onSubmit={handleSubmit}
                        >
                            <h2 className="text-2xl font-bold mb-4 text-center">Company Details</h2>

                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="companyEmail"
                                    value={formData.companyEmail}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Company Location</label>
                                <input
                                    type="text"
                                    name="companyLocation"
                                    value={formData.companyLocation}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Establish Date</label>
                                <input
                                    type="date"
                                    name="establishDate"
                                    value={formData.establishDate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </>
            ) : (<>
                <div className="flex items-start justify-center my-5">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">Company Details</h2>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Email</td>
                                    <td className="border px-4 py-2">{formData.companyEmail}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Company Name</td>
                                    <td className="border px-4 py-2">{formData.companyName}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Company Location</td>
                                    <td className="border px-4 py-2">{formData.companyLocation}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Establish Date</td>
                                    <td className="border px-4 py-2">{formData.establishDate}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Contact Number</td>
                                    <td className="border px-4 py-2">{formData.contactNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <a
                    href='/contentupload'
                    className="bg-indigo-600 px-8 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
                    Go to Upload
                </a>
            </>

            )}
        </div>
    )
}

export default Overview
