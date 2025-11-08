import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";

const Register = () => {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const { setUser, createUser, loginwithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  // password validation check
  const handlePasswordValidation = (e) => {
    const password = e.target.value;
    setPass(password);
    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regEx.test(password)) {
      setErr(
        "Password must contain uppercase, lowercase, and be at least 6 characters."
      );
    } else {
      setErr("");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // field passwords
    const form = e.target;
    const email = form.email.value;
    const password = pass;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    // create account
    createUser(email, password)
  .then((res) => {
    const user = res.user;
    return updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
    .then(() => {
      setUser({ ...user });
      navigate("/");
    });
  })
  .catch((err) => toast(err.message));

  };

  const handleGoogle = () => {
    loginwithGoogle()
      .then(() => navigate("/"))
      .catch((err) => {
        const error = err.message;
        toast(error);
      });
  };

  const handlePwdVisibility = () => {
    setPwdVisibility(!pwdVisibility);
  };
  return (
    <section className="hero bg-base-200 min-h-screen">
      <ToastContainer />
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <button
              className="btn btn-neutral hover:bg-secondary border-none mb-4 text-white transition-colors"
              onClick={handleGoogle}
            >
              <span>
                <FaGoogle />
              </span>
              Register with Google
            </button>
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
                {err && (
                  <p className="text-xs font-medium text-red-500">{err}</p>
                )}
                <input
                  value={pass}
                  onChange={handlePasswordValidation}
                  name="password"
                  type={pwdVisibility ? "text" : "password"}
                  className="input"
                  placeholder="Enter your Password"
                />
                <button
                  className="btn btn-primary hover:bg-neutral border-none mt-4 text-white transition-colors"
                  type="submit"
                >
                  Register
                </button>
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-secondary font-medium underline"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>
                <span
                  className="absolute bottom-31.5 right-13 z-2 text-base"
                  onClick={handlePwdVisibility}
                >
                  {pwdVisibility ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
