import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">AutoHire.AI</Link>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`${isOpen ? "block" : "hidden"} sm:flex`}>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
