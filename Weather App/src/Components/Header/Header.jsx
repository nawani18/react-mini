import "./Header.scss";

const Header = () => {
  const currentDate = new Date();

  return (
    <div className="header">
      <h1 className="header-title">Weather</h1>
      <h2 className="header-date">{currentDate.toDateString()}</h2>
    </div>
  );
};

export default Header;
