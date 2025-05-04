# 💡 Suggestify — Client Side

**Suggestify** is a user-focused product recommendation platform. Users can submit product-related queries, receive recommendations, and explore suggestions by others. This `README.md` is dedicated to the **client-side** of the project, built with **React + Tailwind CSS**, and secured with **Firebase Authentication** and **JWT-based private routes**.

---

## 🌐 Live Site

🔗 [Live Website](https://suggestify-bd.web.app/)(https://suggestify-bd.web.app/)

---


## 🚀 Key Features

- 🔐 Firebase Email/Password & Google Authentication
- 🔐 JWT Protected Routes
- 📥 Add, Update, Delete Queries (Private)
- 💬 Add, Delete Recommendations
- 🔍 Query Search by Product Name
- 🔄 Grid Layout Toggle (1/2/3 Columns)
- 🧑‍💻 User-specific Query and Recommendation Management
- 📱 Fully Responsive Design (Mobile, Tablet, Desktop)
- 🌈 Smooth UI, Animations, and Clean Layout
- 🧭 404 Not Found Page Handling

---

## 🧪 Folder Structure (Key Sections)

suggestify-client/
│
├── src/
│ ├── components/ # Reusable UI components
│ ├── layout/ # Header, Footer, PrivateRoute
│ ├── pages/ # Page-level components (Home, Login, etc.)
│ ├── routes/ # All route declarations
│ ├── hooks/ # Custom hooks
│ ├── contexts/ # AuthContext (Firebase)
│ ├── utils/ # Utility functions (e.g., JWT handling)
│ └── main.jsx
│
├── public/
├── .env
├── tailwind.config.js
├── vite.config.js
└── README.md


---

## 🔧 Tech Stack

- React (Vite)
- React Router DOM
- Firebase Authentication
- JWT (Client-side validation with localStorage)
- Axios
- React Hook Form
- Tailwind CSS
- Heroicons
- React Toastify
- Lottie for animations

---

## 📦 NPM Packages Used

```bash
npm i axios react-router-dom firebase react-hook-form react-toastify lottie-react


🔐 Environment Variables
Create a .env file in the root directory of suggestify-client and add:

VITE_API_URL=https://suggestify-server.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


🛠️ How to Run Locally

git clone https://github.com/your-username/suggestify-client.git
cd suggestify-client
npm install
npm run dev


✨ Pages & Routes

| Route                     | Access  | Description                                   |
| ------------------------- | ------- | --------------------------------------------- |
| `/`                       | Public  | Home Page with Slider, Recent Queries, Extras |
| `/queries`                | Public  | All Queries with Grid Toggle & Search         |
| `/login`                  | Public  | Email/Password + Google Login                 |
| `/register`               | Public  | Register new users                            |
| `/query-details/:id`      | Public  | View details of a query + add recommendations |
| `/my-queries`             | Private | View, update, delete user’s queries           |
| `/add-query`              | Private | Add a new query                               |
| `/my-recommendations`     | Private | All recommendations made by the user          |
| `/recommendations-for-me` | Private | Recommendations made for the user’s queries   |
| `*`                       | Public  | 404 Page                                      |


🔒 Private Routes & JWT
JWT token is issued upon login and stored in localStorage.

Private routes are protected using a custom PrivateRoute component.

Token is sent with every authorized request via Axios headers.

📱 Responsive Design
Fully responsive layout using Tailwind CSS

Works on all screen sizes — mobile, tablet, desktop

📄 Deployment Notes
Firebase domain is whitelisted

Environment variables secured via .env

Handles route reload (404 errors prevented on production)

Responsive & consistent layout across devices

JWT integrated properly (no CORS/401 issues on private routes)

📚 Learning Outcomes
Mastered private route protection in React with Firebase & JWT

Implemented a dynamic, full-featured dashboard

Integrated secure form submission and real-time UI updates

Improved frontend performance and UX using reusable components

🙋‍♂️ Author
Mehedi Hasan
📧 mhasan2999@gmail.com
