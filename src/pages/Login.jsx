import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      window.location.href = "/admin";
    } catch (err) {
  console.log("ERROR:", err.code, err.message);
  alert(err.code + " — " + err.message);
  setError("Невірний логін або пароль");
}
  }

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Вхід адміністратора</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Пароль"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}
