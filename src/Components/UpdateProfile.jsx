import React, { use} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
  const { updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    updateUserProfile(name, photoURL)
      .then(() => {
        toast("Profile Updated!");
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
        e.target.reset();
      })
      .catch((err) => toast(err.message));
  };

  return (
    <section className="hero bg-base-200 min-h-screen">
      <ToastContainer />
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Update Your Profile</h1>
        </div>
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Enter your Name"
                />
                <label className="label">Photo URL</label>
                <input
                  name="photoURL"
                  type="text"
                  className="input"
                  placeholder="Enter your Photo URL"
                />

                <button
                  className="btn btn-primary hover:bg-neutral border-none mt-4 text-white transition-colors"
                  type="submit"
                >
                  Save Profile
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
