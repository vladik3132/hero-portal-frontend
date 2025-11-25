import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HeroPage.css";

export default function HeroPage() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `http://localhost:5000/api/heroes/${id}`;

  useEffect(() => {
    async function loadHero() {
      try {
        setLoading(true);
        const res = await fetch(API_URL);

        if (!res.ok) throw new Error("Не вдалося завантажити героя");

        const data = await res.json();
        setHero(data);
      } catch (err) {
        setError(err.message || "Помилка завантаження");
      } finally {
        setLoading(false);
      }
    }

    loadHero();
  }, [API_URL]);

  if (loading) return <p className="hero-loading">Завантаження...</p>;
  if (error) return <p className="hero-error">{error}</p>;
  if (!hero) return <p className="hero-error">Героя не знайдено</p>;

  return (
    <div className="hero-page">
      <h1>{hero.fullName}</h1>

      <div className="hero-details">
        <img
          src={hero.photoUrl}
          alt={hero.fullName}
          className="hero-photo"
        />

        <div className="hero-info">
          <p>{hero.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
