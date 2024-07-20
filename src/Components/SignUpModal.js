// src/components/SignUpModal.js
import React from "react";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const SignUpModal = ({ isOpen, onRequestClose, isSignup = false }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex justify-center items-center h-screen w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md relative text-center">
        {isSignup === false && (
          <div
            onClick={onRequestClose}
            className="absolute top-2 right-2 cursor-pointer bg-black p-2 rounded-full text-white"
          >
            X
          </div>
        )}
        <h2 className="text-white text-lg mb-4">SIGN UP</h2>
        <h3 className="text-white text-xl font-semibold mb-8">
          Create an account to continue
        </h3>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Choose a preferred username"
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Choose a strong password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 text-gray-500"
            >
              👁️
            </button>
          </div>
          <div
            onClick={() => {
                if(email && username && password){
                    window.location.href = "/"
                }
                else{
                    alert('Please fill all data before proceed.')
                }
            } }
            className="w-full bg-blue-600 text-white text-center cursor-pointer py-3 rounded-md"
          >
            Continue
          </div>
        </form>
        <p className="text-gray-400 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => (window.location.href = "/login")}
            className="text-blue-400"
          >
            Login
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default SignUpModal;
