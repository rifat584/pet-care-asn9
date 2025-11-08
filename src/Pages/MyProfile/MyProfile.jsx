import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";


const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-3xl h-screen mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>

      <div className="bg-white shadow-lg p-8 rounded-2xl flex flex-col items-center gap-6">
        <img
          src={user?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/40 shadow"
        />

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">
            {user?.displayName || "Unknown User"}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
        <Link to={"/update-profile"} className="btn btn-primary hover:bg-secondary border-none mt-4 text-base-200 transition-colors">
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
