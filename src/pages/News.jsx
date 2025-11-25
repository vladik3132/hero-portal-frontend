import { useState, useEffect } from "react";
import "./News.css";

export default function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  const loadNews = async () => {
    try {
      const res = await fetch("https://hero-portal-backend-production.up.railway.app/api/news");
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setNews(data);
    } catch (err) {
      setError("Помилка завантаження новин");
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="news-container">
      <h1>Новини</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {news.map((n) => (
        <div key={n.id} className="news-card">
          <img src={n.photo} alt="" />
          <h3>{n.title}</h3>
          <p>{n.text}</p>
        </div>
      ))}
    </div>
  );
}
