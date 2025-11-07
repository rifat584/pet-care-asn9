import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(() => {
        navigate(from, {replace:true});
      })
      .catch((err) => toast(err.message));
  };

  return (
    <section className="hero bg-gray-100 min-h-screen">
      <div className="hero-content flex-col w-full">
        <ToastContainer/>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Enter your Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Enter your Password"
                />
                <div>
                  <Link to={"/forgot-password"} className="link link-hover">Forgot password?</Link>
                </div>
                <button className="btn btn-primary hover:bg-neutral border-none mt-4 text-white transition-colors" type="submit">
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
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
