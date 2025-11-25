import HeroList from "../components/HeroList/HeroList";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <main style={{ padding: "20px 0" }}>
      <Slider />

      <section>
        <h2
          style={{
            color: "white",
            maxWidth: "1100px",
            margin: "0 auto 10px auto",
          }}
        >
          Герої України
        </h2>
        <HeroList />
      </section>
    </main>
  );
}
