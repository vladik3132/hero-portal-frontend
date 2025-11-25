import { Link } from "react-router-dom";
import "./HeroCard.css";

export default function HeroCard({ hero }) {
  return (
    <Link to={`/hero/${hero.id}`} className="hero-card">
      <img
        src={hero.photoUrl}
        alt={hero.fullName}
        className="hero-card__image"
      />

      <h3 className="hero-card__name">{hero.fullName}</h3>
      <p className="hero-card__category">{hero.category}</p>
      <p className="hero-card__desc">{hero.shortDescription}</p>
    </Link>
  );
}
