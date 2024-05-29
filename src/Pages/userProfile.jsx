// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from "../AuthProvider/AuthProvider";

const userProfile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    const { user } = UseContext(AuthContext); // Fetch user data from context

    // Handle case where user data might not be available
    if (!user) {
        return <div className="text-center my-10">Loading...</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mx-4 my-10 sm:mx-10 lg:mx-40">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <img
                    className="w-32 h-32 rounded-full mb-4 lg:mb-0 lg:mr-6"
                    src={user.profilePicture}
                    alt={`${user.name}'s profile`}
                />
                <div>
                    <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                    <p className="text-lg text-gray-600 mb-4">{user.email}</p>
                    <div className="text-gray-800">
                        <p><span className="font-semibold">Username:</span> {user.username}</p>
                        <p><span className="font-semibold">Location:</span> {user.location}</p>
                        <p><span className="font-semibold">Joined:</span> {new Date(user.joined).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default userProfile;
