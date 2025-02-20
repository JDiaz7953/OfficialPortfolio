import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav className="text-base font-primary text-gray-500 flex items-center justify-between">
          <ul className="p-4 flex gap-4">
            <li>
              <a className="hover:text-white" href="/">
                Home
              </a>
            </li>
            <li>
              <Link className="hover:text-white" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contacts">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
