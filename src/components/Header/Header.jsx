import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">База Героїв України</Link>
      </div>

      <nav className="header__nav">
        <Link to="/">Головна</Link>
        <Link to="/about">Про сайт</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/news">Новини</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/login" className="login-btn">Увійти</Link>
        
      </nav>
    </header>
  );
}
