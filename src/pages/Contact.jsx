import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Contact Us :</h1>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg w-full max-w-xs">
            <div className="flex items-center justify-center space-x-3" style={{ marginBottom: '1rem' , textAlign : 'center'}}>

              <span className="text-gray-700 mt-4"> ✉️ = ZVSHSTAR@GMAIL.COM</span>
            </div>
          </div>

          <p className="text-gray-500 mt-4" style={{ textAlign: 'center' , ':hover': { color: 'blue' } }}>
            Feel free to reach out to us via email for any inquiries.
          </p>
        </div>
      </div>

      <footer className="mt-8 text-gray-500 text-sm  " style={{ alignItems: 'end', justifyContent: 'end' , textAlign: 'revert-layer' , position: 'fixed' , bottom: '0', width: '100%' }}>
        © {new Date().getFullYear()} All rights reserved.
        <hr />
      </footer>
    </div>
  );
}

export default Contact;