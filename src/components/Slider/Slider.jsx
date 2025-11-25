import { useState } from "react";
import "./Slider.css";

const slides = [
  {
    id: 1,
    title: "Вшанування героїв України",
    text: "Портал зберігає історії військових, волонтерів та всіх, хто боронить нашу державу.",
  },
  {
    id: 2,
    title: "Сучасні веб-технології",
    text: "React, Firebase, REST API, адаптивний дизайн – все в одному навчальному проєкті.",
  },
  {
    id: 3,
    title: "Памʼятаємо кожного",
    text: "Мета порталу – зробити інформацію про героїв доступною для кожного українця.",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <div className="slider">
      <button className="slider__btn slider__btn--left" onClick={prevSlide}>
        ‹
      </button>

      <div className="slider__content">
        <h2>{current.title}</h2>
        <p>{current.text}</p>

        <div className="slider__dots">
          {slides.map((s, i) => (
            <span
              key={s.id}
              className={`slider__dot ${i === index ? "slider__dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <button className="slider__btn slider__btn--right" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}
