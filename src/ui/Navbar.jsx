import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout()); // clear auth state
    navigate('/logIn'); // redirect to login
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto w-[85%] py-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              height={130}
              width={130}
              src="https://res.cloudinary.com/dktyonr0v/image/upload/v1740463280/logo_czm0sp.png"
              alt="logo"
            />
          </div>

          <div className="hidden self-center text-center md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="hidden md:block">
              <Link to="/logIn">
                <Button className="rounded-md !bg-[#ea5547] px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-400">
                  Login
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <button
                onClick={handleLogout}
                className="rounded-md bg-[#ea5547] px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-400"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 transition-colors duration-200 hover:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg bg-white px-2 pb-3 pt-2 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Link to="/logIn">
                  <Button className="rounded-md !bg-[#ea5547] px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-400">
                    Login
                  </Button>
                </Link>
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full rounded-md bg-[#ea5547] px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-400"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
