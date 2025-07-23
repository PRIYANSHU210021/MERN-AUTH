# 🔐 MERN Stack Authentication System

A complete Authentication system built with the MERN stack that includes:

- ✅ User registration with email verification
- 🔐 Secure login with JWT
- 🔁 Password reset with OTP via email


---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Email Service:** NodeMailer with 6-digit OTP system

---

## 🚀 Features

- 🔐 User Registration with Email Verification
- 📨 6-Digit OTP sent via email for verification and password reset
- 🔁 Password Reset Flow (Forgot Password with OTP)
- ✅ JWT-based Authentication System
- 💾 MongoDB for data persistence
- 🎨 Tailwind CSS for clean UI

---


## 📂 Project Structure
```bash
i:/Projects/MERN-AUTH/
├── client/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├─] node_modules/ (ignored)
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── bg_img.png
│   │   ├── favicon.svg
│   │   └── lone-tree.jpg
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   ├── arrow_icon.svg
│   │   │   ├── assets.js
│   │   │   ├── bg_img.png
│   │   │   ├── emailTemplates.js
│   │   │   ├── favicon.svg
│   │   │   ├── hand_wave.png
│   │   │   ├── header_img.png
│   │   │   ├── lock_icon.svg
│   │   │   ├── logo.svg
│   │   │   ├── mail_icon.svg
│   │   │   ├── person_icon.svg
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages/
│   │       ├── EmailVerify.jsx
│   │       ├── Home.jsx
│   │       ├── Login.jsx
│   │       └── ResetPassword.jsx
│   └── vite.config.js
└── server/
    ├─] .env (ignored)
    ├── .gitignore
    ├── config/
    │   ├── db.js
    │   ├── emailTemplates.js
    │   └── nodemailer.js
    ├── controllers/
    │   ├── authController.js
    │   └── userController.js
    ├── middleware/
    │   └── userAuth.js
    ├── models/
    │   └── userModel.js
    ├─] node_modules/ (ignored)
    ├── package-lock.json
    ├── package.json
    ├── routes/
    │   ├── authRoutes.js
    │   └── userRoutes.js
    └── server.js
```

## 🚀 Getting Started

```bash
# 1. Clone the Repository
git clone https://github.com/your-username/mern-auth-app.git
cd mern-auth-app

# 2. Setup Backend
cd server
npm install

# 2. Setup Frontend
cd client
npm install
npm run dev


# Create a .env file and add your MongoDB URI, JWT secret, and email credentials
# Example .env variables:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
# EMAIL_USER=your_email@example.com
# EMAIL_PASS=your_email_password

npm start


