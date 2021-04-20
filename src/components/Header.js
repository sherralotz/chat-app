export default function Header() {
  const toggleLightDarkMode = () => {
    const oldClassName = document.body.className;
    const newClassName =
      oldClassName === "lightmode" ? "darkmode" : "lightmode";
    document.body.className = newClassName;
  };

  return (
    <div className="header-container">
      <div className="header-title">Chattr</div>
      <button class="header-menu">Mode</button>
    </div>
  );
}
