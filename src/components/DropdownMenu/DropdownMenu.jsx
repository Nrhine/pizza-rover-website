import './DropdownMenu.scss';

function DropdownMenu({ isOpen }) {
  return (
    <div className="dropdown">
      <ul className={`dropdown__list ${isOpen ? 'open' : ''}`}>
        <li className="dropdown__list-item">
          <a href="#" className="dropdown__link">
            Home
          </a>
        </li>
        <li className="dropdown__list-item">
          <a href="#" className="dropdown__link">
            Menu
          </a>
        </li>
        <li className="dropdown__list-item">
          <a href="#" className="dropdown__link">
            About Us
          </a>
        </li>
        <li className="dropdown__list-item">
          <a href="#" className="dropdown__link">
            Calendar
          </a>
        </li>
        <li className="dropdown__list-item">
          <a href="#" className="dropdown__link">
            Catering
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
