import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import ToggleButton from "react-toggle-button";
import logo from "./logo.svg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Header(props) {
  const { buttonProps, isOpen } = useDropdownMenu(2);

  const confirmSignOut = () => {
    confirmAlert({
      title: "Logout",
      message: "Are you sure you want to log out?",
      overlayClassName: props.isColorLightMode ? "" : "darkmode",
      buttons: [
        {
          label: "Log Out",
          onClick: () => {
            props.logoutUser();
          },
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  };

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
              value={!props.isColorLightMode}
              onToggle={() => props.changeColorMode()}
            />
          </div>
        </a>
        <div className="divider"></div>
        <a
          href="#"
          onClick={() => {
            confirmSignOut();
          }}
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}
