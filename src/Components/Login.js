import React, { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl text-white mb-4">WELCOME BACK</h2>
        <h3 className="text-center text-xl text-white mb-6">
          Log into your account
        </h3>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="username"
            >
              Email or Username
            </label>
            <input
              className="w-full px-3 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              type="text"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email or username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                Forgot password?
              </a>
            </div>
          </div>
          <div
            onClick={() =>{
                if(email && password){
                    window.location.href = "/"
                }
                else{
                    alert('Enter username and password')
                }
            } }
            className="w-full bg-blue-600 cursor-pointer text-white py-2 text-center rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            Login now
          </div>
        </form>
        <p className="text-center text-gray-400 text-sm">
          Not registered yet?{" "}
          <a href="/signup" className="text-yellow-500 hover:text-yellow-400">
            Register →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
