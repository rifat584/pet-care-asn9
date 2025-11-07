# ❄️ WarmPaws – Winter Pet Care Platform 🐾

A cozy and friendly web application designed to help pet owners keep their pets warm, healthy, and safe during winter. WarmPaws provides winter care services, expert tips, pet clothing options, grooming services, and more — all presented in a modern, responsive UI built with React, TailwindCSS, and DaisyUI.

---

## ✅ Live Demo
🔗 **Live URL:** *Add your Vercel/Netlify/Firebase hosting link here*

---

## ✅ Purpose of the Project
WarmPaws is a winter-season pet-care themed website created to practice:

- React fundamentals  
- React Router & dynamic routing  
- Firebase authentication (Login, Register, User Profile)  
- Protected routes  
- JSON-based data fetching  
- Component design  
- TailwindCSS + DaisyUI styling  
- Form handling  
- Swiper hero slider implementation  

---

## ✅ Key Features

### 🏠 Home Page
- Winter-themed Swiper hero slider  
- Popular Winter Care Services section (JSON data mapped into cards)  
- Winter Care Tips section (static)  
- Meet Our Expert Vets section (static)

### 🔐 Authentication
- Firebase Login & Register  
- onAuthStateChanged observer  
- Redirect to previous page after login  
- Display user avatar, name, email  
- Logout functionality  

### 👤 My Profile Page
- Shows user name, email, and photo  
- "Update Profile" button (future feature)

### 📝 Service Details Page
- Displays ALL fields from service JSON  
- Includes a booking form (Name, Email)  
- Shows success toast notification  
- Form clears after submission  

### 🧭 Navigation
- Dynamic Navbar (login/register OR avatar/logout)  
- Protected routes using PrivateRoute  
- Persistent Navbar & Footer

---

## ✅ Tech Stack

### **Frontend**
- React  
- React Router DOM  
- TailwindCSS  
- DaisyUI  
- Swiper JS  
- React Toastify  

### **Backend / Auth**
- Firebase Authentication  

---

## ✅ JSON Data
The project uses a local `services.json` file containing 6+ winter pet care services including:
- Service Name  
- Provider Info  
- Rating  
- Price  
- Category  
- Description  
- Image URL  
- Slots available  

---

## ✅ NPM Packages Used

| Package | Purpose |
|--------|---------|
| `react` | Core UI library |
| `react-router-dom` | Routing & navigation |
| `firebase` | Authentication (Login, Register, Observer) |
| `tailwindcss` | Styling |
| `daisyui` | UI components & theming |
| `swiper` | Hero slider |
| `react-toastify` | Toaster notifications |
| `prop-types` | Type checking (optional) |

