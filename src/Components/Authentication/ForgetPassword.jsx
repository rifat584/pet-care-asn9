import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const {resetPass}= use(AuthContext);
  const handleResetPassword = (e)=>{
    e.preventDefault();
    const email= e.target.email.value
    console.log("test click");
    resetPass(email)
    .then(()=>toast("Password Reset Email Sent!"))
    .catch(err=>toast(err.message))
    
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      <h2 className="text-4xl font-bold mb-6">Reset Your Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Enter your Email"
        />
        <button
          className="btn btn-primary hover:bg-neutral border-none mt-4 text-white transition-colors w-full"
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default ForgetPassword;
