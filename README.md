# React Redux + JWT Authentication Demo  
**Student:** Het Jasani  
**Student ID:** 101501318  
**Course:** COMP3123 – Full Stack Development I  
**Lab:** Self-Directed Research & Innovation – Redux & JWT

---

## Overview

This project demonstrates **Redux state flow** and **JWT authentication** using a simple full-stack application.

### 🔹 Backend (Node + Express)
- `/api/login` — validates credentials and returns a JWT token  
- `/api/profile` — protected endpoint that requires a valid JWT  

### 🔹 Frontend (React + Redux Toolkit)
- Login form (dispatches login action)
- Redux store (state, reducer, actions, dispatch, subscribe)
- Protected profile page

---

## 🔧 Tools & Libraries Used

### Backend
- `express`
- `cors`
- `jsonwebtoken`
- `bcryptjs`
- `nodemon`

### Frontend
- React (Vite)
- Redux Toolkit
- React-Redux
- Axios

---

## 🔁 Redux Concepts Demonstrated

| Concept | Where Implemented | Explanation |
|--------|--------------------|-------------|
| **0 – State** | `initialState` in `authSlice.js` | Holds token, user, status, error |
| **1 – Store** | `store.js` | Global store created using `configureStore` |
| **2 – Reducer** | `authSlice.reducer` | Updates state based on actions |
| **3 – Action** | `loginUser`, `fetchProfile`, `logout` | Trigger state changes |
| **4 – Dispatch** | `dispatch(loginUser())` in `LoginForm.jsx` | Sends action to reducer |
| **5 – Subscribe** | `store.subscribe()` in `store.js` | Logs state changes |

---

## 🔐 Login Credentials

Use the following to test login:

