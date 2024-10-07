import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-900 py-4 shadow-md ">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">MyTinerary</h1>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="text-white hover:text-red-500">Home</Link></li>
                    <li><Link to="/cities" className="text-white hover:text-red-500">Cities</Link></li>
                </ul>
                <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="User Avatar" className="rounded-full w-10 h-10" />
            </div>
        </nav>
    );
};

export default Navbar;
