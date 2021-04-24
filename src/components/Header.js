import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import ToggleButton from "react-toggle-button";
import logo from "./logo.svg";

export default function Header(props) {
  const { buttonProps, isOpen } = useDropdownMenu(2);
  return (
    <div className="header-container">
      <div className="header-title">
        <img src={logo} alt="App logo" />
      </div>

      <button {...buttonProps} className="header-menu header-btn">
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      <div className={isOpen ? "visible" : ""} role="menu">
        <a href="#" onClick={() => props.changeColorMode()}>
          Dark Mode
          <div className="menuoption">
            <ToggleButton
              value={props.colorMode}
              onToggle={() => props.changeColorMode()}
            />
          </div>
        </a>
        <div className="divider"></div>
        <a href="#">Switch User</a>
        <a href="#" onClick={() => props.changeColorMode()}>
          Sign Out
        </a>
      </div>
    </div>
  );
}
