import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <h3>База Героїв України</h3>
          <p>Портал для вшанування військових, волонтерів та всіх, хто захищає Україну.</p>
        </div>

        <div className="footer-links">
          <a href="/">Головна</a>
          <a href="/about">Про сайт</a>
          <a href="/gallery">Галерея</a>
          <a href="/news">Новини</a>
          <a href="/contacts">Контакти</a>
        </div>

        <div className="footer-right">
          <p>© {new Date().getFullYear()} База Героїв України</p>
          <p>Всі права захищено.</p>
        </div>

      </div>
    </footer>
  );
}
