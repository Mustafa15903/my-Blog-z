import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Contact() {
  const socialMedia = [
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/kingzvshh",
      color: "text-pink-600 hover:text-pink-700",
      label: "Instagram"
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/",
      color: "text-blue-400 hover:text-blue-500",
      label: "Twitter"
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/Mustafa15903",
      color: "text-gray-800 hover:text-black",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/",
      color: "text-blue-600 hover:text-blue-700",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      
      <div className="mb-8">
        <h3 className="text-lg mb-4">Follow Us:</h3>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} transition-colors duration-300`}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;