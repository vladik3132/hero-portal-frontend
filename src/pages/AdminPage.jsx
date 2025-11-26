import { useState, useEffect } from "react";
import "./AdminPage.css";

import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function AdminPage() {
  const [tab, setTab] = useState("heroes");

  // ---------------- HEROES ----------------
  const [heroes, setHeroes] = useState([]);
  const [heroName, setHeroName] = useState("");
  const [heroPhoto, setHeroPhoto] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const [editingHeroId, setEditingHeroId] = useState(null);

  const loadHeroes = async () => {
    const snapshot = await getDocs(collection(db, "heroes"));
    setHeroes(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    loadHeroes();
  }, []);

  const saveHero = async () => {
    if (!heroName.trim()) return alert("Вкажіть ім’я героя!");

    if (editingHeroId) {
      await updateDoc(doc(db, "heroes", editingHeroId), {
        fullName: heroName,
        photoUrl: heroPhoto,
        shortDescription: heroDesc,
      });
      setEditingHeroId(null);
    } else {
      await addDoc(collection(db, "heroes"), {
        fullName: heroName,
        photoUrl: heroPhoto,
        shortDescription: heroDesc,
      });
    }

    setHeroName("");
    setHeroPhoto("");
    setHeroDesc("");
    loadHeroes();
  };

  const deleteHero = async (id) => {
    await deleteDoc(doc(db, "heroes", id));
    loadHeroes();
  };

  const editHero = (hero) => {
    setEditingHeroId(hero.id);
    setHeroName(hero.fullName);
    setHeroPhoto(hero.photoUrl);
    setHeroDesc(hero.shortDescription);
  };

  // ---------------- NEWS ----------------
  const [news, setNews] = useState([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsPhoto, setNewsPhoto] = useState("");
  const [newsText, setNewsText] = useState("");

  const loadNews = async () => {
    const snap = await getDocs(collection(db, "news"));
    setNews(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const addNews = async () => {
    if (!newsTitle.trim()) return alert("Вкажіть заголовок новини!");

    await addDoc(collection(db, "news"), {
      title: newsTitle,
      photo: newsPhoto,
      text: newsText,
      date: new Date().toISOString(),
    });

    setNewsTitle("");
    setNewsPhoto("");
    setNewsText("");
    loadNews();
  };

  const deleteNews = async (id) => {
    await deleteDoc(doc(db, "news", id));
    loadNews();
  };

  // ---------------- GALLERY ----------------
  const [gallery, setGallery] = useState([]);
  const [galleryPhoto, setGalleryPhoto] = useState("");

  const loadGallery = async () => {
    const snap = await getDocs(collection(db, "gallery"));
    setGallery(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const addGalleryPhoto = async () => {
    if (!galleryPhoto.trim()) return alert("Додайте URL фото!");

    await addDoc(collection(db, "gallery"), {
      url: galleryPhoto,
    });

    setGalleryPhoto("");
    loadGallery();
  };

  const deleteGalleryPhoto = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
    loadGallery();
  };

  useEffect(() => {
    if (tab === "news") loadNews();
    if (tab === "gallery") loadGallery();
  }, [tab]);

  return (
    <div className="admin-container">
      <h1>Адмін панель</h1>

      {/* ADMIN MENU */}
      <div className="admin-tabs">
        <button
          className={`admin-tab-btn ${tab === "heroes" ? "active" : ""}`}
          onClick={() => setTab("heroes")}
        >
          Герої
        </button>

        <button
          className={`admin-tab-btn ${tab === "news" ? "active" : ""}`}
          onClick={() => setTab("news")}
        >
          Новини
        </button>

        <button
          className={`admin-tab-btn ${tab === "gallery" ? "active" : ""}`}
          onClick={() => setTab("gallery")}
        >
          Галерея
        </button>
      </div>

      {/* HEROES TAB */}
      {tab === "heroes" && (
        <>
          <div className="admin-card">
            <h2>Керування героями</h2>

            <input
              className="admin-input"
              type="text"
              placeholder="Ім'я"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />

            <input
              className="admin-input"
              type="text"
              placeholder="URL фото"
              value={heroPhoto}
              onChange={(e) => setHeroPhoto(e.target.value)}
            />

            <textarea
              className="admin-textarea"
              placeholder="Короткий опис"
              value={heroDesc}
              onChange={(e) => setHeroDesc(e.target.value)}
            />

            <button className="admin-btn-primary" onClick={saveHero}>
              {editingHeroId ? "Зберегти зміни" : "Додати героя"}
            </button>
          </div>

          <h3>Список героїв</h3>

          {heroes.map((h) => (
            <div key={h.id} className="admin-list-item">
              <strong>{h.fullName}</strong>
              <div>
                <button
                  className="admin-edit-btn"
                  onClick={() => editHero(h)}
                >
                  Редагувати
                </button>
                <button
                  className="admin-delete-btn"
                  onClick={() => deleteHero(h.id)}
                >
                  Видалити
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* NEWS TAB */}
      {tab === "news" && (
        <div className="admin-card">
          <h2>Новини</h2>

          <input
            className="admin-input"
            type="text"
            placeholder="Заголовок"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
          />

          <input
            className="admin-input"
            type="text"
            placeholder="Фото URL"
            value={newsPhoto}
            onChange={(e) => setNewsPhoto(e.target.value)}
          />

          <textarea
            className="admin-textarea"
            placeholder="Текст новини"
            value={newsText}
            onChange={(e) => setNewsText(e.target.value)}
          />

          <button className="admin-btn-primary" onClick={addNews}>
            Додати новину
          </button>

          <h3>Список новин</h3>

          {news.map((n) => (
            <div key={n.id} className="admin-list-item">
              <strong>{n.title}</strong>
              <button
                className="admin-delete-btn"
                onClick={() => deleteNews(n.id)}
              >
                Видалити
              </button>
            </div>
          ))}
        </div>
      )}

      {/* GALLERY TAB */}
      {tab === "gallery" && (
        <div className="admin-card">
          <h2>Галерея</h2>

          <input
            className="admin-input"
            type="text"
            placeholder="Фото URL"
            value={galleryPhoto}
            onChange={(e) => setGalleryPhoto(e.target.value)}
          />

          <button className="admin-btn-primary" onClick={addGalleryPhoto}>
            Додати фото
          </button>

          <h3>Фото</h3>

          {gallery.map((g) => (
            <div key={g.id} className="admin-list-item">
              <img src={g.url} alt="" width="120" />
              <button
                className="admin-delete-btn"
                onClick={() => deleteGalleryPhoto(g.id)}
              >
                Видалити
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
