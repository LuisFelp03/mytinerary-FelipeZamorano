import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-900 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">MyTinerary</h1>


                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/" className="text-white hover:text-red-500">Home</Link></li>
                    <li><Link to="/cities" className="text-white hover:text-red-500">Cities</Link></li>
                </ul>


                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <AiOutlineMenu className="w-6 h-6" /> {/* Ícono de react-icons */}
                    </button>
                </div>


                <FaUserCircle className="text-white w-10 h-10 ml-4" /> {/* Ícono de avatar */}
            </div>


            {isOpen && (
                <ul className="md:hidden bg-blue-900 p-4 space-y-4 text-center">
                    <li><Link to="/" className="block text-white hover:text-red-500">Home</Link></li>
                    <li><Link to="/cities" className="block text-white hover:text-red-500">Cities</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
