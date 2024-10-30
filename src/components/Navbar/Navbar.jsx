import './Navbar.scss';
import React, { useState, useEffect } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Rover from '../..//assets/moon-rover.svg';
import MenuButton from '../../assets/menu.svg';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  // Update 'isMobile' state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="nav">
        {isMobile ? (
          <>
            <button className="nav__toggle" onClick={toggleMenu}>
              <img className="nav__toggle-img" src={MenuButton} alt="Menu" />
            </button>
            {isOpen && <DropdownMenu />}
          </>
        ) : (
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Menu
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Calendar
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Catering
              </a>
            </li>
          </ul>
        )}
        <img src={Rover} alt="Rover" className="nav__logo" />
        <h1 className="nav__banner">The Pizza Rover</h1>
      </nav>
    </>
  );
}

export default Navbar;
