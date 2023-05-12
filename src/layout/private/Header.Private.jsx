
export const HeaderPrivate = () => {
    return (
<div className="header">
  <div className="header-left">
    <a href="index.html" className="logo">
      <img src="assets/img/logo.png" alt="Logo" />
    </a>
    <a href="index.html" className="logo logo-small">
      <img src="assets/img/logo-small.png" alt="Logo" width={30} height={30} />
    </a>
  </div>
  <div className="menu-toggle">
    <a href="javascript:void(0);" id="toggle_btn">
      <i className="fas fa-bars" />
    </a>
  </div>
</div>
    )
}