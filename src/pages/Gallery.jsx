import { useEffect, useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:5000/api/gallery");
        const data = await res.json();
        setPhotos(data);
      } catch (e) {
        console.error("Error loading gallery:", e);
      }
    }
    load();
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Галерея</h1>

      <div className="gallery-grid">
        {photos.map((p) => (
          <div className="gallery-item" key={p.id}>
            <img src={p.url} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}
