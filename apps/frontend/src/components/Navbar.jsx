import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/" className="text-lg font-bold">AutoHire.AI</Link>
        <div>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
);