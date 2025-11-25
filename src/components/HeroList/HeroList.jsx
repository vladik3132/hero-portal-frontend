import { useEffect, useState } from "react";
import { db, auth } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import HeroCard from "../HeroCard/HeroCard";
import "./HeroList.css";

export default function HeroList() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function loadHeroes() {
      const snapshot = await getDocs(collection(db, "heroes"));
      const arr = snapshot.docs.map((doc) => ({
        id: doc.id,      // ← ВАЖЛИВО!
        ...doc.data(),
      }));
      setHeroes(arr);
    }

    loadHeroes();
  }, []);

  return (
    <div className="hero-list">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
