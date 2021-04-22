import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

export default function Header(props) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(2);
  return (
    <div className="header-container">
      <div className="header-title">Chattr</div>
      {/* <button
        className="header-menu header-btn"
        onClick={() => props.changeColorMode()}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </button> */}

      <button {...buttonProps} className="header-menu header-btn">
        {" "}
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      <div className={isOpen ? "visible" : ""} role="menu">
        <a {...itemProps[0]} onClick={() => props.changeColorMode()}>
          Dark Mode
        </a>
        <a {...itemProps[1]} class="divider">
          Switch User
        </a>
        <a {...itemProps[1]} onClick={() => props.changeColorMode()}>
          Sign Out
        </a>
      </div>
    </div>
  );
}
