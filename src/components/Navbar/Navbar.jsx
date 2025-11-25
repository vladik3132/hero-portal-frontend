import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);

  function handleLogout() {
    signOut(auth);
    window.location.href = "/login";
  }

  return (
    <nav className="navbar">
      <div className="logo">База Героїв України</div>

      <ul className="navbar-links">
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/about">Про сайт</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/news">Новини</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>

        {!user ? (
          <li><Link to="/login">Увійти</Link></li>
        ) : (
          <li onClick={handleLogout} className="logout-btn">Вийти</li>
        )}
      </ul>
    </nav>
  );
}
