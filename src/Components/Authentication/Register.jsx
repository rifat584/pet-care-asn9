import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
const {createUser} = use(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form= e.target;
    const email= form.email.value;
    const password= form.password.value;
    const name= form.name.value;
    const photoURL= form.photoURL.value;
    console.log(email,password,createUser);
    createUser(email, password)
    .then(res=>{const user= res.user;
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
    })
    .catch(err=>toast(err.message))
  };
  return (
    <section className="hero bg-base-200 min-h-screen">
        <ToastContainer/>
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                name="email"
                  type="email"
                  className="input"
                  placeholder="Enter your Email"
                />
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
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Enter your Password"
                />
                <button className="btn btn-primary hover:bg-neutral border-none mt-4 text-white transition-colors" type="submit">
                  Register
                </button>
                <p>Already have an account? <Link className="text-secondary font-medium underline" to={"/login"}>Login</Link></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;