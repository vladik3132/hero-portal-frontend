# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Люба Летиціє, зараз поясню **простими словами**, що таке твій стек технологій — тобто *які технології ти використовуєш у своєму проєкті*, навіщо вони, і як це виглядає очима розробника ❤️

---

# 🌐 **Стек технологій твого проєкту (повний і красивий опис)**

Твій проєкт складається з **двох частин: фронтенд + бекенд**
і це вже називається **Full-Stack проєкт**.

---

# 🎨 **FRONTEND (те, що бачить користувач)**

Стек фронтенду:

### ✅ **React.js**

Головний фреймворк, на якому побудована вся логіка інтерфейсу.
Швидкий, сучасний, компонентний.

### ✅ **React Router**

Відповідає за перемикання сторінок:

* /news
* /gallery
* /heroes
* /about
* і т.д.

### ✅ **HTML + CSS**

Базова розмітка та стилізація.

### ✅ **JavaScript (ES6+)**

Уся логіка: кнопки, списки, API-запити, стан.

### ❇️ Додатково (твій проєкт використовує):

* **Axios / fetch** — для запитів на сервер
* **Flexbox / Grid** — для верстки
* **CSS-модулі або прості CSS файли**
* **Компонентна структура /pages /components**

Фронт і бек в тебе **окремо**, бо так роблять всі професійні проєкти — це правильно.

---

# ⚙️ **BACKEND (те, що обробляє дані)**

Стек бекенду:

### ✅ **Node.js**

Платформа, на якій працює твій сервер.

### ✅ **Express.js**

Міні-фреймворк, який:

* створює маршрути (routes)
* слухає порти
* повертає дані у frontend

### Структура бекенду:

* /routes
* /controllers
* index.js
* firebase-admin.js
* .env (секрети)

---

# 🔥 **DATABASE (твоя база даних)**

### ✅ **Firebase Firestore**

Ти зберігаєш у ній:

* новини
* героїв
* галерею

Це NoSQL база, де все зберігається у вигляді колекцій і документів.

---

# 🔐 **Адмін-доступ**

### Получаєш через:

* service account
* firebase-admin SDK
* ключі в .env

---

# ☁️ **DEPLOYMENT (де живе твій сайт)**

### 🌍 Frontend → Vercel

(найкраще і безкоштовно)

### 🖥 Backend → Render

(підтримує Node.js сервери)

---

# 📦 **GitHub**

Ти зберігаєш код у репозиторіях:

* hero-portal-backend
* hero-portal-frontend

Використовуєш:

* `git add .`
* `git commit -m "..."`
* `git push`

---

# 🧠 **Підсумок — твій стек виглядає ОСЬ ТАК:**

---

## 🔹 **Frontend**

* React.js
* React Router
* JavaScript
* HTML/CSS
* Axios / fetch
* Компонентна архітектура

---

## 🔹 **Backend**

* Node.js
* Express.js
* REST API
* Обробка запитів
* Firebase Admin SDK

---

## 🔹 **Database**

* Firebase Firestore
* Firebase Service Account
* Secure ENV secrets

---

## 🔹 **DevOps / Hosting**

* Vercel (frontend)
* Render (backend)
* GitHub
* ENV variables
* CI/CD (автоматичне деплоїть)

---

# 💛 Якщо хочеш — зроблю тобі красивий опис "Стек технологій"

наприклад як у портфоліо, у PDF, або в README.md

Скажи, чи треба?
