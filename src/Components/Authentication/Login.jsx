import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const { loginUser, loginwithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    // const email = setEmail(form.email.value);
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(`${location.state}`);
      })
      .catch((err) => toast(err.message));
  };

  const handleGoogle = () => {
    loginwithGoogle()
      .then(() => navigate(`${location.state}`))
      .catch((err) => {
        const error = err.message;
        toast(error);
      });
  };

  const handlePwdVisibility = () => {
    setPwdVisibility(!pwdVisibility);
  };

  // handle forgot pass
  const handleForgotPassword = (e) => {
    e.preventDefault()
    navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="hero bg-gray-100 min-h-screen">
      <div className="hero-content flex-col w-full">
        <ToastContainer />
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login now!</h1>
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
              Login with Google
            </button>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset relative">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={e=>setEmail(e.target.value)}
                  className="input"
                  placeholder="Enter your Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type={pwdVisibility ? "text" : "password"}
                  className="input"
                  placeholder="Enter your Password"
                />
                <div>
                  <button
                    onClick={handleForgotPassword}
                    className="link link-hover"
                  >
                    Forgot password?
                  </button>
                </div>
                <button
                  className="btn btn-primary hover:bg-neutral border-none mt-4 text-white transition-colors"
                  type="submit"
                >
                  Login
                </button>
                <p>
                  Don't have an account yet?{" "}
                  <Link
                    className="text-secondary font-medium underline"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
                <span
                  className="absolute bottom-31.5 right-7 z-2 text-base"
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

export default Login;
