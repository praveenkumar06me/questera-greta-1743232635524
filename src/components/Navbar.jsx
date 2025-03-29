import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaCamera className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl text-gray-800">PhotoBlog</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-indigo-600">Gallery</Link>
            <Link to="/tutorials" className="text-gray-600 hover:text-indigo-600">Tutorials</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}