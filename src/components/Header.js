export default function Header(props) {
  return (
    <div className="header-container">
      <div className="header-title">Chattr</div>
      <button className="header-menu" onClick={() => props.changeColorMode()}>
        Mode
      </button>
    </div>
  );
}
