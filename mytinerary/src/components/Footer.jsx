import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Sección de logo */}
                <div className="flex items-center">
                    <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="Logo" className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                        <p className="font-bold">CONTACT US</p>
                        <p className="text-sm">&copy; 2024 MyTinerary. All rights reserved.</p>
                    </div>
                </div>

                {/* Íconos de redes sociales */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
                    <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
                    <a href="#" className="text-white hover:text-gray-400"><FaYoutube /></a>
                    <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
                    <a href="#" className="text-white hover:text-gray-400"><FaPinterest /></a>
                    <a href="#" className="text-white hover:text-gray-400"><FaLinkedin /></a>
                </div>

                {/* Sección de enlaces */}
                <div className="mt-4 md:mt-0">
                    <p className="font-bold">MyTinerary</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
