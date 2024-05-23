import React, { useEffect, useState } from 'react';
import Navbar from '../components/header/Navbar';
import Header from '../components/header/Header';
import Bigfooter from '../components/footer/Bigfooter';
import { Link } from 'react-router-dom';

const UserList = () => {
	const [user, setUser] = useState({});
	const [content, setContent] = useState([]);

	const fetchUser = async () => {
		try {
			const userfetch = localStorage.getItem("user");
			if (userfetch) {
				const user = JSON.parse(userfetch);
				const params = new URLSearchParams({ email: user.email });
				const response = await fetch(`http://localhost:5000/api/user?${params}`);
				const data = await response.json();
				setUser(data);
				return data;
			}
		} catch (error) {
			console.error("Failed to fetch user:", error);
		}
		return null;
	};

	const fetchSubContent = async (user) => {
		if (!user || !user.mylist) {
			console.error("User or user.mylist is not available");
			return;
		}

		try {
			const params = new URLSearchParams({ list: user.mylist.join(",") });
			const response = await fetch(`http://localhost:5000/api/getuserlist?${params}`);
			const data = await response.json();
			setContent(data);
		} catch (e) {
			console.error("Failed to fetch user list content:", e);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const user = await fetchUser();
			if (user) {
				await fetchSubContent(user);
			}
		};
		fetchData();
	});

	const handleRemove = async (name) => {
		const newList = user.mylist.filter(item => item !== name);
		// console.log(newList);
		const userDataToSend = { ...user, mylist: newList };
		try {
			const response = await fetch("http://localhost:5000/api/updateuserlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userDataToSend),
			});
			const fetchData = async () => {
				const user = await fetchUser();
				if (user) {
					await fetchSubContent(user);
				}
			};
			fetchData();
			if (!response.ok) {
				throw new Error("Failed to send user information to the server.");
			}
			console.log("User information sent successfully.");
		} catch (error) {
			console.error("Error sending user information to server:", error.message);
		}
	}


	// console.log(content)
	return (
		<div>
			<Header />
			<div className="bg-black rounded-lg shadow-lg overflow-hidden w-screen flex flex-col justify-center items-center mt-14">
				{content.map((item) => (
					<div
						key={item.id}
						className="m-4 flex bg-white bg-opacity-5 rounded-lg shadow-md overflow-hidden max-w-5xl h-80"
					>
						<div className="relative w-96">
							<img
								src={item.imageUrl}
								alt={`${item.name} Poster`}
								className="w-full h-full object-cover rounded-l-lg"
							/>
							<div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full">
								{item.totalLikes}
							</div>
						</div>
						<div className="p-6 flex-1">
							<h3 className="text-xl font-semibold text-white">{item.name}</h3>
							<p className="text-gray-400 mt-2 text-left">{item.description}</p>
							<div className="mt-4 flex items-center justify-between">
								<div>
									<Link
										to={"/video-player"}
										state={{
											episodeNumber: 0,
											seasonNumber: 0,
											info: item

										}}>
										<a
											href="#"
											className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
										>
											Watch Now
										</a>
									</Link>
									<button
										onClick={() => handleRemove(item.name)}
										className=" mx-5 inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
									>
										Remove from list
									</button>
								</div>
								<div className="flex items-center">
									<svg
										className="h-5 w-5 text-yellow-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<span className="ml-1 text-gray-400">{item.ratings}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<Bigfooter />
		</div>
	);
};

export default UserList;
