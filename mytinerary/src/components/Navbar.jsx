import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">MyTinerary</h1>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link></li>
                    <li><Link to="/cities" className="text-gray-600 hover:text-blue-500">Cities</Link></li>
                </ul>
                <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="User Avatar" className="rounded-full w-10 h-10" />
            </div>
        </nav>
    );
};

export default Navbar;
