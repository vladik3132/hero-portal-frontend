import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Контакти</h1>

      <p className="contact-text">
        Якщо ви бажаєте запропонувати інформацію про героя або залишити відгук,
        скористайтеся наступними контактами:
      </p>

      <div className="contact-info">
        <p><b>Email:</b> hero.portal.ua@gmail.com</p>
        <p><b>Телефон:</b> +38 (099) 123 45 67</p>
      </div>

      <h2>Наше розташування</h2>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.4914685996627!2d30.515260476701044!3d50.45010058836141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56533cf189%3A0x6ae26f1c26d2d0f8!2z0JrQuNC10LTRg9C90LjRhtCwINC60LDQtNC-0LI!5e0!3m2!1suk!2sua!4v1709830000000!5m2!1suk!2sua"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
