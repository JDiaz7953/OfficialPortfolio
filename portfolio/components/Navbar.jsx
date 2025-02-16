const Navbar = () => {
    return (  
        <>
         <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav className="text-base font-primary text-gray-500 flex items-center justify-between">
          <ul className="flex gap-4">
            <li>
              <a className="hover:text-white" href="/">Home</a>
            </li>
            <li>
              <a  className="hover:text-white" href="/projects">Projects</a>
            </li>
            <li>
              <a className="hover:text-white" href="/contacts">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
        </>
    );
}

export default Navbar ;